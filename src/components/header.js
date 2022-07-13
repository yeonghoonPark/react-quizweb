import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    const CLASSNAME_ACTIVE = "active";

    const removeClassNameActive = () => {
        const span = document.getElementsByTagName("span");
        for (let idx = 0; idx < span.length; idx++) {
            span[idx].classList.remove(CLASSNAME_ACTIVE);
        }
    }

    const toggleClassNameActive = (event) => {
        removeClassNameActive();
        const currentTarget = event.currentTarget;
        currentTarget.classList.add(CLASSNAME_ACTIVE);
    }

    const savedUserInfo = localStorage.getItem("userInfo");

    const deleteUserInfo = () => {
        localStorage.clear();
        alert("로그아웃 되었습니다.");
        goHome();
        window.location.reload();
    }

    if (savedUserInfo) {
        return (
            <header className="header">
                <div className="container">
                    <h1 className="title" onClick={removeClassNameActive}><Link to="/">QUIZWEB</Link></h1>
                    <nav className="nav">
                        <span onClick={toggleClassNameActive} className="quiz-btn"><Link to="/quiz">QUIZ</Link></span>
                        <span onClick={toggleClassNameActive} className="ranking-btn"><Link to="/ranking">RANKING</Link></span>
                        <span onClick={toggleClassNameActive} className="login-btn hidden"><Link to="/login">LOGIN</Link></span>
                        <span onClick={toggleClassNameActive} className="mypage-btn"><Link to="/mypage">MYPAGE</Link></span>
                        <span onClick={deleteUserInfo} className="logout-btn"><Link to="/">LOGOUT</Link></span>
                    </nav>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header">
                <div className="container">
                    <h1 className="title" onClick={removeClassNameActive}><Link to="/">QUIZWEB</Link></h1>
                    <nav className="nav">
                        <span onClick={toggleClassNameActive} className="quiz-btn"><Link to="/quiz">QUIZ</Link></span>
                        <span onClick={toggleClassNameActive} className="ranking-btn"><Link to="/ranking">RANKING</Link></span>
                        <span onClick={toggleClassNameActive} className="login-btn"><Link to="/login">LOGIN</Link></span>
                        <span onClick={toggleClassNameActive} className="mypage-btn hidden"><Link to="/mypage">MYPAGE</Link></span>
                        <span className="logout-btn hidden"><Link to="/">LOGOUT</Link></span>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;