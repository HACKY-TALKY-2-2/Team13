import React, { useState } from 'react';
import Nav from '../../components/layout/Nav';
import Map from '../../components/layout/Map';
import SearchFrame from '../../components/container/searchFrame/index.js';

function CustomerSearch() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Nav />
                <SearchFrame />
                <Map />
            </div>
        </>
    );
}

export default CustomerSearch;
