import React from "react";
import Login from "./Login";
import Input from "./Input";

// ternary operator & AND operator

// var isLoggedIn = true;

const currentTime = new Date(2022, 11, 1, 19).getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* ternary operator */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      
      {/* AND operator */}
      {/* {currentTime > 12 && <h1>Why are you still working ?</h1>} */}
    
    
    </div>
  );
}

export default App;
