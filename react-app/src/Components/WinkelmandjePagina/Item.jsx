import React from 'react';
import * as MDBUI from 'mdb-react-ui-kit';
import * as ReactBootStrap from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Store/winkelmandje/cartAction';
import * as MDB from "mdbreact";

const Item = () => {
    const cartState = useSelector(state => state.cart);
    console.log(cartState);

    const dispatch = useDispatch();

    if (cartState.length === 0) {
        return (
            <MDB.MDBTypography colorText='light-blue' tag='h1' variant="h1">Winkelmandje is leeg</MDB.MDBTypography>
        );
    }

    
    return (
        cartState.cartItems.map((prod) => (

            <>
                <MDBUI.MDBCard className='product' style={{ maxWidth: '22rem' }}>
                    <MDBUI.MDBCardImage src={prod[2]} position='top'/>
                    <MDBUI.MDBCardBody>
                        <MDBUI.MDBCardTitle>{prod[1]}</MDBUI.MDBCardTitle>
                        <MDBUI.MDBCardTitle>€ {prod[3]}</MDBUI.MDBCardTitle>
                        <MDBUI.MDBCardText>

                        </MDBUI.MDBCardText>
                        <ReactBootStrap.Button onClick={() => dispatch(removeFromCart(prod[0]))}>Verwijderen</ReactBootStrap.Button>
                    </MDBUI.MDBCardBody>
                </MDBUI.MDBCard>
            </>
        ))
    )   

          
                
}

export default Item

