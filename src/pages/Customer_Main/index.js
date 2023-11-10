import Nav from '../../components/layout/Nav';
import Map from '../../components/layout/Map';

function CustomerMain() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Nav />
                <Map />
            </div>
        </>
    );
}

export default CustomerMain;
