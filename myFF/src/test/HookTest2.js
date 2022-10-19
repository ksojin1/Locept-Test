import { useContext, useEffect } from "react";
import { TestContext } from "../context/TestContext";

const HookTest = () => {

    const { user, setUser } = useContext(TestContext);
    useEffect(() => {
        setUser("철수");
    }, []);

    const userSet = () => {
        user == "철수" ? setUser("영희") : setUser("철수")
    }
    
    return (
        <>
        <h1 style={{paddingTop: '200px', fontSize: '50px'}}>
            HookTest 2 : {user}
        </h1>
        <button style={{width: '100px', fontSize: '20px'}}
            onClick={userSet}>
            {user == "철수" ? "영희" : "철수"}
        </button>
        </>
    );
}

export default HookTest;