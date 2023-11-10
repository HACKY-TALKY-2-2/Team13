function SearchStoreInfo({ onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex', // 부모 컨테이너를 flex 컨테이너로 설정
                justifyContent: 'space-between', // 내부 요소를 양 끝으로 정렬
                alignItems: 'center', // 세로 정렬을 가운데로 설정
                width: 324,
                height: 160,
                background: '#fff',
                border: '1px solid black',
                padding: '10px', // 내부 여백 설정
            }}
        >
            <p
                style={{
                    fontSize: 15,
                    fontWeight: 700,
                    textAlign: 'left',
                    color: '#000',
                }}
            >
                <span>식당 이름</span>
                <br />
                <span>평점</span>
                <br />
                <span>주소</span>
                <br />
                <span>영업 시간</span>
            </p>
            <img
                src="store.jpeg"
                style={{
                    width: 113,
                    height: 105,
                    borderRadius: 25,
                    objectFit: 'cover',
                }}
            />
        </div>
    );
}

export default SearchStoreInfo;
