import { useEffect, useState } from "react";
import axios from "axios";

const useBookSearch = (query, pageNumber) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    // onChange시에 list를 리셋
    useEffect(() => setBooks([]), [query]);
    
    useEffect(() => {
        let cancel;

        // useEffect안에async는 반환하는 값의 형태가 다르므로 쓸 수 없음
        // 그래서 새로운 함수를 만들어서 호출하는 방식으로 사용
        // axios의 cancel-token을 사용하여 반복적으로 cancel하고 
        // 마지막 onChange 에만 axios를 작동하게 한다
        const tryUseEffect = async () => {
            try {
                setLoading(true);
                setError(false);

                const res = await axios({
                    method: "GET",
                    url: "http://openlibrary.org/search.json",
                    params: { q: query, page: pageNumber },
                    cancelToken: new axios.CancelToken((c) => (cancel = c)),
                });

                setBooks((books) => [
                    ...books,
                    ...res.data.docs.map((doc) => doc.title),
                ]);

                setLoading(false);
                setHasMore(books.length > 0);

                console.log(res.data);
            } catch (e) {
                if(axios.isCancel(e)) return;
                setError(true);
            }
        };
        tryUseEffect();

        return () => cancel();
    }, [query, pageNumber]);

    // state값 리턴
    return [loading, error, books, hasMore];
};

export default useBookSearch;