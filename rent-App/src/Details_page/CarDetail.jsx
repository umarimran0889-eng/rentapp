import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCog,
  FaGasPump,
  FaDoorOpen,
  FaSnowflake,
  FaUser,
  FaTachometerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getProductbyid } from "../Services/Api";
import "./CarDetail.css";

const specs = [
  { icon: <FaCog />, label: "Gear Box", value: "Automatic" },
  { icon: <FaGasPump />, label: "Fuel", value: "Petrol" },
  { icon: <FaDoorOpen />, label: "Doors", value: "4" },
  { icon: <FaSnowflake />, label: "Air Conditioner", value: "Yes" },
  { icon: <FaUser />, label: "Seats", value: "5" },
  { icon: <FaTachometerAlt />, label: "Distance", value: "500 KM" },
];

const equipment = [
  "ABS",
  "Air Bags",
  "Cruise Control",
  "Air Conditioner",
  "GPS",
  "Bluetooth",
];

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  // ✅ Track which image is shown in the main viewer
  const [activeImg, setActiveImg] = useState("");

  const fetchProducts = () => {
    getProductbyid(id)
      .then((resp) => {
        setCar(resp.data);
        // ✅ Set thumbnail as default main image
        setActiveImg(resp.data.thumbnail);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  if (!car) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <section className="cardetail_section">
      <Container>
        <Row>
          <Col lg={5} className="cardetail_left">
            <h2 className="cardetail_name">{car.title}</h2>

            <p className="cardetail_price">
              <span className="price_amount">${car.price}</span>
              <span className="price_day"> / day</span>
            </p>

            {/* ✅ Fixed: shows activeImg instead of broken car.image */}
            <div className="cardetail_main_img_wrap">
              <img
                src={activeImg}
                alt={car.title}
                className="cardetail_main_img"
              />
            </div>

            {/* ✅ Clickable thumbnails from car.images array */}
            <div className="cardetail_thumbs">
              {car.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  className={`cardetail_thumb ${activeImg === img ? "active_thumb" : ""}`}
                  onClick={() => setActiveImg(img)}
                />
              ))}
            </div>
          </Col>

          <Col lg={7} className="cardetail_right">
            <h4 className="cardetail_section_title">Technical Specification</h4>

            <div className="specs_grid">
              {specs.map((spec, i) => (
                <div key={i} className="spec_card">
                  <div className="spec_icon">{spec.icon}</div>
                  <div className="spec_label">{spec.label}</div>
                  <div className="spec_value">{spec.value}</div>
                </div>
              ))}
            </div>

            <button className="rent_btn">Rent a Car</button>

            <h4 className="cardetail_section_title mt-4">Product Description</h4>
            <p className="car_description">{car.description}</p>

            <h4 className="cardetail_section_title mt-4">Car Equipment</h4>
            <div className="equipment_grid">
              {equipment.map((item, index) => (
                <div key={index} className="equipment_item">
                  <FaCheckCircle className="equipment_icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h5>Category:</h5>
              <p>{car.category}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarDetail;