import styled from "styled-components";
import HomeButton from "../../components/homeButton";

const OwnerWelcome = () => {
  return (
    <>
      <HomeButton />
      <BackgroundCircle />
    </>
  );
};
export default OwnerWelcome;

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
