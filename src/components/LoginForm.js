import "../css/LoginForm.css";

function LoginForm(){
    return(
        <form className="login-form">
            <label htmlFor="id">아이디를 입력하세요.</label>
            <input type="text" id="id" placeholder="ID" required />
            <label htmlFor="password">비밀번호를 입력하세요.</label>
            <input type="text" id="user" placeholder="Password" required />
            <input type="submit" value="로그인" />
        </form>
    );
}

export default LoginForm;