import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./Main.module.scss";

function Main() {

  const SERVER_URL = "http://localhost:4000/test";
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    fatchData();
  },[]);
  
  const fatchData = async() => {
    const res = await axios.get(SERVER_URL);
    setUsers(res.data);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.mapDiv}>
        <img src="map.PNG"></img>
      </div>
      <div className={Styles.boardContainer}>
      {users?.map((user) => (
        <div key={user.id} className={Styles.boardDiv}>
          <div className={Styles.userDiv}>
            <img src="logo192.png"></img>
            <h1>{user.id}</h1>
          </div>
          <div className={Styles.boardimgDiv}>
            <img className={Styles.boardImg} src="test.jfif"></img>
          </div>
          <div className={Styles.contentsDiv}>
            <h1>식당이름 - 위치</h1>
            <p>{user.text}</p>
            <div className={Styles.starDiv}>
              <span className={Styles.star}>⭐4.5</span>
              <span className={Styles.tag}> #태그 #태그</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Main;
