import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "../css/Preface.css";

function Preface(){
    return(
        <section className="preface">
            <div className="container">
                <div className="text">
                    <p>QUIZ ( )&nbsp;&nbsp;&nbsp;<span>&#123;</span></p>
                    <p>Tirrilee</p>
                    <p>dev test kit</p>
                    <p><span>&#125;</span></p>
                    <Link to="/login"><button>START QUIZ</button></Link>
                </div>
                <img src={logo} alt="Tirrilee" />
            </div>
        </section>
    );
}

export default Preface;