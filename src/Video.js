import React from "react";
const Video = (props) => {
    return (
        <div className="video-container">

          <div className="video-image">
            <img src={props.thumbnails.url} alt=""/>
          </div>

          <div className="video-info">
            <h3> {props.title}</h3>
            <h4> {props.dateAdded}</h4>
            <h4>{props.channel}</h4>
            <p>{props.description}</p>
          </div>
     </div>
    )
    // return React.createElement("div", {}, [
    //   React.createElement("h2", {}, props.title),
    //   React.createElement("h3", {}, props.dateAdded),
    //   React.createElement("h3", {}, props.channel),
    // ]);
  };
  export default Video;