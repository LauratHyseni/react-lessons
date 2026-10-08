import React from 'react'

function Product({ productName, productColor }) {
  return (
    <div>
      <h2>{productName}</h2>
      <p>{productColor}</p>
    </div>
  )
}

export default Product