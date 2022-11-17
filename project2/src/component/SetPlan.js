import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./SetPlan.module.scss";
import { ThemeContext } from "../context/ThemeContext";

import Start from "./Start";
import Hotel from "./Hotel";
import Schedule from "./Schedule";

import DayPlans from "./DayPlans";

const ViewPlan = () => {

  //날짜 nav
  const [currentIndex, setCurrentIndex] = useState(0);
  //날짜 DateArr
  const [dateArr, setDateArr] = useState([]);
  //getParams
  const {start, end, days, title} = useParams();
  let navDate = new Date(start.substring(0, start.length-2));

  const [viewCont, setViewCont] = useState("start");
  //현재 page 필요??
  const [page, setPage] = useState(0);

  const setDate = () => {
    let dateArr = [];
    for(let i=1; i<=parseInt(days); i++){
      dateArr.push(
        `${navDate.getMonth()+1}월${navDate.getDate()}일`
      );
      navDate.setDate(navDate.getDate() + 1);
    }
    setDateArr(dateArr);
  }

  //DateNav 화살표 이동==================
  const navPrevFnc = () => {
    if(currentIndex !== 0){
      setCurrentIndex(currentIndex-1);
    } 
  }
  const navNextFnc = () => {
    if(currentIndex < dateArr.length-5){
      setCurrentIndex(currentIndex+1);
    }
  }
  //====================================

  //날짜 클릭
  const planClickFnc = (idx) => {
    setPage(idx);
  }

  
  // const update = (changedState) => {
  //   setDateArr((state) => 
  //     state?.map((item) => {
  //       if(item.date === changedState.date){
  //         return { ...item, location: changedState.location };
  //       }
  //       return item;
  //     })
  //   );
  // }

  useEffect(() => {
    setDate();
  },[]);

  return(
    <div className={Styles.container}>
      <div className={Styles.btnDiv}>
        <div className={Styles.prevBtn} onClick={navPrevFnc}>◀</div>
        <div className={Styles.nextBtn} onClick={navNextFnc}>▶</div>
      </div>
      <div className={Styles.navDiv}>
        {dateArr.map((date,index) => {
          if(index === page){
            return(
              <div onClick={() => planClickFnc(index)} key={index} 
                style={{transform: `translate(-${currentIndex * 100}%)`, backgroundColor: 'red'}}>
                {date}
              </div>
            );
          }else{
            return(
              <div onClick={() => planClickFnc(index)} key={index} 
                style={{transform: `translate(-${currentIndex * 100}%)`}}>
                {date}
              </div>
            );
          }
        })}
      </div>
      <div className={Styles.titleDiv}>
        <h1>{title}</h1>
      </div>
      <div className={Styles.contentDiv}>
        <div className={Styles.mapDiv}>
        </div>

        <div className={Styles.planDiv}>
          <ThemeContext.Provider value={{viewCont, setViewCont}}>
            {viewCont === "start" && <Start/>}
            {viewCont === "hotel" && <Hotel/>}
            {/* {viewCont === "schedule" && <Schedule/>} */}
          </ThemeContext.Provider>
        </div>

      </div>
    </div>
  );
}

export default ViewPlan;