import React from "react";
import { NavLink } from "react-router-dom";
import * as MDB from "mdbreact";
import './CSS/Footer.css'

const Footer = () => {
  return (
      <MDB.MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
        <MDB.MDBContainer fluid className="text-center">
          <MDB.MDBRow>
            <MDB.MDBCol md="6" className='footerLinks'>
              <h5 className="title">Contact</h5>
              <ul className='footeritems'>
                  <li>Naam: Alexander Bal</li>
                  <li>studentenNummer: 076847ab</li>
                  <li ><a href="mailto:alexander.bal@student.hogent.be">alexander.bal@student.hogent.be</a></li>
              </ul>
            </MDB.MDBCol>
            <MDB.MDBCol md="6" className='footerRechts'>
              <h5 className="title">Sitemap</h5>
              <ul>
                <li className="list-unstyled"><NavLink to="/">Home</NavLink></li>
                <li className="list-unstyled"><NavLink to="/producten">producten</NavLink></li>
                <li className="list-unstyled"><NavLink to="/winkelmandje">Winkelmandje</NavLink></li>
              </ul>
            </MDB.MDBCol>
          </MDB.MDBRow>
        </MDB.MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDB.MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="#"> skateYard.com </a>
          </MDB.MDBContainer>
        </div>
      </MDB.MDBFooter>    
  );
}

export default Footer;