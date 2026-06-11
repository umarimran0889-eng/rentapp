import React from 'react'
import Shirt1 from '../../../assets/shirt1.png'
import Shirt2 from '../../../assets/shirt2.png'
import Shirt3 from '../../../assets/shirt3.png'
import Shirt4 from '../../../assets/shirt4.png'
import { Link } from 'react-router-dom'
import './Tshirt.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Tshirt = () => {
  return (
    <div className='tshirt-page'>

      {/* Breadcrumb */}
      <nav className='breadcrumb'>
        <Link to='/'>Home</Link> <span>›</span>
        <Link to='#'>Shop</Link> <span>›</span>
        <Link to='#'>Men</Link> <span>›</span>
        <span className='active'>T-shirts</span>
      </nav>

      <div className='product-grid'>

    
        <div className='gallery'>
          <div className='thumb-strip'>
            <img src={Shirt1} alt='shirt1' className='thumb active' />
            <img src={Shirt2} alt='shirt2' className='thumb' />
            <img src={Shirt3} alt='shirt3' className='thumb' />
          </div>
          <div className='main-img'>
            <img src={Shirt4} alt='main' />
          </div>
        </div>

  
        <div className='product-info'>

          <h1 className='title'>One Life Graphic T-Shirt</h1>

          <div className='rating'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt />
            <span className='rating-text'>4.5/5</span>
          </div>

          <div className='price-row'>
            <span className='price'>$260</span>
            <span className='old-price'>$300</span>
            <span className='badge'>-40%</span>
          </div>

          <p className='desc'>
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          <p className='label'>Select Colors</p>
          <div className='different-colors'>
            <button className='color active' style={{ background: '#5C5A3A' }} />
            <button className='color' style={{ background: '#2D5A57' }} />
            <button className='color' style={{ background: '#1E2E4A' }} />
          </div>

          <p className='label'>Choose Size</p>
          <div className='sizes'>
            <button className='size-btn'>Small</button>
            <button className='size-btn'>Medium</button>
            <button className='size-btn active'>Large</button>
            <button className='size-btn'>X-Large</button>
          </div>

          <div className='cart-row'>
            <div className='qty'>
              <button>−</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className='cart-btn'>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tshirt