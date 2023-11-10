import SearchBar from './searchBar/index.js';
import SearchStoreInfo from './searchStoreInfo/index.js';

function SearchFrame({ onSearchStoreInfoClick }) {
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
            <SearchStoreInfo onClick={onSearchStoreInfoClick} />
            <SearchStoreInfo onClick={onSearchStoreInfoClick} />
            <SearchStoreInfo onClick={onSearchStoreInfoClick} />
            <SearchStoreInfo onClick={onSearchStoreInfoClick} />
        </div>
    );
}

export default SearchFrame;
