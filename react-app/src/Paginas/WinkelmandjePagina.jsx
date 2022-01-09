import React from 'react';
import * as MDBUI from 'mdb-react-ui-kit';
import * as ReactBootStrap from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Store/winkelmandje/cartAction';
import './CSS/winkelmandje.css'
import { NavLink } from 'react-router-dom';

const WinkelmandjePagina = () => {
    const cartState = useSelector(state => state.cart);

    const { cartItems } = cartState;

    const dispatch = useDispatch();

    const getCartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () =>{
        return cartItems.reduce((prijs, item) => (item.prijs * item.qty) + prijs, 0);
    };

    if (cartItems.length === 0) {
        return (
            <MDBUI.MDBTypography className='text-primary text-center' tag='h1' variant="h1">Winkelmandje is leeg</MDBUI.MDBTypography>
        );
    }

    return (
        <div>
            <MDBUI.MDBTypography className='text-primary text-center' tag='h1' variant="h1">Winkelmandje</MDBUI.MDBTypography>
                <MDBUI.MDBContainer>
                    <MDBUI.MDBRow className='d-flex justify-content-center'>
                    {cartItems.map((prod) => (
                        <MDBUI.MDBCard className='product' style={{ maxWidth: '22rem' }}>
                            <MDBUI.MDBCardImage src={prod.imageUrl} position='top'/>
                            <MDBUI.MDBCardBody>
                                <MDBUI.MDBCardTitle>{prod.naam}</MDBUI.MDBCardTitle>
                                <MDBUI.MDBCardTitle>Aantal: {prod.qty}</MDBUI.MDBCardTitle>
                                <MDBUI.MDBCardTitle>€ {(prod.qty*prod.prijs).toFixed(2)}</MDBUI.MDBCardTitle>
                                <ReactBootStrap.Button onClick={() => dispatch(removeFromCart(prod.product))}>Verwijderen</ReactBootStrap.Button>
                            </MDBUI.MDBCardBody>
                        </MDBUI.MDBCard>
                    ))}
                    </MDBUI.MDBRow>
                </MDBUI.MDBContainer>
                <MDBUI.MDBContainer>
                    <MDBUI.MDBRow className='justify-content-center'>
                        <MDBUI.MDBTypography className='text-primary text-center' tag='h2' variant="h2">Aantalproducten: {getCartCount()}</MDBUI.MDBTypography>
                        <MDBUI.MDBTypography className='text-primary text-center' tag='h2' variant="h2">Totaalprijs: € {getCartSubTotal().toFixed(2)}</MDBUI.MDBTypography>
                        <NavLink className='link' to='/checkout'><ReactBootStrap.Button>CheckOut</ReactBootStrap.Button></NavLink>
                    </MDBUI.MDBRow>
                </MDBUI.MDBContainer>
                
        </div>
    )
}

export default WinkelmandjePagina
