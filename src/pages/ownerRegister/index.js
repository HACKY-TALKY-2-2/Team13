import styled from "styled-components";
import HomeButton from "../../components/homeButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const OwnerRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [menus, setMenus] = useState([""]);
  const [prices, setPrices] = useState([0]);
  const [numMenus, setNumMenus] = useState(1);
  const [seatsPerTable, setSeatsPerTable] = useState([0]);
  const [numTablesPerGroup, setNumTablesPerGroup] = useState([0]);
  const [numTableGroups, setNumTableGroups] = useState(1);
  const [page, setPage] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const handleMenuChange = (index, value) => {
    const newMenus = [...menus];
    newMenus[index] = value;
    setMenus(newMenus);
  };

  const addMenu = () => {
    setMenus([...menus, ""]); // Add a new menu with an empty string
  };

  const handlePriceChange = (index, value) => {
    const newPrices = [...prices];
    newPrices[index] = value;
    setPrices(newPrices);
  };

  const addPrice = () => {
    setMenus([...prices, 0]); // Add a new menu with an empty string
  };

  const handleSeatsPerTableChange = (index, value) => {
    const newSeatsPerTable = [...seatsPerTable];
    newSeatsPerTable[index] = value;
    setSeatsPerTable(newSeatsPerTable);
  };

  const addSeatsPerTable = () => {
    setSeatsPerTable([...seatsPerTable, 0]); // Add a new menu with an empty string
  };

  const handleNumTablesPerGroupChange = (index, value) => {
    const newNumTablesPerGroup = [...numTablesPerGroup];
    newNumTablesPerGroup[index] = value;
    setNumTablesPerGroup(newNumTablesPerGroup);
  };

  const addNumTablesPerGroup = () => {
    setNumTablesPerGroup([...numTablesPerGroup, 0]); // Add a new menu with an empty string
  };
  // 각각의 input에 대해서 나중에 props 달기
  return (
    <>
      <HomeButton />
      <BackgroundCircle />
      <RegisterFormContainer>
        <RegisterFlex>
          {page === 0 ? (
            <>
              <FieldWrapper>
                <Title>ID</Title>
                <InputsWrapper>
                  <BigInput
                    placeholder="ID를 입력해 주세요."
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></BigInput>
                  <VerifyButton>중복 확인</VerifyButton>
                </InputsWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Title>비밀번호</Title>
                <InputsWrapper>
                  <BigInput
                    placeholder="비밀번호를 입력해 주세요."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></BigInput>
                </InputsWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Title>성명</Title>
                <InputsWrapper>
                  <BigInput
                    placeholder="이름을 입력해 주세요."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></BigInput>
                </InputsWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Title>E-MAIL</Title>
                <InputsWrapper>
                  <SmallInput
                    placeholder="이메일을 입력해 주세요."
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  ></SmallInput>
                  <FixedText style={{ "font-size": "30px" }}>@</FixedText>
                  <CustomSelect
                    size="lg"
                    value={emailDomain}
                    onChange={(e) => {
                      setEmailDomain(e.target.value);
                    }}
                  >
                    <option>gmail.com</option>
                    <option>naver.com</option>
                    <option>daum.net</option>
                    <option>직접 입력</option>
                  </CustomSelect>
                  <SmallerInput
                    placeholder="직접 입력"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={["gmail.com", "naver.com", "daum.net"].includes(
                      emailDomain
                    )}
                    style={{ "margin-left": "2%" }}
                  ></SmallerInput>
                </InputsWrapper>
              </FieldWrapper>
              <Button onClick={() => setPage(1)}>다음 페이지</Button>
            </>
          ) : (
            <>
              <FieldWrapper>
                <Title>상호명</Title>
                <InputsWrapper>
                  <BigInput
                    placeholder="식당의 상호, 식당의 이름을 작성해 주세요."
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                  ></BigInput>
                </InputsWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Title>주소</Title>
                <InputsWrapper>
                  <BigInput
                    placeholder="식당의 위치를 작성해 주세요."
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></BigInput>
                </InputsWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Title>메뉴</Title>
                {[...Array(numMenus).keys()].map((index) => (
                  <InputsWrapper key={index}>
                    <SmallInput
                      placeholder="메뉴를 입력하세요."
                      type="text"
                      onChange={(e) => handleMenuChange(index, e.target.value)}
                    ></SmallInput>
                    <FixedText></FixedText>
                    <SmallerInput
                      placeholder="가격을 입력하세요."
                      type="text"
                      onChange={(e) => handlePriceChange(index, e.target.value)}
                    ></SmallerInput>
                    <FixedText>원</FixedText>
                  </InputsWrapper>
                ))}
                <InputsWrapper>
                  <AddButton
                    onClick={() => {
                      setNumMenus((prev) => prev + 1);
                      addMenu();
                      addPrice();
                    }}
                  >
                    <ImageFlex>
                      <PlusImageContainer />
                    </ImageFlex>
                  </AddButton>
                </InputsWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Title>시간</Title>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MultiSectionDigitalClockWithoutScroll
                    onChange={(e) => {
                      setHour(e.$H);
                      setMinute(e.$m);
                    }}
                  />
                </LocalizationProvider>
              </FieldWrapper>
              <FieldWrapper>
                <Title>테이블</Title>
                {[...Array(numTableGroups).keys()].map((index) => (
                  <InputsWrapper key={index}>
                    <SmallInput
                      type="text"
                      onChange={(e) =>
                        handleSeatsPerTableChange(index, e.target.value)
                      }
                    ></SmallInput>
                    <FixedText>인석</FixedText>
                    <SmallerInput
                      type="text"
                      onChange={(e) =>
                        handleNumTablesPerGroupChange(index, e.target.value)
                      }
                    ></SmallerInput>
                    <FixedText>테이블</FixedText>
                  </InputsWrapper>
                ))}
                <InputsWrapper>
                  <AddButton
                    onClick={() => {
                      setNumTableGroups((prev) => prev + 1);
                      addSeatsPerTable();
                      addNumTablesPerGroup();
                    }}
                  >
                    <ImageFlex>
                      <PlusImageContainer />
                    </ImageFlex>
                  </AddButton>
                </InputsWrapper>
              </FieldWrapper>
              <Button onClick={() => setPage(0)}>이전 페이지</Button>
              <Button>등록</Button>
            </>
          )}
        </RegisterFlex>
      </RegisterFormContainer>
    </>
  );
};
export default OwnerRegister;

