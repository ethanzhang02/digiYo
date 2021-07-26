import React from "react";
import "./PROFILEICON.css";

class PROFILEICON extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="profile-icon">
        <div className="ellipse-7 border-3px-scarpa-flow"></div>
        <img className="path-30" src={src} />
      </div>
    );
  }
}

export default PROFILEICON;
