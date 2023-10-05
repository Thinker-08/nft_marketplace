import React from 'react'
import './helpcenter.css'
const Helpcenter = () => {
  const helpcenter = [
    {
      name:'About',
      link: 'about'
    },{
      name:'Contact Us',
      link: 'contact-us'
    },{
      name:'Signup',
      link: 'signup'
    },{
      name:'Signin',
      link: 'Signin'
    },{
      name:'Subscription',
      link: 'Subscription'
    }
  ]
  return (
    <div className='box'>
      {helpcenter.map((el, i)=>(
        <div className='helpCenter'>
          <a href={{pathname: `${el.link}`}} style={{textDecoration: "none", color: "inherit"}}>{el.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Helpcenter