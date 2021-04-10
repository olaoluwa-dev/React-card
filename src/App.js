import React from "react";
import "./App.css";
import MyLove from "./images/my_love.jpg";
import mouse from "./images/mouse.jpg";

function App() {
  return (
    <>
      <div className="papa">
        <div className="mama"></div>
        <div className="circlecontainer">
          <div className="circle"></div>
          <img src={mouse} alt="" className="mouse" />
        </div>
      </div>
    </>

    // <div className="MasterContainer">
    //   <div className="topContainer">
    //     <div className="circle">
    //       <img src={MyLove} alt="" className="imageFile" />
    //     </div>
    //   </div>
    //   <div className="bottomContainer">yellow</div>
    // </div>
  );
}

export default App;
