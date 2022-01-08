import React, { useEffect } from 'react';
import Header from './Header';
import Footer from '../Footer';
import Nav from '../Nav';
import AanbevolenProducten from './AanbevolenProducten';
import * as MDBUI from 'mdb-react-ui-kit';
import * as MDB from "mdbreact";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAanbevolen } from '../../Store/producten/aanbevolenSlice';

const Home = () => {
    const dispatch = useDispatch();

    const aanbevolenState = useSelector(state => state.aanbevolen);

    useEffect(() => {
        dispatch(fetchAanbevolen());    
    }, []);

    return (
        <>
            <Nav />
            <Header />
            <div flex id='aanbevolen'>
                <MDB.MDBTypography colorText='light-blue' tag='h1' variant="h1">Aanbevolen Producten</MDB.MDBTypography>
                <MDBUI.MDBContainer>
                    <MDBUI.MDBRow className='d-flex justify-content-center'>
                        {aanbevolenState.data.map((prod) => (
                            <AanbevolenProducten key={prod.id} productData={prod}/>
                        ))}
                    </MDBUI.MDBRow>
                </MDBUI.MDBContainer>
            </div>
            <Footer />
        </>
    )
}

export default Home;