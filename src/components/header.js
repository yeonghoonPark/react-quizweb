import { Link } from "react-router-dom";
import "../css/Header.css";

const CLASSNAME_ACTIVE = "active";

const removeClassNameActive = ()=>{
    const span = document.getElementsByTagName("span");
    for(let idx=0; idx<span.length; idx++){
        span[idx].classList.remove(CLASSNAME_ACTIVE);
    }
}

const toggleClassNameActive = (event)=>{
    removeClassNameActive();
    const currentTarget = event.currentTarget;
    currentTarget.classList.add(CLASSNAME_ACTIVE);
}


function Header(){
    return(
        <header className="header">
            <div className="container">
                <h1 className="title" onClick={removeClassNameActive}><Link to="/">QUIZWEB</Link></h1>
                <nav className="nav">
                    <span onClick={toggleClassNameActive}><Link to="/quiz">QUIZ</Link></span>
                    <span onClick={toggleClassNameActive}><Link to="/ranking">RANKING</Link></span>
                    <span onClick={toggleClassNameActive}><Link to="/login">LOGIN</Link></span>
                    <span onClick={toggleClassNameActive} className="hidden"><Link to="/mypage">MYPAGE</Link></span>
                    <span onClick={toggleClassNameActive} className="hidden"><Link to="/logout">LOGOUT</Link></span>
                </nav>
            </div>
        </header>
    );
}

export default Header;