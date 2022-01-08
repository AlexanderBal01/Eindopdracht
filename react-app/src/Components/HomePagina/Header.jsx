import React from "react";
import {Link} from 'react-scroll';
import * as MDB from "mdbreact";
import "./CSS/index.css";

const Header = () => {
    return (
        <MDB.MDBBox fluid className="header">
            <MDB.MDBBox className="overlay">
                <MDB.MDBBox className="description">
                <MDB.MDBTypography colorText='light-blue' tag='h1' variant="h1">Welkom bij SkateYard</MDB.MDBTypography>
                <MDB.MDBTypography colorText='white' tag='h4' variant="h4">De beste skateboards vindt je bij ons!</MDB.MDBTypography>
                <Link to="aanbevolen" spy={true} smooth={true}>
                    <MDB.MDBIcon className="white-text icon-padding" icon="angle-double-down" size="4x"/>
                </Link>
                </MDB.MDBBox>
            </MDB.MDBBox>
        </MDB.MDBBox>
    )
}

export default Header;