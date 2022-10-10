import { useEffect, useRef } from "react";
import Styles from "./css/Header.module.scss";

//헤더
function Header() {

  return (
    <div id={Styles.Header}>
      <div id={Styles.logoDiv}>
        <h1 id="logoImg">LOGO</h1>
      </div>
      <div id={Styles.mainNav}>
        <div id={Styles.searchDiv}>
          <form id={Styles.searchForm}>
            <select>
              <option>USER</option>
            </select>
            <input type="text"></input>
            <input type="submit" value="검색"></input>
          </form>
        </div>
        <div id={Styles.btnDiv}>
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
