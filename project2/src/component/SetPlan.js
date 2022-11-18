import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./SetPlan.module.scss";
import { ThemeContext } from "../context/ThemeContext";

import PlanNav from "./PlanNav";
import Start from "./Start";
import Hotel from "./Hotel";
import DayPlan from "./DayPlan";

const ViewPlan = () => {
  
  // start(출발지 설정) / hotel / 숫자(일별 계획)
  const [viewCont, setViewCont] = useState("");
  // 여행 기본 정보
  const {start, end, days, title} = useParams();
  const baseData = {
    start: start,
    end: end,
    days: days,
    title: title,
  };

  useEffect(() => {
    setViewCont("Start");
  }, []);

  return(
    <ThemeContext.Provider value={{viewCont, setViewCont, baseData}}>
      <div className={Styles.container}>
        <PlanNav/>
        <div className={Styles.titleDiv}>
          <h1>{title}</h1>
        </div>
        <div className={Styles.contentDiv}>
          <div className={Styles.mapDiv}>
          </div>

          <div className={Styles.planDiv}>
              {viewCont === "Start" && <Start/>}
              {viewCont === "Hotel" && <Hotel/>}
              {typeof(viewCont) === "number" && <DayPlan/>}
          </div>

        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default ViewPlan;