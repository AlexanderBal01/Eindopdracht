import React, { useEffect, useState } from 'react';
import * as MDBUI from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAanbevolen } from '../Store/producten/aanbevolenSlice';
import Header from '../Components/Header';
import * as ReactBootStrap from "react-bootstrap";
import './CSS/producten.css';
import { addToCart } from '../Store/winkelmandje/cartAction';
import Footer from '../Components/Footer';

const HomePagina = () => {
    const dispatch = useDispatch();

    const aanbevolenState = useSelector(state => state.aanbevolen);

    const [aantal, setAantal] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    useEffect(() => {
        dispatch(fetchAanbevolen());    
    }, []);

    return (
        <>
           <Header />
           <div flex id='aanbevolen'>
                <MDBUI.MDBTypography className='text-primary text-center' tag='h1' variant="h1">Aanbevolen Producten</MDBUI.MDBTypography>
                <MDBUI.MDBContainer>
                    <MDBUI.MDBRow className='d-flex justify-content-center'>
                        {aanbevolenState.data.map((prod) => (
                            <MDBUI.MDBCard className='product' style={{ maxWidth: '22rem' }}>
                                <MDBUI.MDBCardImage src={prod.afbeelding} position='top'/>
                                <MDBUI.MDBCardBody>
                                    <MDBUI.MDBCardTitle>{prod.productnaam}</MDBUI.MDBCardTitle>
                                    <MDBUI.MDBCardTitle>€ {prod.prijs}</MDBUI.MDBCardTitle>
                                    <MDBUI.MDBCardText>
                                        {prod.beschrijving}
                                    </MDBUI.MDBCardText>
                                    <p>Aantal</p>
                                    <form>
                                        <input min={1} value={aantal} onChange={(event) => setAantal(event.target.value)} type="number" name="aantal" id='aantal'/>
                                    </form>
                                    <ReactBootStrap.Button onClick={() => dispatch(addToCart(prod, aantal))}>Voeg Toe</ReactBootStrap.Button>
                                    
                                </MDBUI.MDBCardBody>
                            </MDBUI.MDBCard>
                        ))}
                    </MDBUI.MDBRow>
                </MDBUI.MDBContainer>
            </div>
            <Footer/>
        </>
    )
}

export default HomePagina
