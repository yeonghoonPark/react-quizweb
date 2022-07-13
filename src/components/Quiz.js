import "../css/Quiz.css";
import quizAdd from "../images/quiz_add.png"
import quizSkip from "../images/quiz_skip.png"
import quizData from "../data/quizData.json"
import { useState } from "react";

function Quiz() {
    const [useQuizData, setUseQuizData] = useState(quizData);
    
    const randomUseQuizData = useQuizData[Math.floor(Math.random() * useQuizData.length)];

    const handleSkip = () => {
        window.location.reload();
    }
    
    return (
        <div className="quiz">
            <div className="container">
                <div className="quiz-add">
                    <img src={quizAdd} alt="plus" />&nbsp;&nbsp;&nbsp;
                    <p>문제 추가</p>
                </div>
                <div className="quiz-box">
                    <p>{randomUseQuizData.quiz}</p>
                </div>
                <div className="quiz-skip" onClick={handleSkip}>
                    <img src={quizSkip} alt="skip" />
                    <p>건너뛰기</p>
                </div>
                <div className="quiz-btns">
                    <button>①&nbsp;&nbsp; {randomUseQuizData.wrong1}</button>
                    <button>②&nbsp;&nbsp; {randomUseQuizData.wrong2}</button>
                    <button>③&nbsp;&nbsp; {randomUseQuizData.correct}</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;