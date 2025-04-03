import { useState } from "react";
import "./App.css";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const userInfo = {
      아이디: userId,
      비밀번호: password,
      이메일: email,
      전화번호: phoneNumber,
      주소: address,
    };
    alert(JSON.stringify(userInfo));
  };
  return (
    <div className="container">
      <h2>회원 가입</h2>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
          <label className="agree" htmlFor="agree">
            이용약관에 모두 동의합니다
          </label>
        </div>
        <>
          {isChecked && (
            <div>
              <div className="form-group">
                <label htmlFor="userId">사용자 아이디</label>
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUserId(e.target.value);
                  }}
                  value={userId}
                  type="text"
                  id="userId"
                  name="userId"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                />
                {password !== confirmPassword && (
                  <label id="pw-match" className="pw-match">
                    비밀번호가 일치해야 됩니다.
                  </label>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">전화번호</label>
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phoneNumber}
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">주소</label>
                <input
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                  type="text"
                  id="address"
                  name="address"
                  required
                />
              </div>

              <button type="submit">제출</button>
            </div>
          )}
        </>
        {/* {isChecked && <FormArea />} */}
      </form>
    </div>
  );
};

export default App;
