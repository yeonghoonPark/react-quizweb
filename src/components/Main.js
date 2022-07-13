import "../css/Main.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Main() {

    const loginBtnAddClassNameActive = () => {
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.classList.add('active');
    }

    return (
        <div className="main">
            <section className="preface">
                <div className="container">
                    <div className="text">
                        <p>QUIZ ( )&nbsp;&nbsp;&nbsp;<span>&#123;</span></p>
                        <p>Tirrilee</p>
                        <p>dev test kit</p>
                        <p><span>&#125;</span></p>
                        <Link to="/login" onClick={loginBtnAddClassNameActive}><button>START QUIZ</button></Link>
                    </div>
                    <img src={logo} alt="Tirrilee" />
                </div>
            </section>
        </div>
    );
}

export default Main;