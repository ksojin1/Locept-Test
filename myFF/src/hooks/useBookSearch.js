const { default: axios } = require("axios");
const { useEffect } = require("react")

const useBookSearch = (query, pageNumber) => {
    useEffect(() => {
        let cancel;

        const tryUseEffect = async () => {
            try {
                const res = await axios({});
            } catch (e) {
                
            }
        }
    }, []);
}