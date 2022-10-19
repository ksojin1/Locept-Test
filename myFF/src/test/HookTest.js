import HookTest2 from './HookTest2';
import { TestContext } from "../context/TestContext";
import { useContext } from 'react';

const HookTest = () => {

  const { user } = useContext(TestContext);
  return(
    <div>
      <h1 style={{paddingTop: '200px', fontSize: '50px'}}>
            HookTest 1 : {user}
      </h1>
      <HookTest2 />
    </div>
  );
}

export default HookTest;