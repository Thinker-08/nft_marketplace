import React from 'react'

import './discover.css'
const Discover = () => {
  const discover = [
    {
      name:"Collection",
      link: 'collection'
    },{
      name:"Search",
      link: 'search'
    },{
      name:"Author Profile",
      link: 'author-profile '
    },{
      name:"NFT Details",
      link: 'NFT-details'
    },{
      name:"Account Setting",
      link: 'account-setting'
    },{
      name:"Connect Wallet",
      link: 'connect-wallet'
    },{
      name:"Blog",
      link: 'blog'
    },
  ]
  return (
    <div>
      {discover.map((el, i)=>(
        <div key={i+1} className='discover'>
        <a href={{pathname: `${el.link}`}} style={{textDecoration: "none", color: "inherit"}}>{el.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Discover