import React, { useEffect } from 'react';

const { kakao } = window;

function Map() {
    useEffect(() => {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스

        // 사용자의 현재 위치를 얻는 함수
        const success = (position) => {
            const currentLat = position.coords.latitude;
            const currentLng = position.coords.longitude;
            const currentPosition = new kakao.maps.LatLng(
                currentLat,
                currentLng
            );

            const options = {
                center: currentPosition, // 사용자의 현재 위치를 지도의 중심으로 설정
                level: 3,
            };

            // 지도 생성
            const map = new kakao.maps.Map(container, options);

            // 마커 생성 및 지도에 추가
            new kakao.maps.Marker({
                map: map,
                position: currentPosition,
            });
        };

        const error = () => {
            console.error('Cannot retrieve your location');
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    return (
        <>
            <div id="map" style={{ width: 1397, height: 982 }}></div>
        </>
    );
}

export default Map;
