## QuizWeb, React라이브러리를 활용한 반응형 SPA 제작

### 1. 사이트 바로가기

- 데모사이트 : <a href="https://yeonghoonpark.github.io/react-quizweb/" target="_blank">https://yeonghoonpark.github.io/react-quizweb/</a>

### 2. 개발목표

- Frontend로 로그인기능 구현 및 정보변경
- react-router-dom 라이브러리 활용 및 이해
- JSON파일의 랜덤호출

### 3. 사용기술

- HTML
- CSS
- javaScript
- React, react-router-dom

### 4. 동작기능

#### 4-1. 로그인
![onlogin50](https://user-images.githubusercontent.com/95198410/178717120-8ece8a2b-3fab-4279-8950-70f070dddb93.png)
###### 참조코드
  ```ts
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
  ```
  ###### localStorage를 활용하여 유저의 정보를 저장함
  ###### 문제점 및 개선사항 : push()를 이용하여 유저의 정보가 쌓이게 만들었으나 중복로그인에 대한 기능 및 유저의 정보를 불러 올 수 있는 방법이 없음
---
#### 4-2. quizData.JSON 파일 불러오기 및 랜덤배치
![quiz50](https://user-images.githubusercontent.com/95198410/178717560-f1628b57-66a4-4e2a-b6b3-41d9dd9a959d.png)
###### 참조코드
  ```ts
  const [useQuizData, setUseQuizData] = useState(quizData);
    
  const randomUseQuizData = useQuizData[Math.floor(Math.random() * useQuizData.length)];

  const handleSkip = () => {
      window.location.reload();
  }
  
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
  ```
  ###### random함수를 이용, 건너뛰기 기능을 window개체의 location.reload();로 새로고침 기능으로 대체함 
  ###### 문제점 및 개선사항 : 중복되는 퀴즈가 나올 수 있고 reload();는 근본적인 skip의 기능과 거리감이 있음, 또한 보기의 답이 항상 3번에 나오는 문제점을 지님.
---
#### 4-3. 로그아웃
###### 참조코드
![onlogin50](https://user-images.githubusercontent.com/95198410/178717991-9d397e3a-a304-4fbb-b46c-cbe440fcc6bf.png)
  ```ts
 const deleteUserInfo = () => {
    localStorage.clear();
    alert("로그아웃 되었습니다.");
    goHome();
    window.location.reload();
}
  ```
  ###### 로그아웃 기능을 locakStorage의 삭제로 대체함
  ###### 문제점 및 개선사항 : 유저의 정보를 저장하여 불러 올 수 없음, 유저의 정보를 저장하고 유지하며 userId가 일치할 시에 정보를 불러 올 수 있게 수정할 계획.
---  
#### 4-4~8. Ranking, Mypage and so on.. to be updated

### 5. 코드 바로가기

- App.js : https://github.com/yeonghoonPark/react-quizweb/blob/main/src/App.js
- css : https://github.com/yeonghoonPark/react-quizweb/tree/main/src/css
- components : https://github.com/yeonghoonPark/react-quizweb/tree/main/src/components
