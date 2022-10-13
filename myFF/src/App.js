import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Main from './routes/Main';
import UserDetail from './routes/UserDetail';
import BoardView from './routes/BoardView';
import BoardWrite from './routes/BoardWrite';
import UserMap from './routes/UserMap';


function App() {

  return (
    <>
    <BrowserRouter>    
      <Header />
      <Routes>
        
        <Route path="/" element={<Main />}></Route>
        <Route path="/user/:id" element={<UserDetail />}></Route>
        
        
        <Route path="/board/:id" element={<BoardView />}></Route>
        <Route path="/board/write" element={<BoardWrite />}></Route>

        <Route path="/location/:id" element={<UserMap />}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
