import { useState } from "react";

const Scroll = () => {
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
    };

    return ( 
        <div>
            <input type='text' onChange={handleSearch} value={query} />
        </div>
    );
};

export default Scroll;