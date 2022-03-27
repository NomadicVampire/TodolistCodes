import React from 'react'
// import {} from "./App.css";
import imag from './sudhanshu.jpg';

export const About = () => {
  // const img = require('./sudhanshu.jpg');
  let myStyle={
  }
  let bstyle={
    display: "inline-block",
    // poition:"relative",
    width: "54%",
    margin: "44px 50px 44px 49px",
    padding: "19px 6px"

  }
  let imgstyle = {
    margin:"30px 60px",
    height : "60vh",
    display: "inline",
    border:"2px black solid",
    borderRadius:"16px"

  }
  return (
    <div className="container" style={myStyle}>
      
      <img src={imag} alt="not displayed" style={imgstyle}/>
        <div className="" style={bstyle}>
        <h3 text align = "center">Sudhanshu Kumar</h3>
        Hey! Myself Sudhanshu Kumar, pursuing B.Tech fron IIIT Vadodara. This is my first react based application. I am new learner of React library and willing to explore more
        <hr />

        <p>
          This is web application based on react library which allows users to add or delete item to Todo list. This react application uses react router which allows us to move one page to another without page being reloaded.
        This page is built by Sudhanshu Kumar under guidance of CodewithHarry Youtube Channel.
        </p>
        </div>
    </div>
  )
}
