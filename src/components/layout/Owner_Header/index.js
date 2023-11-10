import styled from "styled-components";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const OwnerHeader = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <HeaderWrapper>
      <SwitchWrapper>
        <SwitchText>{isOpen ? "영업 중" : "영업 종료"}</SwitchText>
        <Switch
          value={isOpen}
          defaultChecked
          onChange={(e) => setIsOpen(e.target.checked)}
        />
      </SwitchWrapper>
      <FixStoreInfo>가게 정보 수정</FixStoreInfo>
    </HeaderWrapper>
  );
};
export default OwnerHeader;

const HeaderWrapper = styled.div`
  height: 15vh;
  display: flex;
  padding: 5%;
  background-color: #4f518c;
  justify-content: space-between;
  align-items: center;
`;

const SwitchWrapper = styled.div`
  display: flex;
  width: 13%;
  justify-content: space-between;
  align-items: center;
`;

const SwitchText = styled.div`
  color: #d5d5d5;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3vh 0;
`;

const FixStoreInfo = styled.div`
  color: #d5d5d5;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3vh 0;
  text-align: center;
  border-bottom: 2px solid #d5d5d5;
  width: 25%;
`;
