import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./Main.module.scss";

function Main() {

  const SERVER_URL = "http://localhost:4000/test";
  const [users, setUsers] = useState(null);

  const fatchData = async() => {
    const res = await axios.get(SERVER_URL);
    setUsers(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fatchData();
  },[]);

  return (
    <div className={Styles.container}>
      <div className={Styles.boardDiv}>
        <div className={Styles.userDiv}>
          <image className={Styles.userPro}></image>
          <h1 className={Styles.userId}></h1>
        </div>
        <div className={Styles.contentsDiv}>
          <h1 className={Styles.restaurantName}></h1>
          <p className={Styles.comment}></p>
          <div className={Styles.starDiv}>
            <span className={Styles.star}></span>
            <span className={Styles.tag}></span>
          </div>
        </div>
        <div className={Styles.boardimaDiv}>
          <image className={Styles.boardImg}></image>
        </div>
      </div>
    </div>
  );
}

export default Main;
