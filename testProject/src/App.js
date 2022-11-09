import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Main from './routes/Main';
import UserDetail from './routes/UserDetail';
import BoardView from './routes/BoardView';
import BoardWrite from './routes/BoardWrite';
import UserMap from './routes/UserMap';

//Test
import Image from './test/Image';
import Hook1 from './test/Hook1';
import CustomHook from './test/CustomHook';
import Scroll from './test/Scroll';
import { TestContext } from "./context/TestContext";
import { useState } from "react";

function App() {

  //useContext 테스트용
  const [user, setUser] = useState(null);

  return (
    <>
    <TestContext.Provider value={{user, setUser}}>

      
    <BrowserRouter>    
      <Header />
      <Routes>

        {/*test*/}
        <Route path="/image" element={<Image />}></Route>
        <Route path="/hook" element={<Hook1 />}></Route>
        <Route path="/custom" element={<CustomHook />}></Route>
        <Route path="/scroll" element={<Scroll />}></Route>


        <Route path="/" element={<Main />}></Route>
        <Route path="/user/:id" element={<UserDetail />}></Route>
        
        <Route path="/board/:id" element={<BoardView />}></Route>
        <Route path="/board/write" element={<BoardWrite />}></Route>

        <Route path="/location/:id" element={<UserMap />}></Route>

      </Routes>
    </BrowserRouter>


    </TestContext.Provider>
    </>
  );
}

export default App;
