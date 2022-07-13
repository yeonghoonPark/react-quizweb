import "../css/Quiz.css";
import quizAdd from "../images/quiz_add.png"
import quizSkip from "../images/quiz_skip.png"

function Quiz() {
    return (
        <div className="quiz">
            <div className="container">
                <div className="quiz-add">
                    <img src={quizAdd} alt="plus" />&nbsp;&nbsp;&nbsp;
                    <p>문제 추가</p>
                </div>
                <div className="quiz-box">
                    <p>불로장생을 꿈꿔 전 세계를 뒤져 불로초를 찾았던 왕의 이름은?</p>
                </div>
                <div className="quiz-skip">
                    <img src={quizSkip} alt="skip" />
                    <p> 건너뛰기</p>
                </div>
                <div className="quiz-btns">
                    <button>1. 세종대왕</button>
                    <button>2. 알렉산더</button>
                    <button>3. 진시황</button>
                </div>


            </div>
        </div>
    );
}

export default Quiz;