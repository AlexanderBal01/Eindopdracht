import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducten } from '../Store/producten/productenSlice';
import * as MDBUI from 'mdb-react-ui-kit';
import * as ReactBootStrap from "react-bootstrap";
import { addToCart } from '../Store/winkelmandje/cartAction';

const ProductenPagina = () => {
    const dispatch = useDispatch();

    const productenState = useSelector(state => state.producten);

    const [aantal, setAantal] = useState();

    useEffect(() => {
        dispatch(fetchProducten());

    }, []);

    return (

        <div flex>
            <MDBUI.MDBTypography className='text-primary text-center' tag='h1' variant="h1">alle Producten</MDBUI.MDBTypography>
            <MDBUI.MDBContainer>
                <MDBUI.MDBRow className='d-flex justify-content-center'>
                    {productenState.data.map((prod) => (
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
    )
}

export default ProductenPagina
