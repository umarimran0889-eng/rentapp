import React from 'react'
import Pic1 from "../../../assets/pic1.png"
import Pic2 from "../../../assets/pic2.png"
import Pic3 from "../../../assets/pic3.png"
import Pic4 from "../../../assets/pic4.png"

const Alsolike = () => {
    return (
        <div className="newarrival">
        <h1>You Might Also Like</h1>

        <div className="products">
            <div className="product1">
           
          <div className="product-img"><img src={Pic1} /></div>
         <h4>T-shirt with Tape Details</h4>
         <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
        <div className="price">
         <span className="current">$120</span>
        
        </div>
        </div>
            <div className="product1">
            <div className="product-img"><img src={Pic2} /></div>
         <h4>T-shirt with Tape Details</h4>
         <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
        <div className="price">
         <span className="current">$240</span>
        <span className="old">$260</span>
        <span className="discount">-20%</span>
        </div>
         </div>

            <div className="product1">
            
            <div className="product-img"><img src={Pic3} /></div>
            <h4>T-shirt with Tape Details</h4>
            <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
            <div className="price">
            <span className="current">$180</span>
            </div>
            </div>

            <div className="product1">
            <div className="product-img"><img src={Pic4} /></div>
            <h4>T-shirt with Tape Details</h4>
            <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
            <div className="price">
            <span className="current">$130</span>
            <span className="old">$160</span>
            <span className="discount">-30%</span>
            </div>
            </div>
        </div>
        <button className="button-view-all">View All</button>

    </div>
    )
}

export default Alsolike
