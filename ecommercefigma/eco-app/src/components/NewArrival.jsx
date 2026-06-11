import "./NewArrival.css"
import  Tshirt from "../assets/Frame 32.png"
import  Jeans from "../assets/Frame 33.png"
import  Shirt from "../assets/Frame 34.png"
import  TTshirt from "..//assets/Frame 38.png"



const NewArrival = () => {
  return (
    <div className="newarrival">
        <h1>NEW ARRIVAL</h1>

        <div className="products">
            <div className="product1">
           
          <div className="product-img"><img src={Tshirt} /></div>
         <h4>T-shirt with Tape Details</h4>
         <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
        <div className="price">
         <span className="current">$120</span>
        
        </div>
        </div>
            <div className="product1">
            <div className="product-img"><img src={Jeans} /></div>
         <h4>T-shirt with Tape Details</h4>
         <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
        <div className="price">
         <span className="current">$240</span>
        <span className="old">$260</span>
        <span className="discount">-20%</span>
        </div>
         </div>

            <div className="product1">
            
            <div className="product-img"><img src={Shirt} /></div>
            <h4>T-shirt with Tape Details</h4>
            <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
            <div className="price">
            <span className="current">$180</span>
            </div>
            </div>

            <div className="product1">
            <div className="product-img"><img src={TTshirt} /></div>
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

export default NewArrival