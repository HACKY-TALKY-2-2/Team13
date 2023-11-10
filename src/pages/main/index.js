import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            {/* <HomeButton /> */}
            <BackgroundCircle />
            <TitleWrapper>
                <Title>직장인 회식 자리확인 서비스</Title>
                <Title>어라운드테이블</Title>
            </TitleWrapper>
            <Link to="/owner-login">
                <OwnerButtonComponent>사장님</OwnerButtonComponent>
            </Link>
            {/* 페이지 만들어지면 Link 바꾸기 */}
            <Link to="/owner-register">
                <GuestButtonComponent>손님</GuestButtonComponent>
            </Link>
        </>
    );
};
export default Main;

// 나중에 반응형
const BackgroundCircle = styled.div`
    background-image: url('Ellipse 1.svg');
    background-size: cover;
    background-position: center;
    width: 70vh;
    height: 70vh;
    position: fixed;
    top: 15vh;
    right: 64px;
`;
const TitleWrapper = styled.div`
    margin-top: 86px;
`;
const Title = styled.div`
    color: #565656;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const OwnerButtonComponent = styled.div`
    width: 220px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #4f518c;
    color: #fff;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    left: 115px;
    bottom: 193px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GuestButtonComponent = styled.div`
    width: 220px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #4f518c;
    color: #fff;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    left: 115px;
    bottom: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
