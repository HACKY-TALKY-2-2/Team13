import React from 'react';
import SearchButton from '../../button/searchButton';
import MyLocationButton from '../../button/myLocationButton';
import HomeButton from '../../button/homeButton';
import ProfileButton from '../../button/profileButton';
function Nav({ onSearchClick }) {
    return (
        <>
            <div
                style={{
                    width: 115,
                    height: 982,
                    background: '#907ad6',
                    display: 'flex', // Flexbox를 활성화합니다.
                    flexDirection: 'column', // 컴포넌트들을 세로로 정렬합니다.
                    alignItems: 'center', // 가운데 정렬합니다.
                }}
            >
                <div
                    style={{
                        width: 78,
                        height: 25,
                        background: '#907ad6',
                    }}
                />
                <MyLocationButton
                    style={{
                        width: 58,
                        height: 52,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                />
                <div
                    style={{
                        width: 78,
                        height: 69,
                        background: '#907ad6',
                    }}
                />
                <SearchButton
                    onClick={onSearchClick}
                    style={{
                        width: 58,
                        height: 52,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                />
                <div
                    style={{
                        width: 78,
                        height: 400,
                        background: '#907ad6',
                    }}
                />
                <ProfileButton
                    style={{
                        width: 58,
                        height: 52,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                />
                <div
                    style={{
                        width: 78,
                        height: 69,
                        background: '#907ad6',
                    }}
                />
                <HomeButton
                    style={{
                        width: 58,
                        height: 52,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                />
                <div
                    style={{
                        width: 78,
                        height: 10,
                        background: '#907ad6',
                    }}
                />
            </div>
        </>
    );
}

export default Nav;
