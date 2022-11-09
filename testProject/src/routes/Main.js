import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Styles from "./Main.module.scss";
import useBoardData from "../hooks/useBoardData";

function Main({user, setUser}) {
  console.log('!!!!');
  const [pageNum, setPageNum] = useState(0);
  const [loading, error, boards, hasMore] = useBoardData(pageNum);
  
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        } else if (!hasMore) {
          console.log("더 없음");
        }
      });

      if (node) observer.observe(node);
    },
    // loading, hasMore 이 있을 경우에만 함수가 생성된다
    [loading, hasMore]
  );


  return (
    <div className={Styles.container}>
      <div className={Styles.mapDiv}>
        <img src="map.PNG"></img>
      </div>
      <div className={Styles.boardContainer}>
        <a href="/image">이미지</a>
        {boards?.map((board, index) => {

          //마지막 item에 ref
          if (boards.length === index + 1) {
            return (
              <div key={Math.random()} ref={lastElementRef} className={Styles.boardDiv}>
                <div className={Styles.userDiv}>
                  <img src="profile.jpeg"></img>
                  <h1>{board.id}</h1>
                </div>
                <div className={Styles.boardimgDiv}>
                  <img className={Styles.boardImg} src="test.jfif"></img>
                </div>
                <div className={Styles.contentsDiv}>
                  <h1>식당이름 - 위치</h1>
                  <p>{board.text}</p>
                  <div className={Styles.starDiv}>
                    <span className={Styles.star}>⭐4.5</span>
                    <span className={Styles.tag}> #태그 #태그</span>
                  </div>
                </div>
              </div>
            );
          } else {
            return(
              <div key={Math.random()} className={Styles.boardDiv}>
                <div className={Styles.userDiv}>
                  <img src="profile.jpeg"></img>
                  <h1>{board.id}</h1>
                </div>
                <div className={Styles.boardimgDiv}>
                  <img className={Styles.boardImg} src="test.jfif"></img>
                </div>
                <div className={Styles.contentsDiv}>
                  <h1>식당이름 - 위치</h1>
                  <p>{board.text}</p>
                  <div className={Styles.starDiv}>
                    <span className={Styles.star}>⭐4.5</span>
                    <span className={Styles.tag}> #태그 #태그</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {loading && <div>loading...</div>}
        {error && <div>error...</div>}
      </div>
    </div>
  );
}

export default Main;