const BackgroundCircle = styled.div`
  background-image: url("Ellipse 1.svg");
  background-size: cover; // This will make the image cover the entire container
  background-position: center; // This will center the image
  width: 70vh;
  height: 70vh;
  position: fixed;
  top: 15vh;
  right: 64px;
  z-index: -100;
`;

const RegisterFormContainer = styled.div`
  width: 80%;
  margin: 25vh auto 25vh auto;
  background-color: #eaeaea;
  border: 5px solid #4f518c;
  box-sizing: border-box;
  border-radius: 8px;
`;

const RegisterFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 4vh auto;
  gap: 6vh;
  > :not(:first-child) {
    border-top: 2px solid #4f518c;
  }
`;

const Title = styled.div`
  color: #4f518c;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3vh 0;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const InputsWrapper = styled.div`
  display: flex;
  height: 8vh;
  border: none;
  align-items: center;
`;

const BigInput = styled.input`
  display: block;
  height: 100%;
  width: 50%;
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
  &:disabled {
    background-color: #d5d5d5;
  }
`;

const SmallInput = styled.input`
  display: block;
  height: 100%;
  width: 25%;
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
  &:disabled {
    background-color: #d5d5d5;
  }
`;

const SmallerInput = styled.input`
  display: block;
  height: 100%;
  width: 20%;
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
  &:disabled {
    background-color: #d5d5d5;
  }
`;

const FixedText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4f518c;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 5%;
  height: 100%;
`;

const VerifyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 75%;
  background-color: #4f518c;
  border-radius: 3px;
  margin-left: 3%;
  border: none;
  && {
    color: #fff;
    font-family: "GowunBatang-Regular";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const CustomSelect = styled(Form.Select)`
  height: 100%;
  width: 20%;
`;

const AddButton = styled.div`
  height: 100%;
  width: 50%;
  background-color: #fff;
  position: relative;
`;

const ImageFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 12%;
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translate(0, -50%);
`;

const PlusImageContainer = styled.div`
  background-image: url("icon_plus.svg");
  background-size: cover; // This will make the image cover the entire container
  background-position: center; // This will center the image
  width: 40px;
  height: 40px;
`;

const Button = styled.button`
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

const MultiSectionDigitalClockWithoutScroll = styled(MultiSectionDigitalClock)`
  * {
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: transparent transparent; /* Firefox */

    /* For WebKit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;
