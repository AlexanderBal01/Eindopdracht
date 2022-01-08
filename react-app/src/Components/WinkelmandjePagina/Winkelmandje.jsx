import React from 'react';
import * as MDBUI from 'mdb-react-ui-kit';
import * as MDB from "mdbreact";
import './CSS/winkelmandje.css'
import Item from './Item';
import Nav from '../Nav';
import Footer from '../Footer';

const Winkelmandje = () => {
    return (
        <>
            <Nav />
            <div flex className='alleproducten'>
                <MDBUI.MDBContainer>
                    <MDBUI.MDBRow className='d-flex justify-content-center'>
                        <Item/>
                    </MDBUI.MDBRow>
                </MDBUI.MDBContainer>
            </div>
            <Footer />
        </>
        
    )
}

export default Winkelmandje
