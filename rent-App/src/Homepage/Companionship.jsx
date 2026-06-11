import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarimageCom from "../assets/Vector (3).png";
import "./Companionship.css";

const Companionship = () => {
  return (
    <Container>
      <section className="companionship_section">
        <Row className="align-items-center">

          <Col lg={7} className="companionship_text_col">
            <h1 className="companionship_heading">
              Enjoy every mile with <br /> adorable companionship.
            </h1>
            <p className="companionship_subtext">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </p>
            <div className="companionship_search">
              <input
                type="text"
                placeholder="City"
                className="companionship_input"
              />
              <button className="companionship_btn">Search</button>
            </div>
          </Col>

          <Col lg={5} className="companionship_img_col">
            <img
              src={CarimageCom}
              alt="Car silhouette"
              className="companionship_car_img"
            />
          </Col>

        </Row>
      </section>
    </Container>
  );
};

export default Companionship;
