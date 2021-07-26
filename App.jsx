import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DGYMYSETSXXL from "./components/DGYMYSETSXXL";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|dgy-my-sets-xxl)">
            <DGYMYSETSXXL {...dGYMYSETSXXLData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const mENUITEMSDESKTOPData = {
  maskGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/mask-group-1-4@1x.png",
  shop: "SHOP"
};

const mENUITEMSDESKTOP2Data = {
  maskGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/mask-group-1-3@1x.png",
  shop: "COLLECTION",
  className: "menu-items-desktop-1"
};

const mENUITEMSDESKTOP3Data = {
  maskGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/mask-group-1-2@1x.png",
  shop: "STORY GAME",
  className: "menu-items-desktop-2"
};

const mENUITEMSDESKTOP22Data = {
  menuItemsDesktop:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/mask-group-1-1@1x.png",
  community: "COMMUNITY"
};

const mENUITEMSDESKTOP4Data = {
  maskGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/mask-group-1@1x.png",
  shop: "HELP",
  className: "menu-items-desktop-3"
};

const nOTIFICATIONICONData = {
  group55:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-31@1x.png",
  group56:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-32@1x.png",
  group57:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-33@1x.png"
};

const pROFILEICONData = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-30@1x.png"
};

const mENUDESKTOPData = {
  path69:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-69@1x.png",
  path70:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-70@1x.png",
  path71:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-71@1x.png",
  path72:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-72@1x.png",
  path73:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-73@1x.png",
  path74:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-74@1x.png",
  path75:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-75@1x.png",
  path76:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-76@1x.png",
  path44:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-44@1x.png",
  path45:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-45@1x.png",
  path46:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-46@1x.png",
  path47:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-47@1x.png",
  path48:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-48@1x.png",
  path49:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-49@1x.png",
  path50:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-50@1x.png",
  path51:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-51@1x.png",
  path52:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef0027bf6d4fdc9c4bc070/img/path-52@1x.png",
  mENUITEMSDESKTOPProps: mENUITEMSDESKTOPData,
  mENUITEMSDESKTOP2Props: mENUITEMSDESKTOP2Data,
  mENUITEMSDESKTOP3Props: mENUITEMSDESKTOP3Data,
  mENUITEMSDESKTOP2Props2: mENUITEMSDESKTOP22Data,
  mENUITEMSDESKTOP4Props: mENUITEMSDESKTOP4Data,
  nOTIFICATIONICONProps: nOTIFICATIONICONData,
  pROFILEICONProps: pROFILEICONData
};

const component201Data = {
  component201:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/mask-group-2-2@1x.png",
  price: "ALL"
};

const component2012Data = {
  price: "COMPLETED",
  component201:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/mask-group-2-1@1x.png",
  className: "component-20"
};

const component2013Data = {
  price: "IN PROGRESS",
  component201:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/mask-group-2-1@1x.png",
  className: "component-20"
};

const group109Data = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png"
};

const group1092Data = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png",
  className: "group-109-1"
};

const group1093Data = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png",
  className: "group-109-1"
};

const group1094Data = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png",
  className: "group-109-4"
};

const group1095Data = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png",
  className: "group-109-2"
};

const group1096Data = {
  src:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png",
  className: "group-109-2"
};

const dGYMYSETSXXLData = {
  mySets: "MY SETS",
  text1:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  line32:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/line-32@1x.png",
  throwdowns: "Throwdowns",
  x04_CardEx_Legendary:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary@1x.png",
  number: "40",
  text2: " /40",
  completed: " Completed",
  path27:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/path-27-1@1x.png",
  rookieDebut: "Rookie Debut",
  x04_CardEx_Legendary2:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary-1@1x.png",
  number2: "82",
  text3: " /82",
  completed2: " Completed",
  forTheWin: "For the Win",
  overlapGroup:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary-2@1x.png",
  percent: "34%",
  number3: "4",
  text4: " /12",
  trainingDay: "Training day",
  overlapGroup2:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary-3@1x.png",
  percent2: "10%",
  number4: "2",
  text5: " /20",
  olympicGames: "Olympic games",
  overlapGroup3:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary-4@1x.png",
  percent3: "0%",
  number5: "0",
  text6: " /5",
  daysInTheGym: "Days in the gym",
  overlapGroup4:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary-5@1x.png",
  closedSet: "Closed set",
  firstMatch: "First match",
  overlapGroup5:
    "https://anima-uploads.s3.amazonaws.com/projects/60eef7a38718caded3164fd4/releases/60ef02849cb38af7776ac76b/img/04-card-ex-legendary-6@1x.png",
  closedSet2: "Closed set",
  mENUDESKTOPProps: mENUDESKTOPData,
  component201Props: component201Data,
  component2012Props: component2012Data,
  component2013Props: component2013Data,
  group109Props: group109Data,
  group1092Props: group1092Data,
  group1093Props: group1093Data,
  group1094Props: group1094Data,
  group1095Props: group1095Data,
  group1096Props: group1096Data
};
