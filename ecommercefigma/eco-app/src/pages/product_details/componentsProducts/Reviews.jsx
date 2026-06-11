import './Review.css'
import { HiAdjustmentsVertical, HiMiniAdjustmentsVertical } from "react-icons/hi2";


import React from 'react'

const Reviews = () => {
  return (
    
    <div className="rr-page">

    <div className="rr-tabs">
      <button className="rr-tab">Product Details</button>
      <button className="rr-tab rr-tab--active">Rating & Reviews</button>
      <button className="rr-tab">FAQs</button>
    </div>

    <div className="rr-header">
      <div className="rr-header__left">
        <span className="rr-header__label">All Reviews</span>
        <span className="rr-header__count">(451)</span>
      </div>
      <div className="rr-header__right">
        <button className="rr-filter-btn"> <HiMiniAdjustmentsVertical/></button>
        <button className="rr-sort-btn">Latest ▾</button>
        <button className="rr-write-btn">Write a Review</button>
      </div>
    </div>
    <div className="rr-grid">

<div className="review-card">
  <div className="review-card__top">
    <div className="star-rating">
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--half">★</span>
    </div>

<span className="review-card__menu">···</span>
  </div>
  <div className="review-card__author">
    <span className="review-card__name">Samantha D.</span>
    <span className="review-card__verified">✓</span>
  </div>
  <p className="review-card__text">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
  <p className="review-card__date">Posted on August 14, 2023</p>
</div>

<div className="review-card">
  <div className="review-card__top">
    <div className="star-rating">
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--empty">★</span>
    </div>
    <span className="review-card__menu">···</span>
  </div>
  <div className="review-card__author">
    <span className="review-card__name">Alex M.</span>
    <span className="review-card__verified">✓</span>
  </div>
  <p className="review-card__text">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
  <p className="review-card__date">Posted on August 15, 2023</p>
</div>

<div className="review-card">
  <div className="review-card__top">
    <div className="star-rating">
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--half">★</span>
    </div>
    <span className="review-card__menu">···</span>
  </div>
  <div className="review-card__author">
    <span className="review-card__name">Ethan R.</span>
    <span className="review-card__verified">✓</span>
  </div>
  <p className="review-card__text">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
  <p className="review-card__date">Posted on August 16, 2023</p>
</div>

<div className="review-card">
  <div className="review-card__top">
    <div className="star-rating">
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--empty">★</span>
    </div>
    <span className="review-card__menu">···</span>
  </div>
  <div className="review-card__author">
    <span className="review-card__name">Olivia P.</span>
    <span className="review-card__verified">✓</span>
  </div>
  <p className="review-card__text">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
  <p className="review-card__date">Posted on August 17, 2023</p>
</div>

<div className="review-card">
  <div className="review-card__top">
    <div className="star-rating">
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--empty">★</span>
    </div>
    <span className="review-card__menu">···</span>
  </div>
  <div className="review-card__author">
    <span className="review-card__name">Liam K.</span>
    <span className="review-card__verified">✓</span>
  </div>
  <p className="review-card__text">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
  <p className="review-card__date">Posted on August 18, 2023</p>
</div>

<div className="review-card">
  <div className="review-card__top">
    <div className="star-rating">
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--full">★</span>
      <span className="star star--half">★</span>
    </div>
    <span className="review-card__menu">···</span>
  </div>
  <div className="review-card__author">
    <span className="review-card__name">Ava H.</span>
    <span className="review-card__verified">✓</span>
  </div>
  <p className="review-card__text">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
  <p className="review-card__date">Posted on August 19, 2023</p>
</div>

</div>

         <div className="rr-load-more">
         <button className="rr-load-more__btn">Load More Reviews</button>
    </div>
    </div>
    
  )
}

 export default Reviews

