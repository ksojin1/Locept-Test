import HookTest2 from './HookTest2';
import { TestContext } from "../context/TestContext";
import { useContext, useMemo, useState } from 'react';

const testFnc1 = (n) => {
  console.log("test1");
  return n + 10;
}

const testFnc2 = (n) => {
  console.log("test2");
  return n + 100;
}

const HookTest = () => {

  const { user } = useContext(TestContext);
  
  const [num, setNum] = useState(true);

  // 원시타입 보다 객체 타입을 사용할때 편리하다
  // useEffect은 원시타입을 비교할 수 있지만
  // 객체타입은 항상 랜더링이 될 때 마다 주소값이 바뀌기때문에 값이 변하지 않아도 실행함
  const testObj = useMemo(() => {
    console.log("memo!!!")
    return {
      testNum: num == 1 ? 'A' : 'B',
    }
  },[num]);

  return(
    <div style={{paddingTop: '200px'}}>
      <div className='useMemo'>
        <button onClick={() => setNum(!num)}>{testObj.testNum == "A"? "B":"A"}</button>
        <span>{testObj.testNum}</span>
      </div>
      <div className='conText'>
        <h1>
              HookTest 1 : {user}
        </h1>
        <HookTest2 />
      </div>
    </div>
  );
}

export default HookTest;