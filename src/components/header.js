import { Link } from "react-router-dom";
import "../css/Header.css";

function Header(){
    return(
        <header className="header">
            <div className="container">
                <h1 className="title">QUIZWEB</h1>
                <nav className="nav">
                    <span><Link to="/quiz">QUIZ</Link></span>
                    <span><Link to="/ranking">RANKING</Link></span>
                    <span><Link to="/login">LOGIN</Link></span>
                    <span className="hidden"><Link to="/mypage">MYPAGE</Link></span>
                    <span className="hidden"><Link to="/logout">LOGOUT</Link></span>
                </nav>
            </div>
        </header>
    );
}

export default Header;