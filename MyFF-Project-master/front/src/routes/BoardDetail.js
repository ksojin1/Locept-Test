import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./BoardDetail.module.scss";
import { Buffer } from "buffer";
import {kakaoMap, boardMapSearch, mainMapSearch} from "./kakaoMap";

const SERVER_URL = "http://localhost:4000/board/";

const BoardDetail = () => {
  axios.defaults.withCredentials = true;

  const { id } = useParams();
  const [board, setBoard] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [comments, setComments] = useState([]);
  const [imgPage, setImgPage] = useState(1);
  const [commView, setCommView] = useState(false);

  const dataFetch = () => {
    axios({
      method: "GET",
      url: SERVER_URL + id
    }).then(res => {  
      console.log(res.data.Board);
      // console.log(res.data.Picture);
      setBoard(res.data.Board);
      setPictures(res.data.Board.Pictures);
      setComments(res.data.Board.Comments)
    });
  }

  const prevClick = () => {
    if(imgPage > 1){
      setImgPage((prev) => prev-1);
    }
  }

  const nextClick = () => {
    if(imgPage < pictures.length){
      setImgPage((prev) => prev+1);
    }
  }

  useEffect(() => {
    dataFetch();
    kakaoMap(5);
    // boardMapSearch(board.Location);
  }, []);

  return (
    <div className={Styles.container}>

      <div className={Styles.userMap}>
        {/*==== User ====*/}
        <div className={Styles.userDiv}>
          <img src="/img/profile.jpeg"></img>
          <h1>{board.User?.NickName}</h1>
        </div>

        {/*==== Map ====*/}
        <div className={Styles.mapDiv}>
          <div className={Styles.map} id="myMap"></div>
          <p>{board.Location}</p>
        </div>
      </div>

      {/*==== Picture ====*/}
      <div className={Styles.imageDiv}>
        <span className={Styles.prev} onClick={prevClick}>◀</span>
        {pictures.length > 0 ? 
          (
            pictures.map((picture, idx) => {
              if(imgPage === idx+1){
                const img = Buffer.from(picture.Photo.data).toString('base64');
                return (
                  <span key={idx} className={Styles.pictureSpan}> 
                    <img src={`data:image;base64,${img}`}></img>
                  </span>
                )
              }
              
            })
          ) : null
        }
        <span className={Styles.next} onClick={nextClick}>▶</span>
      </div>

      {/*==== Content ====*/}
      <div className={Styles.contentDiv}>
        <p>{board.Content}</p>
        <p>{board.Star}</p>
        <p>{board.updatedAt}</p>
      </div>

      {/*==== Comm ====*/}
      <div className={Styles.commentsDiv}>
        
        {!commView && <div><button>댓글보기</button></div>}

        <span>{board.User?.NickName}</span>
        <input type="text"></input>
        <button>게시</button>
        {comments.length > 0 ? (
          comments.map((comment,idx) => {
            return (
              <div className={Styles.commDiv} key={idx}>
                <p>{comment.User.NickName}</p>
                <p>{comment.comm}</p>
              </div>
              
            );
          })
        ): null}
      </div>
    </div>
  );
}

export default BoardDetail;