import { HashRouter, Routes, Route } from "react-router-dom";
import './css/reset.css';
import Main from "./main";
import Login from "./login";

import Header from "./components/Header";


function App() {
  return (
    <HashRouter>
      <div className="App" style={{backgroundColor: "#131626"}}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
