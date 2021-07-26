import React from "react";
import "./MENUITEMSDESKTOP.css";

class MENUITEMSDESKTOP extends React.Component {
  render() {
    const { maskGroup1, shop, className } = this.props;

    return (
      <div className={`menu-items-desktop ${className || ""}`}>
        <div className="overlap-group3">
          <img className="mask-group-1" src={maskGroup1} />
          <div className="shop pragmatica-bold-white-14px">{shop}</div>
        </div>
      </div>
    );
  }
}

export default MENUITEMSDESKTOP;
