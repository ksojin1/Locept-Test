import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header/Header';
import Main from './routes/Main';
import BoardWrite from './routes/BoardWrite';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>    
      
      <Routes>
        
        {/*메인페이지*/}
        <Route path="/" element={<Main />}></Route>

        {/*글쓰기페이지*/}
        <Route path="/board/write" element={<BoardWrite />}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
