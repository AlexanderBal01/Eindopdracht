import React, { useEffect } from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducten } from '../../Store/producten/productenSlice';
import "./CSS/producten.css";
import * as MDBUI from 'mdb-react-ui-kit';
import * as MDB from "mdbreact";

const ProductenMain = () => {
    const dispatch = useDispatch();

    const productenState = useSelector(state => state.producten);

    useEffect(() => {
        dispatch(fetchProducten());

    }, []);

    return (
        <>
            <Nav />
            <div flex className='alleproducten'>
                <MDB.MDBTypography colorText='light-blue' tag='h1' variant="h1">alle Producten</MDB.MDBTypography>
                <MDBUI.MDBContainer>
                    <MDBUI.MDBRow className='d-flex justify-content-center'>
                        {productenState.data.map((prod) => (
                            <Product key={prod.id} productData={prod}/>
                        ))}
                    </MDBUI.MDBRow>
                </MDBUI.MDBContainer>
            </div>
            <Footer />
        </>
    )
}

export default ProductenMain;
