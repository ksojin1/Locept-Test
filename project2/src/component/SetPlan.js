import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./SetPlan.module.scss";
import DayPlans from "./DayPlans";

const ViewPlan = () => {

  //날짜 nav
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const {start, end, days} = useParams();
  let startDate = new Date(start.substring(0, start.length-2));

  //날짜 DateArr, plan state 분리
  const [plans, setPlans] = useState([{}]);

  //현재 page 필요??
  const [page, setPage] = useState(0);
  

  console.log(plans);

  const setDate = () => {
    // server Getdata
    let dateArr = [];
    for(let i=1; i<=parseInt(days); i++){
      dateArr.push({
        date:`${startDate.getMonth()+1}월${startDate.getDate()}일`,
        location: [],
      });
      startDate.setDate(startDate.getDate() + 1);
    }
    setPlans(dateArr);
  }

  const navPrevFnc = () => {
    if(currentIndex !== 0){
      setCurrentIndex(currentIndex-1);
    } 
  }

  const navNextFnc = () => {
    if(currentIndex < plans.length-5){
      setCurrentIndex(currentIndex+1);
    }
  }

  const planClickFnc = (idx) => {
    setPage(idx);
  }

  const update = (changedState) => {
    setPlans((state) => 
      state?.map((item) => {
        if(item.date === changedState.date){
          return { ...item, location: changedState.location };
        }
        return item;
      })
    );
  }

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
        {plans.map((plan,index) => {
          if(index === page){
            return(
              <div onClick={() => planClickFnc(index)} key={index} 
                style={{transform: `translate(-${currentIndex * 100}%)`, backgroundColor: 'red'}}>
                {plan.date}
              </div>
            );
          }else{
            return(
              <div onClick={() => planClickFnc(index)} key={index} 
                style={{transform: `translate(-${currentIndex * 100}%)`}}>
                {plan.date}
              </div>
            );
          }
          
        })}
      </div>
      <div className={Styles.contentDiv}>
        <div className={Styles.mapDiv}>
        </div>

        <div className={Styles.planDiv}>

          {plans?.map((item, idx) => (
              (page === idx) && <DayPlans key={idx} item={item} onUpdate={update} />
          ))}

          
          {/* 이전버튼 보류 */}
          {/* <input type="button" value="이전" 
            onClick={()=> {if(page>0)setPage(page-1)}}
          /> */}

          {/* 다음버튼 누르면 server Post */}
          <input type="button" value="다음" 
            onClick={()=> {if(page<days-1)setPage(page+1)}}
          />

        </div>

      </div>
    </div>
  );
}

export default ViewPlan;