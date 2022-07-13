import "../css/Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const goQuiz = () => {
        navigate("/quiz");
    }

    let saveUserInfoArray = [];

    const saveUserInfo = () => {
        localStorage.setItem("userInfo", JSON.stringify(saveUserInfoArray));
    }

    const onLoginSubmit = () => {
        const userIdInput = document.getElementById("userId");
        const userPasswordInput = document.getElementById("userPassword");
        const userId = userIdInput.value;
        const userPassword = userPasswordInput.value;
        const newUserInfoObj = {
            userId: userId,
            userPassword: userPassword,
            id: Date.now()
        }
        saveUserInfoArray.push(newUserInfoObj);
        saveUserInfo();
        loginSuccessMessage(userId);
    }

    const loginSuccessMessage = (id) => {
        alert(`'${id}'님 로그인에 성공하였습니다.`);
        goQuiz();
        window.location.reload();
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={onLoginSubmit}>
                <label htmlFor="userId">아이디를 입력하세요.</label>
                <input
                    type="text"
                    id="userId"
                    placeholder="ID"
                    required
                    maxLength={12}
                />
                <label htmlFor="userPassword">비밀번호를 입력하세요.</label>
                <input
                    type="password"
                    id="userPassword"
                    placeholder="Password"
                    required
                    maxLength={12}
                />
                <input type="submit" value="로그인" />
            </form>
        </div>
    );
}

export default Login;