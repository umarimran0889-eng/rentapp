import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HeroCar.css";

const steps = [
  {
    number: 1,
    title: "Erat at semper",
    text: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...",
  },
  {
    number: 2,
    title: "Urna nec vivamus risus duis arcu",
    text: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    number: 3,
    title: "Lobortis euismod imperdiet tempus",
    text: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    number: 4,
    title: "Cras nulla aliquet nam eleifend amet et",
    text: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
  },
];

const HeroCar = () => {
  return (
    <Container>
    <section className="steps_section">
        <Row className="align-items-center">
          <Col lg={6} className="steps_image_col">
            <div className="steps_image_wrap">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
                alt="Luxury car"
                className="steps_car_img"
              />
            </div>
          </Col>

          <Col lg={6} className="steps_content_col">
            {steps.map((step) => (
              <div key={step.number} className="step_item">
                <div className="step_header">
                  <div className="step_badge">{step.number}</div>
                  <h5 className="step_title">{step.title}</h5>
                </div>
                <p className="step_text">{step.text}</p>
              </div>
            ))}
          </Col>

        </Row>
    </section>
       </Container>
  );
};

export default HeroCar;
