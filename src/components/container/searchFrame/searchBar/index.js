import SearchSearchButton from '../../../button/searchSearchButton/index';

function SearchBar() {
    return (
        <div
            style={{
                width: '350.57px',
                height: '55.07px',
                borderRadius: 50,
                background: '#fff',
                border: '2px solid black', // 올바른 border 값 설정
                display: 'flex', // 부모 컨테이너를 flex 컨테이너로 설정
                alignItems: 'center', // 세로 정렬을 가운데로 설정
            }}
        >
            <input
                type="text"
                placeholder="검색어 입력"
                style={{
                    width: '100%', // 입력 필드의 가로 폭을 100%로 설정
                    height: '100%', // 입력 필드의 높이를 100%로 설정
                    border: '2px solid black', // 입력 필드의 테두리 스타일
                    borderRadius: '50px', // 입력 필드의 테두리 반경 설정
                    padding: '10px', // 입력 필드의 내부 여백 설정
                }}
            />
            <SearchSearchButton />
        </div>
    );
}

export default SearchBar;
