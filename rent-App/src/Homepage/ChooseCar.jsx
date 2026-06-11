import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCog, FaGasPump, FaSnowflake } from "react-icons/fa";
import axios from "axios";
import { NavLink } from "react-router-dom";
import './Choosecar.css'

const CarCard = ({ car }) => (
  <div className="car_card">
    <div className="car_img_wrap">
      {/* ✅ Fixed: was car.image (undefined), now car.thumbnail */}
      <img src={car.thumbnail} alt={car.title} className="car_img" />
    </div>

    <div className="car_info">
      <div className="car_info_top">
        <div>
          <h6 className="car_name">{car.title}</h6>
          <small className="car_type">{car.category}</small>
        </div>

        <div className="text-end">
          <span className="car_price">${car.price}</span>
          <small className="car_per_day d-block">per day</small>
        </div>
      </div>

      <div className="car_features">
        <span className="car_feature">
          <FaCog className="feature_ico" /> Automat
        </span>

        <span className="car_feature">
          <FaGasPump className="feature_ico" /> PB 95
        </span>

        <span className="car_feature">
          <FaSnowflake className="feature_ico" /> Air Conditioner
        </span>
      </div>

      <NavLink to={`/Detailpage/${car.id}`}>
        <Button className="car_btn">View Details</Button>
      </NavLink>
    </div>
  </div>
);

const OtherCars = () => {
  const [storedata, setStoredata] = useState([]);

  const API = "https://dummyjson.com/products";

  const fetchProducts = () => {
    axios
      .get(API)
      .then((resp) => {
        setStoredata(resp.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <section className="cars_section">
        <div className="cars_header">
          <h2 className="cars_heading">Other Cars</h2>

          <NavLink to="/" className="cars_view_all">
            View All →
          </NavLink>
        </div>

        <Row className="g-4">
          {storedata.map((car) => (
            <Col key={car.id} xs={12} md={6} lg={4}>
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default OtherCars;