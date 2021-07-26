import React from "react";
import "./NOTIFICATIONICON.css";

class NOTIFICATIONICON extends React.Component {
  render() {
    const { group55, group56, group57 } = this.props;

    return (
      <div className="notification-icon">
        <div className="overlap-group-6">
          <div className="group-58">
            <div className="overlap-group1-3">
              <div className="group-55" style={{ backgroundImage: `url(${group55})` }}></div>
              <div className="group-56" style={{ backgroundImage: `url(${group56})` }}></div>
            </div>
            <div className="group-57" style={{ backgroundImage: `url(${group57})` }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NOTIFICATIONICON;
