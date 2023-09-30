//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;
    struct NFTToken {
        uint256 tokenId;
        uint256 price;
        address payable owner;
        address payable seller;
        bool displayable;
    }
    mapping(uint256 => NFTToken) private tokenIdtoNFT;
    uint256 _listingPrice = 0.001 ether;
    address payable owner;
    constructor() ERC721("NFTMarketPlace", "NFTMP") {
        owner = payable(msg.sender);
    }
    function getListingPrice() public view returns(uint256) {
        return _listingPrice;
    }
    function updateListingPrice(uint256 price) public {
        require(msg.sender == owner, "Listing Price can only be updated by owner");
        _listingPrice = price;
    }
    function getLatestIdToListedToken() public view returns (NFTToken memory) {
        uint256 currentTokenId = _tokenIds.current();
        return tokenIdtoNFT[currentTokenId];
    }

    function getListedTokenForId(uint256 tokenId) public view returns (NFTToken memory) {
        return tokenIdtoNFT[tokenId];
    }
    function createToken(uint256 price, string memory _tokenURI) public payable returns(uint256) {
        _tokenIds.increment();
        uint256 currentTokenId = _tokenIds.current();
        _safeMint(msg.sender, currentTokenId);
        _setTokenURI(currentTokenId, _tokenURI);
        require(msg.value == _listingPrice, "Please give listing price to show NFT on platform !!");
        require(price>0, "Token price should be positive");
        _transfer(msg.sender, address(this), currentTokenId);
        tokenIdtoNFT[currentTokenId] = NFTToken(
            currentTokenId,
            price,
            payable (address(this)),
            payable (msg.sender),
            true   
        );
        return currentTokenId;
    }

    function resale(uint256 price, uint256 tokenId) public payable {
        require(tokenIdtoNFT[tokenId].owner == msg.sender, "Owner should be the one selling !!");
        require(msg.value == _listingPrice, "Please give listing price to show NFT on platform !!");
        require(price>0, "Price should be positive");
        tokenIdtoNFT[tokenId].price = price;
        tokenIdtoNFT[tokenId].owner = payable(address(this));
        tokenIdtoNFT[tokenId].seller = payable(msg.sender);
        tokenIdtoNFT[tokenId].displayable = true;
        _tokensSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }
    function executeSale(uint256 tokenId) public payable {
        require(msg.value == tokenIdtoNFT[tokenId].price, "Purchase value must be equal to the price");
        payable(owner).transfer(_listingPrice);
        payable(tokenIdtoNFT[tokenId].seller).transfer(msg.value);
        _tokensSold.increment();
        tokenIdtoNFT[tokenId].owner = payable(msg.sender);
        tokenIdtoNFT[tokenId].displayable = false;
        _transfer(address(this), msg.sender, tokenId);
    }

    function getUnsoldNFT() public view returns(NFTToken[] memory) {
        uint256 count = _tokenIds.current();
        uint256 countOfUnsold = _tokenIds.current() - _tokensSold.current();
        NFTToken[] memory unsoldTokens = new NFTToken[](countOfUnsold);
        uint256 currentIdx = 0;
        for(uint i=0;i<count;i++){
            if(tokenIdtoNFT[i+1].owner == address(this)){
                NFTToken storage marketItem = tokenIdtoNFT[i+1];
                unsoldTokens[currentIdx] = marketItem;
                currentIdx+=1;
            }
        }
        return unsoldTokens;
    }

    function getUserNFTS() public view returns(NFTToken[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 userNFTsCount = 0;
        for(uint i=0;i<totalCount;i++) {
            if(tokenIdtoNFT[i+1].owner == msg.sender) {
                userNFTsCount+=1;
            }
        }
        NFTToken[] memory userNFTs = new NFTToken[](userNFTsCount);
        uint256 count=0;
        for(uint i=0;i<totalCount;i++)
        {
            if(tokenIdtoNFT[i+1].owner == msg.sender) {
                NFTToken memory tempUserToken = tokenIdtoNFT[i+1];
                userNFTs[count] = tempUserToken;
                count+=1;
            }
        }
        return userNFTs;
    }
    function getSellerTokens() public view returns(NFTToken[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 sellerNFTsCount = 0;
        for(uint i=0;i<totalCount;i++){
            if(tokenIdtoNFT[i+1].seller == msg.sender) {
                sellerNFTsCount+=1;
            }
        }
        NFTToken[] memory sellerNFTs = new NFTToken[](sellerNFTsCount);
        uint256 count=0;
        for(uint i=0;i<totalCount;i++) {
            if(tokenIdtoNFT[i+1].seller == msg.sender) {
                NFTToken memory tempNFT = tokenIdtoNFT[i+1];
                sellerNFTs[count]=tempNFT;
                count+=1;   
            }
        }
        return sellerNFTs;
    }
}