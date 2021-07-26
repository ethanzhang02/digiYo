import React from "react";
import "./Component201.css";

class Component201 extends React.Component {
  render() {
    const { component201, price, className } = this.props;

    return (
      <div className={`component-20-1 ${className || ""}`} style={{ backgroundImage: `url(${component201})` }}>
        <div className="price pragmatica-bold-white-14px">{price}</div>
      </div>
    );
  }
}

export default Component201;
