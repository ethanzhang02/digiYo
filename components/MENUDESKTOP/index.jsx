import React from "react";
import MENUITEMSDESKTOP from "../MENUITEMSDESKTOP";
import MENUITEMSDESKTOP2 from "../MENUITEMSDESKTOP2";
import NOTIFICATIONICON from "../NOTIFICATIONICON";
import PROFILEICON from "../PROFILEICON";
import "./MENUDESKTOP.css";

class MENUDESKTOP extends React.Component {
  render() {
    const {
      path69,
      path70,
      path71,
      path72,
      path73,
      path74,
      path75,
      path76,
      path44,
      path45,
      path46,
      path47,
      path48,
      path49,
      path50,
      path51,
      path52,
      mENUITEMSDESKTOPProps,
      mENUITEMSDESKTOP2Props,
      mENUITEMSDESKTOP3Props,
      mENUITEMSDESKTOP2Props2,
      mENUITEMSDESKTOP4Props,
      nOTIFICATIONICONProps,
      pROFILEICONProps,
    } = this.props;

    return (
      <div className="menu-desktop">
        <div className="group-101">
          <div className="group-102">
            <div className="group-337">
              <div className="group-335">
                <div className="overlap-group-4">
                  <img className="path-69" src={path69} />
                  <img className="path-70" src={path70} />
                </div>
              </div>
              <div className="group-336">
                <img className="path-71" src={path71} />
                <img className="path-7" src={path72} />
                <img className="path-73" src={path73} />
                <img className="path-7" src={path74} />
                <div className="overlap-group1-1">
                  <img className="path-75" src={path75} />
                  <img className="path-76" src={path76} />
                </div>
              </div>
            </div>
            <div className="group-102-1">
              <div className="overlap-group2">
                <img className="path-44" src={path44} />
                <img className="path-45" src={path45} />
                <img className="path-46" src={path46} />
                <img className="path-47" src={path47} />
              </div>
              <div className="overlap-group1-2">
                <img className="path-48" src={path48} />
                <img className="path-49" src={path49} />
              </div>
              <div className="overlap-group-5">
                <img className="path-50" src={path50} />
                <img className="path-51" src={path51} />
                <img className="path-52" src={path52} />
              </div>
            </div>
          </div>
          <div className="group-99">
            <MENUITEMSDESKTOP maskGroup1={mENUITEMSDESKTOPProps.maskGroup1} shop={mENUITEMSDESKTOPProps.shop} />
            <MENUITEMSDESKTOP
              maskGroup1={mENUITEMSDESKTOP2Props.maskGroup1}
              shop={mENUITEMSDESKTOP2Props.shop}
              className={mENUITEMSDESKTOP2Props.className}
            />
            <MENUITEMSDESKTOP
              maskGroup1={mENUITEMSDESKTOP3Props.maskGroup1}
              shop={mENUITEMSDESKTOP3Props.shop}
              className={mENUITEMSDESKTOP3Props.className}
            />
            <MENUITEMSDESKTOP2
              menuItemsDesktop={mENUITEMSDESKTOP2Props2.menuItemsDesktop}
              community={mENUITEMSDESKTOP2Props2.community}
            />
            <MENUITEMSDESKTOP
              maskGroup1={mENUITEMSDESKTOP4Props.maskGroup1}
              shop={mENUITEMSDESKTOP4Props.shop}
              className={mENUITEMSDESKTOP4Props.className}
            />
          </div>
        </div>
        <div className="group-59">
          <NOTIFICATIONICON
            group55={nOTIFICATIONICONProps.group55}
            group56={nOTIFICATIONICONProps.group56}
            group57={nOTIFICATIONICONProps.group57}
          />
          <PROFILEICON src={pROFILEICONProps.src} />
        </div>
      </div>
    );
  }
}

export default MENUDESKTOP;
