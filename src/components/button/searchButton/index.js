function SearchButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                width: '29.63px',
                height: '25.42px',
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
            }}
        >
            <img
                src="search.png"
                alt="Search"
                style={{
                    width: '29.63px',
                    height: '25.42px',
                    objectFit: 'contain',
                }}
            />
        </button>
    );
}

export default SearchButton;
