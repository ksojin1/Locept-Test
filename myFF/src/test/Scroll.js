import { useCallback, useState } from "react";
import useBookSearch from "../hooks/useBookSearch";

const Scroll = () => {

  console.log("랜더링");

  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, error, books, hasMore] = useBookSearch(query, pageNumber);

  const lastElementRef = useCallback(
    (node) => {
      console.log("콜백");
      if (loading) return;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNum) => prevPageNum + 1);
        } else if(!hasMore){
          console.log("더 없음");
        }
      });

      if (node) observer.observe(node);
    },
    // loading, hasMore 이 있을 경우에만 함수가 생성된다
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div>
      <input style={{ width: '200px', fontSize: '30px' }}
        type='text' onChange={handleSearch} value={query} />
      {books.map((book, index) => {

        // 마지막 item에는 ref를 지정한다
        if (books.length === index + 1) {
          return(
            <div key={Math.random()} ref={lastElementRef}>
              <span>{book}</span>
            </div>
          );
        } else {
          return(
            <div key={Math.random()}>
              <span>{book}</span>
            </div>
          );
        }
      })}
      {loading && <div>loading...</div>}
      {error && <div>error...</div>}
    </div>
  );
};

export default Scroll;