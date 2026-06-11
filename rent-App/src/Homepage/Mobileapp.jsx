import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Mobileapp.css";
import ImgMobile from "../assets/Group 9.png";

const MobileSection = () => {
  return (
    <Container>
      <section className="mobile_section">
        <Row className="align-items-center mobile_row">

          {/* Left: Text + Badges */}
          <Col lg={6} className="mobile_text_col">
            <h1 className="mobile_heading">
              Download <br /> mobile app
            </h1>
            <p className="mobile_subtext">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
              turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
              aliquet cras hendrerit enim condimentum. Condimentum interdum
              risus bibendum urna
            </p>
            <div className="mobile_badges">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="mobile_badge_img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="mobile_badge_img"
              />
            </div>
          </Col>

          {/* Right: Two overlapping phone images */}
          <Col lg={6} className="mobile_phones_col">
            <div className="mobile_phones_wrap">
              <img id="Mpic1" src={ImgMobile} alt="mobile app screen" />
              <img id="Mpic2" src={ImgMobile} alt="mobile app screen" />
            </div>
          </Col>

        </Row>
      </section>
    </Container>
  );
};

export default MobileSection;
