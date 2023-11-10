import React from 'react';

function Nav() {
    return (
        <>
            <div style={{ width: 115, height: 982 }}>
                <div
                    style={{
                        width: 115,
                        height: 982,
                        position: 'absolute',
                        left: '-0.5px',
                        top: '-0.5px',
                        background: '#907ad6',
                    }}
                />
                <button
                    style={{
                        width: 58,
                        height: 52,
                        position: 'absolute',
                        left: '27.5px',
                        top: '20.5px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                >
                    <img
                        src="my_location.png"
                        alt="my_location"
                        style={{
                            width: 58,
                            height: 52,
                            objectFit: 'contain',
                        }}
                    />
                </button>
                <button
                    style={{
                        width: 58,
                        height: 52,
                        position: 'absolute',
                        left: '27.5px',
                        top: '141.5px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                >
                    <img
                        src="search.png"
                        alt="search"
                        style={{
                            width: 58,
                            height: 52,
                            objectFit: 'contain',
                        }}
                    />
                </button>
                <button
                    style={{
                        width: 58,
                        height: 52,
                        position: 'absolute',
                        left: '26.5px',
                        top: '808.5px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                >
                    <img
                        src="profile.png"
                        alt="profile"
                        style={{
                            width: 58,
                            height: 52,
                            objectFit: 'contain',
                        }}
                    />
                </button>
                <button
                    style={{
                        width: 58,
                        height: 52,
                        position: 'absolute',
                        left: '27.5px',
                        top: '898.5px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                    }}
                >
                    <img
                        src="home.png"
                        alt="home"
                        style={{
                            width: 58,
                            height: 52,
                            objectFit: 'contain',
                        }}
                    />
                </button>
            </div>
        </>
    );
}

export default Nav;
