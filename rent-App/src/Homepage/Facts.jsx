import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Data1 from "../assets/Icon+ text (1).png";
import Data2 from "../assets/Icon+ text (2).png";
import Data3 from "../assets/Icon+ text (3).png";
import Data4 from "../assets/Icon+ text.png";
import CarBack from '../assets/Img.png';

import "./Facts.css";

const Facts = () => {
  return (
     <Container>
    <section className="facts-section">
        <div className="facts-wrapper text-center">
          <h1>Facts In Numbers</h1>

          <p>
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in.
          </p>
          <Row className="g-4 mt-4">
            
            <Col lg={3} md={6}>
              <Card className="fact-card">
                <div className="icon-box">
                  <img src={Data4} alt="" />
                </div>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="fact-card">
                <div className="icon-box">
                  <img src={Data1} alt="" />
                </div>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="fact-card">
                <div className="icon-box">
                  <img src={Data2} alt="" />
                </div>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="fact-card">
                <div className="icon-box">
                  <img src={Data3} alt="" />
                </div>
              </Card>
            </Col>

          </Row>
        </div>
    </section>
          </Container>
  );
};

export default Facts;