
import React from "react";
import ReactDOM  from "react-dom";
import SearchArea from "./SearchArea";
const App = () => {
  return (
    <div>
      <header>
      <a href="/">YTUBE</a>
      </header>
  
    <SearchArea></SearchArea>
      
    </div>
  )
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
