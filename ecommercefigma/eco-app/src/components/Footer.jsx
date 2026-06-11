import "./Footer.css"
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">

      
      <div className="newsletter">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="newsletter-right">
          <input type="email" placeholder="✉ Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

    
      <div className="footer">


        <div className="footer-brand">
          <h3>SHOP.CO</h3>
          <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
          <div className="socials">
            <span><FaTwitter/></span>
            <span><FaFacebookF/></span>
            <span><FaInstagram/></span>
            <span><FaGithub/></span>
          </div>
        </div>
        

        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="payment-icons">
          <span>VISA</span>
          <span>💳</span>
          <span>PayPal</span>
          <span>Apple Pay</span>
          <span>G Pay</span>
        </div>
      </div>

    </div>
  )
}

export default Footer