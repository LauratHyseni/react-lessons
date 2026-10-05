import React, { useState } from 'react'

function ProductQuantity({ name, price, }) {
    const [quantity, setQuantity] = useState(1);
  return (
    <>
      <p>{name} - ${price}</p>
      <p>Quantity {quantity}</p>
      <p>Total: ${price * quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </>
  )
}

export default ProductQuantity