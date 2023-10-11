import './App.css';
import Home from './pages/index';
import {
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  Collection,
  NFTCard} from './components/componentindex';
function App() {
  return (
    <div className="App">
      <Home/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <Collection/>
      <Title heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories"/>
      <Category/>
      <Subscribe/>
    </div>
  );
}

export default App;
