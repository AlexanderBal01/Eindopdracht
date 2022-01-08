import React from 'react';
import * as MDBUI from 'mdb-react-ui-kit';
import * as ReactBootStrap from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/winkelmandje/cartAction';

const AanbevolenProducten = ({productData}) => {
    const dispatch = useDispatch();

    return (
        <>
            <MDBUI.MDBCard className='product' style={{ maxWidth: '22rem' }}>
                <MDBUI.MDBCardImage src={productData.afbeelding} position='top'/>
                <MDBUI.MDBCardBody>
                    <MDBUI.MDBCardTitle>{productData.productnaam}</MDBUI.MDBCardTitle>
                    <MDBUI.MDBCardTitle>€ {productData.prijs}</MDBUI.MDBCardTitle>
                    <MDBUI.MDBCardText>
                        {productData.beschrijving}
                    </MDBUI.MDBCardText>
                    <ReactBootStrap.Button onClick={() => dispatch(addToCart(productData, 1))}>Voeg toe</ReactBootStrap.Button>
                </MDBUI.MDBCardBody>
            </MDBUI.MDBCard>
        </>
        
    );
}

export default AanbevolenProducten;