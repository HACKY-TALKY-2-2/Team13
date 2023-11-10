import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantSearch = ({ keyword, triggerSearch, setTriggerSearch }) => {
    const [location, setLocation] = useState({});

    useEffect(() => {
        if (triggerSearch) {
            handleSearch();
            setTriggerSearch(false); // Reset the trigger
        }
    }, [keyword, triggerSearch, setTriggerSearch]);

    const handleSearch = async () => {
        try {
            // 키워드 검색 API 호출
            const response = await axios.get(
                `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
                {
                    headers: {
                        Authorization:
                            'KakaoAK 78fdd5c4f14b98834a6204a6332461c4',
                    },
                }
            );
            const firstRestaurant = response.data.documents[0];

            if (firstRestaurant) {
                setLocation({
                    name: firstRestaurant.place_name,
                    latitude: firstRestaurant.y,
                    longitude: firstRestaurant.x,
                });
            } else {
                setLocation({});
            }
        } catch (error) {
            console.error('키워드 검색 오류:', error);
        }
    };

    return (
        <div>
            {location.name && (
                <div>
                    <h3>{location.name}</h3>
                    <p>위도: {location.latitude}</p>
                    <p>경도: {location.longitude}</p>
                </div>
            )}
        </div>
    );
};

export default RestaurantSearch;
