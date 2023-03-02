import React from 'react'
import './Footer.css'
import logo from '../../assets/Akhil-photo.jpeg'
import { GitHub, LinkedIn,Facebook,Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer>
    <div className='footer-logo'>
        <img src={logo} alt=""></img>

    </div>
    {/* copyright */}
    <div className="footer-copyright">
    <p>© Akhil T N. All Right reserved</p>
    </div>
    {/* social */}
    <ul className="footer-social-media">
      <li>
        <a href="">
        <Instagram/>
        </a>
      </li>
      <li>
        <a href="">
        <Facebook />
        </a>
      </li>
      <li>
        <a href="">
         <GitHub />
        </a>
      </li>
      <li>
        <a href="">
         <LinkedIn />
        </a>
      </li>
    </ul>
    </footer>
  )
}

export default Footer
