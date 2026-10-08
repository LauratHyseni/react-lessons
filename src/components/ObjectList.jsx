import React from 'react'
import Product from './Product';

function ObjectList() {
    const products = [
        {
            id: 1,
            name: "iphone15",
            color: "purple"
        },
        {
            id: 2,
            name: "iphone16",
            color: "black"
        }
    ];

  

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          productName={product.name}
          productColor={product.color}
        />
      ))}

    </div>
  )
}

export default ObjectList