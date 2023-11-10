import React, { useState } from 'react';
import axios from 'axios';

const AddressSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            // 주소 검색 API 호출
            const addressResponse = await axios.get(
                `https://dapi.kakao.com/v2/local/search/address.json?query=${query}`,
                {
                    headers: {
                        Authorization:
                            'KakaoAK 78fdd5c4f14b98834a6204a6332461c4',
                    },
                }
            );
            const firstAddress = addressResponse.data.documents[0];

            // 상세 장소 검색 API 호출 (예: 좌표 기반 음식점 검색)
            if (firstAddress) {
                const detailResponse = await axios.get(
                    `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=FD6&x=${firstAddress.x}&y=${firstAddress.y}`,
                    {
                        headers: {
                            Authorization:
                                'KakaoAK 78fdd5c4f14b98834a6204a6332461c4',
                        },
                    }
                );
                setResults(detailResponse.data.documents);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error('주소 검색 오류:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="주소를 입력하세요"
            />
            <button onClick={handleSearch}>검색</button>
            <ul>
                {results.map((item, index) => (
                    <li key={index}>
                        {item.place_name ? item.place_name : item.address_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddressSearch;
