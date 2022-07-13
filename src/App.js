import './css/reset.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Ranking from './components/Ranking';
import Mypage from './components/Mypage';

function App() {
  
  return (
    <HashRouter>
      <div className="App" style={{backgroundColor: "#131626"}}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/ranking" element={<Ranking />}/>
          <Route path="/mypage" element={<Mypage />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
