import React from "react";

const DayPlans = ({ item, onUpdate }) => {

  const update = (e) =>{
    // let locationArr = item.location;
    // locationArr.push(e.target.value);
    onUpdate({ ...item, location: e.target.value })
  }

  return (
    <div>
      <input type="text" value={item.location || ""} onChange={update} />
      <input type="text" value={item.location || ""} onChange={update} />
      {/* //<input type="button" value="완료" onClick={update}/> */}
      <input type="button" value="일정추가"/>
    </div>
  
  );
}

export default DayPlans;