import React from "react";
import './Header.css';
import  phone from '../../images/phoneCall.png';
import message from '../../images/message.png';
const Header = () => {
  return(
    <section className="intro"> 
      <div className="intro-wrapper">
        <img className='message-img'src={message} alt='smartphone text bubble'/>
        <img className="phone-img"src={phone} alt='picture of iphone'/>
      </div>
      <div className="message-wrap"> 
        <h1> Honey.... </h1>
        <h2> Don't forget the shopping list!</h2>
      </div>
    </section>
  )
}
export default Header; 