import "./Hero.css"
import dresspic from "../assets/hero1.jpg";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-left">

            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE </h1>

            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
             <button>Shop Now</button>
        

        <div className="hero-stats">
          <div className="stat">
            <span className="stat__number">200+</span>
            <span className="stat__label">International Brands</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat__number">2,000+</span>
            <span className="stat__label">High-Quality Products</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat__number">30,000+</span>
            <span className="stat__label">Happy Customers</span>
          </div>
        </div>
        </div>


        <div className="hero-right">
             <img src={dresspic} alt="dresspic"/>
             

    <div className="star star1">✦</div>
    <div className="star star2">✦</div>
</div>

    

    </section>
      
    
  )
}

export default Hero
 