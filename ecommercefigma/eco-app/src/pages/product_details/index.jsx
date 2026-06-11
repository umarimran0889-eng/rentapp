import React from 'react'
import Tshirt from './componentsProducts/Tshirt'
import Reviews from './componentsProducts/Reviews'
import Alsolike from './componentsProducts/Alsolike'

const ProductDetails = () => {
  return (
    <div>
        <Tshirt/>
        <Reviews/>
        <Alsolike/>
    </div>
  )
}

export default ProductDetails