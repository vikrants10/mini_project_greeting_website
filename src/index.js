import React from "react";
import ReactDOM from "react-dom";
import './index.css';

let curDate = new Date(2024, 1, 1, 12);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};


if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if(curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Red";
} else{
  greeting = "Good Night";
  cssStyle.color = "Blue";
}



ReactDOM.render(
  <>
  <div>
  <h1>
    Hello Sir, <span style={cssStyle}> {greeting}</span>
  </h1>
  </div>
  </>,
  document.getElementById("root")
);