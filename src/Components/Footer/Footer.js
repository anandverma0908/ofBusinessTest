import React from 'react';
import Link from '../Links/Link';
import './Footer.css';
import github from "../../assets/github.png"

const leftLinks = ["Terms", "Privacy", "Security", "Status", "Docs"];
const rightLinks = ["Contact GitHub", "Pricing", "API", "Training", "Blog", "About"];

const Footer = () => {
  return (
    <div className='footer'>
      {/* <hr className='divider' /> */}
      <div className='footer-left-content'>
        {
          leftLinks.map((linkName) => {
            return <Link name={linkName} textColor="#0969da" />
          })
        }
      </div>
      <div className='footer-image'>
        <img src={github} />
      </div>
      <div className='footer-right-content'>
        {
          rightLinks.map((linkName) => {
            return <Link name={linkName} textColor="#0969da" />
          })
        }
      </div>
    </div>
  )
}

export default Footer