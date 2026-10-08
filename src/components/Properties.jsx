import React from 'react'

function Properties() {
    const properties = [
        { 
            id: 1,
             name: "Property 1", 
             size: "100m",
             isSold: false },

        { 
            id: 2,
             name: "Property 2",
              size: "50m" ,
              isSold: true
            }
    ];

  return (
   <div>
      {properties.map((property) => (
        <div key={property.id}>
          <h2>{property.name}</h2>
          <p>{property.size}</p>
          <p>{property.isSold ? "Sold" : "NotSold"}</p>
        </div>
      ))}
    </div>
  )
}

export default Properties