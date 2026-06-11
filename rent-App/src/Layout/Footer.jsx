import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCar,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_section">
      <Container>

        <Row className="footer_top align-items-center">
          <Col md={3} className="d-flex align-items-center gap-1 mb-4 mb-md-0">
            <FaCar size={32} />
            <h6 className="mb-0 fw-bold fs-6">Car Rental</h6>
          </Col>

          <Col md={3} className="d-flex align-items-center gap-3 mb-4 mb-md-0">
            <div className="footer_icon_box">
              <FaMapMarkerAlt className="footer_icon" />
            </div>
            <div>
              <small className="text-muted d-block">Address</small>
              <span className="fw-bold footer_contact_text">Oxford Ave. Cary, NC 27511</span>
            </div>
          </Col>

        
          <Col md={3} className="d-flex align-items-center gap-3 mb-4 mb-md-0">
            <div className="footer_icon_box">
              <FaEnvelope className="footer_icon" />
            </div>
            <div>
              <small className="text-muted d-block">Email</small>
              <span className="fw-bold footer_contact_text">nwiger@yahoo.com</span>
            </div>
          </Col>

          <Col md={3} className="d-flex align-items-center gap-3">
            <div className="footer_icon_box">
              <FaPhoneAlt className="footer_icon" />
            </div>
            <div>
              <small className="text-muted d-block">Phone</small>
              <span className="fw-bold footer_contact_text">+537 547-6401</span>
            </div>
          </Col>

        </Row>

      
        <hr className="footer_divider" />

        <Row className="footer_bottom_row">
          <Col md={4} className="mb-4 mb-md-0">
            <p className="footer_description">
              Faucibus faucibus pellentesque dictum turpis.
              Id pellentesque turpis massa a id iaculis lorem t...
            </p>
            <div className="footer_social_icons">
              <div className="footer_social_btn">
                <FaFacebookF size={16} />
              </div>
              <div className="footer_social_btn">
                <FaInstagram size={16} />
              </div>
              <div className="footer_social_btn">
                <FaXTwitter size={16} />
              </div>
              <div className="footer_social_btn">
                <FaYoutube size={16} />
              </div>
            </div>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer_title">Useful links</h5>
            <ul className="footer_list">
              <li>About us</li>
              <li>Contact us</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>F.A.Q</li>
            </ul>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="footer_title">Vehicles</h5>
            <ul className="footer_list">
              <li>Sedan</li>
              <li>Cabriolet</li>
              <li>Pickup</li>
              <li>Minivan</li>
              <li>SUV</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="footer_title">Download App</h5>
            <div className="footer_app_badges">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="footer_app_img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="footer_app_img"
              />
            </div>
          </Col>

        </Row>

        <div className="footer_copyright">
          © Copyright Car Rental 2024. Design by Figma.guru
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
