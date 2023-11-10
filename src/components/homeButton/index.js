import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <HomeButtonImg />
    </Link>
  );
};

const HomeButtonImg = styled.div`
  background-image: url("icon_home.svg");
  width: 70px;
  height: 60px;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 56px;
  top: 43px;
`;

export default HomeButton;
