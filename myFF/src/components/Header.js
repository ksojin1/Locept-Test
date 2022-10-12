import { useEffect, useRef } from "react";
import Styles from "../css/Header.module.scss";

//헤더
function Header() {

  
  return (
    <div className={Styles.Header}>
      <div className={Styles.logoDiv}>
        <h1 className={Styles.logoText}>MY FF</h1>
      </div>
      <div className={Styles.mainNav}>
        <div className={Styles.searchDiv}>
          <form className={Styles.searchForm}>
            <select>
              <option>USER</option>
            </select>
            <input type="text"></input>
            <input className={Styles.searchBtn} type="submit" value="검색"></input>
          </form>
        </div>
        <div className={Styles.btnDiv}>
          <a href="/best">
            <h3>Best</h3>
          </a>
          <a href="/new">
            <h3>New</h3>
          </a>
          <a href="/login">
            <h3>Login</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
