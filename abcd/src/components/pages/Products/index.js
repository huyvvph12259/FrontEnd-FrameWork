import React from 'react'
import Albums from '../../Albums'
const ProductsPage = ({albums}) => {
    
    return (
        <div>
          <Albums data={albums} />
            
        </div>
    )
}

export default ProductsPage
