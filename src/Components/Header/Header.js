import React from 'react'
import Typical from 'react-typical'
import './Header.css'
import profileImg from '../../assets/profileImg.png'
const Header = () => {
  return (
    <div className='header-container'>
     <div className='header-content'>
     <h1 className='hy'>Hi Am</h1>
     <h2 className='fullname'>Akhil T N</h2>
     <h2>
        I'm a <Typical steps={[
            'Full Stack Developer 💙 ',2000,
            'Node.JS Developer 💙',3000,
            'React.JS Developer 💙',2000
        ]} loop={Infinity} wrapper='b'
        />
     </h2>
     <p>I seek challenging opportunities where I
can fully use my skills for the success of
the organization. Ability to work with
HTML,CSS and Javascript.Can work well
under pressure and make the best of my
skills in any situations.Passionate
individual with great interpersonal and
communication skills. Looking to start
my career as an entri level software
engineer </p>
     <div className='header-payment-container'>
        <button>Hire me </button>
        <i className='fa-brands fa-paypal'></i>
        <i className='fa-brands fa-cc-visa'></i>
        <i className='fa-brands fa-cc-mastercard'></i>
        <i className='fa-brands fa-cc-amex'></i>
     </div>
     </div>
     <div className='profile-img-container'>
<img src={profileImg} alt='prfileImg'></img>
<div className='circle-1'></div>
<div className='circle-2'></div>
     </div>

    </div >
  )
}

export default Header
