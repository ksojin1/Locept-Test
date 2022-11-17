import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hotel = () => {

  const { viewCont, setViewCont } = useContext(ThemeContext);
  const [hotelPlan, setHotelPlan] = useState({
    address: "",
    startDate: "",
    endDate: "",
    reservation: "",
    price: "",
    memo: "",
  });

  console.log(hotelPlan);

  const hotelPostFnc = () => {

    //hotel post
  }

  return (
    <div>
      <label htmlFor="address">주소 : </label>
      <input type="text" id="address"
        value={hotelPlan.address}
        onChange={(e) => setHotelPlan((prev) => ({
          ...prev,
          address: e.target.value,
        }))}
      />

      <label htmlFor="startDate">체크인 : </label>
      <input type="text" id="startDate"
        value={hotelPlan.startDate}
        onChange={(e) => setHotelPlan((prev) => ({
          ...prev,
          startDate: e.target.value,
        }))}
      />

      <label htmlFor="endDate">체크아웃 : </label>
      <input type="text" id="endDate"
        value={hotelPlan.endDate}
        onChange={(e) => setHotelPlan((prev) => ({
          ...prev,
          endDate: e.target.value,
        }))}
      />

      <label htmlFor="reservation">예약 유무 : </label>
      <input type="text" id="reservation"
        value={hotelPlan.reservation}
        onChange={(e) => setHotelPlan((prev) => ({
          ...prev,
          reservation: e.target.value,
        }))}
      />

      <label htmlFor="price">가격 : </label>
      <input type="text" id="price"
        value={hotelPlan.price}
        onChange={(e) => setHotelPlan((prev) => ({
          ...prev,
          price: e.target.value,
        }))}
      />

      <label htmlFor="memo">메모 : </label>
      <input type="text" id="memo"
        value={hotelPlan.memo}
        onChange={(e) => setHotelPlan((prev) => ({
          ...prev,
          memo: e.target.value,
        }))}
      />

      <input type="button" value="완료" onClick={hotelPostFnc} />
    </div>
  );
}

export default Hotel;