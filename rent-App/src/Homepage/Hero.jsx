import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Select from "react-select"; 
import { FaMapMarkerAlt, FaCar, FaWallet,  FaCheckCircle } from "react-icons/fa";
import "./Hero.css";

const carOptions = [
  { value: "Sedan", label: "Sedan" },
  { value: "SUV", label: "SUV" },
  { value: "Pickup", label: "Pickup" },
  { value: "Minivan", label: "Minivan" },
];

const locationOptions = [
  { value: "Lahore", label: "Lahore" },
  { value: "Islamabad", label: "Islamabad" },
  { value: "Karachi", label: "Karachi" },
];

const HeroSection = () => {
  const [bookingData, setBookingData] = useState({
    carType: "",
    placeOfRental: "",
    placeOfReturn: "",
    rentalDate: "",
    returnDate: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    setBookingData((prev) => ({
      ...prev,
      [fieldName]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with state data:", bookingData);
    setShowModal(true);
  };

  return (
    <>
      <Container>
        <section className="hero_section">
          <form onSubmit={handleSubmit}>
            <Row className="align-items-center hero_row">

              <Col lg={6} className="hero_text_col">
                <h1 className="hero_heading">
                  Experience the road like never before
                </h1>
                <p className="hero_subtext">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus
                  porttitor tristique et gravida. Quis nunc interdum gravida
                  ullamcorper
                </p>
                <button type="button" className="hero_btn">View all cars</button>
              </Col>

              <Col lg={6} className="d-flex justify-content-end">
                <div className="booking_card">
                  <h4 className="booking_title">Book your car</h4>

                  <div className="booking_field d-flex align-items-center justify-content-between position-relative">
                    <Select
                      options={carOptions}
                      value={carOptions.find(opt => opt.value === bookingData.carType) || null}
                      onChange={(opt) => handleSelectChange(opt, "carType")}
                      placeholder="Select Car Type"
                      isSearchable={false}
                      className="w-100"
                      required
                    />
                  </div>

                  <div className="booking_field d-flex align-items-center justify-content-between position-relative">
                    <Select
                      options={locationOptions}
                      value={locationOptions.find(opt => opt.value === bookingData.placeOfRental) || null}
                      onChange={(opt) => handleSelectChange(opt, "placeOfRental")}
                      placeholder="Select Place of Rental"
                      isSearchable={false}
                      className="w-100"
                      required
                    />
                  </div>

                  <div className="booking_field d-flex align-items-center justify-content-between position-relative">
                    <Select
                      options={locationOptions}
                      value={locationOptions.find(opt => opt.value === bookingData.placeOfReturn) || null}
                      onChange={(opt) => handleSelectChange(opt, "placeOfReturn")}
                      placeholder="Select Place of Return"
                      isSearchable={false}
                      className="w-100"
                      required
                    />
                  </div>

                  <div className="booking_field d-flex align-items-center justify-content-between">
                    <input
                      type="date"
                      name="rentalDate"
                      value={bookingData.rentalDate}
                      onChange={handleChange}
                      className="booking_label border-0 bg-transparent w-100 text-body"
                      required
                      style={{ outline: "none", cursor: "pointer" }}
                    />
                  </div>
                  
                  <div className="booking_field d-flex align-items-center justify-content-between">
                    <input
                      type="date"
                      name="returnDate"
                      value={bookingData.returnDate}
                      onChange={handleChange}
                      className="booking_label border-0 bg-transparent w-100 text-body"
                      required
                      style={{ outline: "none", cursor: "pointer" }}
                    />
                  </div>

                  <button type="submit" className="booking_btn">Book now</button>
                </div>
              </Col>

            </Row>
          </form>
        </section>
      </Container>

      <Container>
        <section className="features_section">
          <Row className="justify-content-center">
            <Col md={4} className="feature_col text-center">
              <div className="feature_icon_wrap"><FaMapMarkerAlt className="feature_icon" /></div>
              <h5 className="feature_title">Availability</h5>
              <p className="feature_text">Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
            </Col>
            <Col md={4} className="feature_col text-center">
              <div className="feature_icon_wrap"><FaCar className="feature_icon" /></div>
              <h5 className="feature_title">Comfort</h5>
              <p className="feature_text">Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis</p>
            </Col>
            <Col md={4} className="feature_col text-center">
              <div className="feature_icon_wrap"><FaWallet className="feature_icon" /></div>
              <h5 className="feature_title">Savings</h5>
              <p className="feature_text">Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
            </Col>
          </Row>
        </section>
      </Container>

  <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered
        contentClassName="border-0 shadow"
        style={{ borderRadius: '16px' }}
         >
        <Modal.Header closeButton className="border-0 pb-0" />
        <Modal.Body className="text-center px-4 pb-4">
          <FaCheckCircle size={55} className="text-success mb-3" />
          <h3 className="fw-bold mb-2">We Received your booking!</h3>
          <p className="text-muted mb-4">
            We are searching for available <strong className="text-dark">{bookingData.carType}s</strong> located at <strong>{bookingData.placeOfRental}</strong> from {bookingData.rentalDate} to {bookingData.returnDate} and will update you soon.
          </p>
          <Button 
            variant="warning" 
            onClick={handleCloseModal}
            className="w-100 fw-bold py-2 border-0 text-white"
            style={{ backgroundColor: "#fba324", borderRadius: "25px" }}
          >
            Got it, thanks!
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HeroSection;