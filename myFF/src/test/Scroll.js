import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./Scroll.module.scss";

function Scroll() {
  const SERVER_URL = "http://localhost:4000/test";
  const [items, setitems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  const getItems = useCallback(async () => {
    setLoading(true);
    await axios.get(SERVER_URL).then((res) => {
      setitems(res.data);
    })
    setLoading(false);
  }, [page])

  useEffect(() => {
    getItems()
  },[getItems])

  useEffect(() => {
    if(inView && !loading){
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading])

  return (
    <div className="Scroll">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {items.length - 1 == idx ? (
            <div className={Styles.list_item} ref={ref}>
              {item.id}
            </div>
          ) : (
            <div className={Styles.list_item}>
              {item.id}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Scroll;
