import React, { useState } from 'react';
import Nav from '../../components/layout/Nav';
import Map from '../../components/layout/Map';
import SearchFrame from '../../components/container/searchFrame/index.js';
import StoreInfo from '../../components/container/storeInfo/index.js';

function CustomerSearch() {
    const [isSearchActive, setSearchActive] = useState(false);
    const [isStoreActive, setStoreActive] = useState(false);
    const toggleSearch = () => {
        setSearchActive(!isSearchActive);
    };
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Nav onSearchClick={toggleSearch} />
                    {isSearchActive && <SearchFrame />}
                    {isStoreActive && <StoreInfo />}
                </div>
                <Map />
            </div>
        </>
    );
}

export default CustomerSearch;
