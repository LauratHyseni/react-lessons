import React from 'react'

function ConditionalRendering() {
  const isLoggedIn = false;
  const isAdmin = true;


  if (isLoggedIn) {
    return <h1>Welcome!</h1>;
  }  {
    return <h1>Please log in.</h1>;
  }
  return (
    <div>
      {isAdmin ? <h1>Welcome, Admin!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}

export default ConditionalRendering