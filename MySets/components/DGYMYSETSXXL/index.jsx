import React from "react";
import MENUDESKTOP from "../MENUDESKTOP";
import Component201 from "../Component201";
import Group109 from "../Group109";
import "./DGYMYSETSXXL.css";

class DGYMYSETSXXL extends React.Component {
  render() {
    const {
      mySets,
      text1,
      line32,
      throwdowns,
      x04_CardEx_Legendary,
      number,
      text2,
      completed,
      path27,
      rookieDebut,
      x04_CardEx_Legendary2,
      number2,
      text3,
      completed2,
      forTheWin,
      overlapGroup,
      percent,
      number3,
      text4,
      trainingDay,
      overlapGroup2,
      percent2,
      number4,
      text5,
      olympicGames,
      overlapGroup3,
      percent3,
      number5,
      text6,
      daysInTheGym,
      overlapGroup4,
      closedSet,
      firstMatch,
      overlapGroup5,
      closedSet2,
      mENUDESKTOPProps,
      component201Props,
      component2012Props,
      component2013Props,
      group109Props,
      group1092Props,
      group1093Props,
      group1094Props,
      group1095Props,
      group1096Props
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dgy-my-sets-xxl screen">
          <div className="overlap-group8">
            <div className="group-53"></div>
            <MENUDESKTOP {...mENUDESKTOPProps} />
          </div>
          <h1 className="my-sets h1-big--white">{mySets}</h1>
          <div className="text-1-1">{text1}</div>
          <div className="group-320">
            <div className="flex-row-3">
              <Component201
                component201={component201Props.component201}
                price={component201Props.price}
              />
              <Component201
                price={component2012Props.price}
                component201={component2012Props.component201}
                className={component2012Props.className}
              />
              <Component201
                price={component2013Props.price}
                component201={component2013Props.component201}
                className={component2013Props.className}
              />
            </div>
            <img className="line-32" src={line32} />
          </div>
          <div className="flex-row-4">
            <div className="group">
              <div className="overlap-group">
                <div className="throwdowns h2--white--lower">{throwdowns}</div>
                <img
                  className="x04card-exlegendary"
                  src={x04_CardEx_Legendary}
                />
                <div className="flex-row">
                  <div className="group-108">
                    <div className="number body-1--bold--white">{number}</div>
                    <div className="text body-1--bold--white">{text2}</div>
                  </div>
                  <div className="group-110">
                    <div className="completed body-1--bold--white">
                      {completed}
                    </div>
                    <div className="group-109">
                      <div className="overlap-group1">
                        <img className="path-27" src={path27} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-1">
              <div className="overlap-group">
                <div className="rookie-debut h2--white--lower">
                  {rookieDebut}
                </div>
                <img
                  className="x04card-exlegendary"
                  src={x04_CardEx_Legendary2}
                />
                <div className="flex-row">
                  <div className="group-108">
                    <div className="number body-1--bold--white">{number2}</div>
                    <div className="text body-1--bold--white">{text3}</div>
                  </div>
                  <div className="group-110-1">
                    <div className="completed body-1--bold--white">
                      {completed2}
                    </div>
                    <Group109 src={group109Props.src} />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-1">
              <div className="overlap-group">
                <div className="for-the-win h2--white--lower">{forTheWin}</div>
                <div
                  className="overlap-group-1"
                  style={{ backgroundImage: `url(${overlapGroup})` }}
                >
                  <div className="rectangle-124"></div>
                  <div className="rectangle-123"></div>
                  <div className="rectangle-174"></div>
                  <div className="percent h2--white--lower">{percent}</div>
                </div>
                <div className="flex-row-1">
                  <div className="group-108-1">
                    <div className="number-1 body-1--bold--white">
                      {number3}
                    </div>
                    <div className="text-1 body-1--bold--white">{text4}</div>
                  </div>
                  <Group109
                    src={group1092Props.src}
                    className={group1092Props.className}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row-5">
            <div className="group">
              <div className="overlap-group">
                <div className="training-day h2--white--lower">
                  {trainingDay}
                </div>
                <div
                  className="overlap-group-1"
                  style={{ backgroundImage: `url(${overlapGroup2})` }}
                >
                  <div className="rectangle-124"></div>
                  <div className="rectangle-123-1"></div>
                  <div className="rectangle-174-1"></div>
                  <div className="percent h2--white--lower">{percent2}</div>
                </div>
                <div className="flex-row-1">
                  <div className="group-108-1">
                    <div className="number-1 body-1--bold--white">
                      {number4}
                    </div>
                    <div className="text-1 body-1--bold--white">{text5}</div>
                  </div>
                  <Group109
                    src={group1093Props.src}
                    className={group1093Props.className}
                  />
                </div>
              </div>
            </div>
            <div className="group-1">
              <div className="overlap-group">
                <div className="olympic-games h2--white--lower">
                  {olympicGames}
                </div>
                <div
                  className="overlap-group-1"
                  style={{ backgroundImage: `url(${overlapGroup3})` }}
                >
                  <div className="rectangle-124"></div>
                  <div className="percent h2--white--lower">{percent3}</div>
                </div>
                <div className="flex-row-1">
                  <div className="group-108-2">
                    <div className="number-1 body-1--bold--white">
                      {number5}
                    </div>
                    <div className="text-1 body-1--bold--white">{text6}</div>
                  </div>
                  <Group109
                    src={group1094Props.src}
                    className={group1094Props.className}
                  />
                </div>
              </div>
            </div>
            <div className="group-1">
              <div className="overlap-group">
                <div className="days-in-the-gym h2--white--lower">
                  {daysInTheGym}
                </div>
                <div
                  className="overlap-group-2"
                  style={{ backgroundImage: `url(${overlapGroup4})` }}
                >
                  <div className="rectangle-175"></div>
                </div>
                <div className="flex-row-2">
                  <div className="closed-set body-1--bold--white">
                    {closedSet}
                  </div>
                  <Group109
                    src={group1095Props.src}
                    className={group1095Props.className}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="group-307">
            <div className="overlap-group7">
              <div className="first-match">{firstMatch}</div>
              <div
                className="overlap-group-3"
                style={{ backgroundImage: `url(${overlapGroup5})` }}
              >
                <div className="rectangle-175"></div>
              </div>
              <div className="flex-row-2">
                <div className="closed-set body-1--bold--white">
                  {closedSet2}
                </div>
                <Group109
                  src={group1096Props.src}
                  className={group1096Props.className}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DGYMYSETSXXL;
