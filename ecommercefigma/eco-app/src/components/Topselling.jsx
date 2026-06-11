
import Greenshirt from "../assets/greentshirt.png"
import Orangeshirt from "../assets/Tshirtorange.png"
import shorts from "../assets/shorts.png"
import Pant from "../assets/blackpant.png"


const Topselling = () => {
        return (
          <div className="newarrival">
              <h1>TOP SELLING</h1>
      
              <div className="products">
                  <div className="product1">
                 
                <div className="product-img"><img src={Greenshirt} /></div>
               <h4>Vertical Striped Shirt</h4>
               <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
              <div className="price">
               <span className="current">$212</span>
               <span className="old">$232</span>
              <span className="discount">-20%</span>
              
              </div>
              </div>
                  <div className="product1">
                  <div className="product-img"><img src={Orangeshirt} /></div>
               <h4>Courage Graphic Tshirt</h4>
               <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
              <div className="price">
               <span className="current">$145</span>
              
              </div>
               </div>
      
                  <div className="product1">
                  
                  <div className="product-img"><img src={shorts} /></div>
                  <h4>Loose Fit Bermuda Shorts</h4>
                  <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
                  <div className="price">
                  <span className="current">$80</span>
                  </div>
                  </div>
      
                  <div className="product1">
                  <div className="product-img"><img src={Pant} /></div>
                  <h4>Faded Skinny Jeans</h4>
                  <div className="stars">⭐⭐⭐⭐ 4.5/5</div>
                  <div className="price">
                  <span className="current">$210</span>
                  </div>
                  </div>
              </div>
              <button className="button-view-all">View All</button>
      
          </div>
        )
      }
      export default Topselling