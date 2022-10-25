import { useEffect, useState } from "react";
import axios from "axios";

const useBookSearch = (query, pageNumber) => {
    useEffect(() => {
        let cancel;

        const tryUseEffect = async () => {
            try {
                const res = await axios({
                    method: "GET",
                    url: "http://openlibrary.org/search.json",
                    params: { q: query, page: pageNumber },
                });
            } catch (e) {
                
            }
        }
    }, []);
};

export default useBookSearch;