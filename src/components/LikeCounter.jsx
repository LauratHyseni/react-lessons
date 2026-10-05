import React, { useState } from 'react'

function LikeCounter() {
  const [like, setLike] =  useState(true);

  return (
    <>
      
      <button style={{ backgroundColor: like ? 'blue' : 'green', height: '100px', width: '100px' }} onClick={() => setLike(!like)}>Like</button>
      
    </>
  )
}

export default LikeCounter;