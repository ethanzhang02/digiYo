import React from "react";
import "./MENUITEMSDESKTOP2.css";

class MENUITEMSDESKTOP2 extends React.Component {
  render() {
    const { menuItemsDesktop, community } = this.props;

    return (
      <div className="menu-items-desktop-4" style={{ backgroundImage: `url(${menuItemsDesktop})` }}>
        <div className="community pragmatica-bold-white-14px">{community}</div>
      </div>
    );
  }
}

export default MENUITEMSDESKTOP2;
