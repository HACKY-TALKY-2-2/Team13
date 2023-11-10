import styled from "styled-components";
import HomeButton from "../../components/homeButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const OwnerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <HomeButton />
      <BackgroundCircle />
      <LoginFormContainer>
        <WidthRestrictor>
          <LoginFlex>
            <IDInputWrapper>
              <ImageFlex>
                <IDImageContainer />
              </ImageFlex>
              <IDInput
                placeholder="ID를 입력해 주세요."
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></IDInput>
            </IDInputWrapper>
            <PasswordInputWrapper>
              <ImageFlex>
                <PasswordImageContainer />
              </ImageFlex>
              <PasswordInput
                placeholder="비밀번호를 입력해 주세요."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></PasswordInput>
            </PasswordInputWrapper>
          </LoginFlex>
          <Options>
            <NoDecorationLink to="#">
              <FindId>ID 찾기</FindId>
            </NoDecorationLink>
            <NoDecorationLink to="#">
              <FindPassword>비밀번호 찾기</FindPassword>
            </NoDecorationLink>
            <NoDecorationLink to="/owner-register">
              <Register>회원가입</Register>
            </NoDecorationLink>
          </Options>
          <LoginButton>로그인</LoginButton>
        </WidthRestrictor>
      </LoginFormContainer>
    </>
  );
};
export default OwnerLogin;

const BackgroundCircle = styled.div`
  background-image: url("Ellipse 1.svg");
  background-size: cover; // This will make the image cover the entire container
  background-position: center; // This will center the image
  width: 70vh;
  height: 70vh;
  position: fixed;
  top: 15vh;
  right: 64px;
`;

const LoginFormContainer = styled.div`
  width: 52%;
  margin-left: 22%;
  height: 48vh;
  background-color: #eaeaea;
  border: 5px solid #4f518c;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 8px;
`;

const WidthRestrictor = styled.div`
  width: 85%;
  height: 100%;
  transform: translate(0, 20%);
  margin: 0 auto;
`;

const LoginFlex = styled.div`
  display: flex;
  flex-direction: column;
  /* transform: translate(0, 50%); */
  box-sizing: border-box;
  margin: 0 auto;
  height: 40%;
  width: 85%;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
`;

const IDInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  border: none;
  border-bottom: 1px solid #d9d9d9;
`;
const ImageFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 12%;
`;

const IDInput = styled.input`
  display: block;
  height: 100%;
  width: 76%;
  border: none;
  box-sizing: border-box;
  && {
    font-family: "GowunBatang-Regular";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &:focus {
    outline: none;
  }
`;

const IDImageContainer = styled.div`
  background-image: url("icon_person.svg");
  background-size: cover; // This will make the image cover the entire container
  background-position: center; // This will center the image
  width: 40px;
  height: 40px;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  border: none;
  border-top: 1px solid #d9d9d9;
`;

const PasswordInput = styled.input`
  display: block;
  height: 100%;
  width: 76%;
  border: none;
  box-sizing: border-box;
  && {
    font-family: "GowunBatang-Regular";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &:focus {
    outline: none;
  }
`;

const PasswordImageContainer = styled.div`
  background-image: url("icon_lock.svg");
  background-size: cover; // This will make the image cover the entire container
  background-position: center; // This will center the image
  width: 40px;
  height: 40px;
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 85%;
  height: 16%;
  margin: 10px auto 0 auto;
`;

const NoDecorationLink = styled(Link)`
  && {
    text-decoration: none;
  }
`;

const FindId = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f518c;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-right: 1px solid #4f518c;
`;
const FindPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f518c;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-left: 1px solid #4f518c;
  border-right: 1px solid #4f518c;
`;
const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f518c;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-left: 1px solid #4f518c;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  height: 15%;
  background-color: #4f518c;
  border-radius: 3px;
  && {
    color: #fff;
    font-family: "GowunBatang-Regular";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
