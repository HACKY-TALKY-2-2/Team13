function ProfileButton() {
    return (
        <button
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
                src="profile.png"
                alt="profile"
                style={{
                    width: '29.63px',
                    height: '25.42px',
                    objectFit: 'contain',
                }}
            />
        </button>
    );
}

export default ProfileButton;
