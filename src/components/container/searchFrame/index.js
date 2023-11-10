import SearchBar from './searchBar/index.js';
import SearchStoreInfo from './searchStoreInfo/index.js';

function SearchFrame() {
    return (
        <div
            style={{
                width: 396,
                height: 982,
                background: '#fff',
                border: '1px solid black', // 올바른 border 값 설정
            }}
        >
            <SearchBar />
            <SearchStoreInfo />
            <SearchStoreInfo />
            <SearchStoreInfo />
        </div>
    );
}

export default SearchFrame;
