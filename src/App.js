import { HashRouter, Routes, Route } from "react-router-dom";
import './css/reset.css';
import Main from "./main";

function App() {
  return (
    <HashRouter>
      <div className="App" style={{backgroundColor: "#131626"}}>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
