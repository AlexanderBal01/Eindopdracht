import React from 'react';
import { useFormik } from 'formik';
import * as MDBUI from 'mdb-react-ui-kit';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import './CSS/checkout.css';
import axios from 'axios';

const schema = Yup.object().shape({
    voorNaam: Yup.string().required("voornaam veld is verplicht"),
    achterNaam: Yup.string().required("achternaam veld is verplicht"),
    straat: Yup.string().required("straat veld is verplicht"),
    huisnummer: Yup.string().required("huisnummer veld is verplicht"),
    postcode: Yup.number().positive().required("postcode veld is verplicht"),
    gemeente: Yup.string().required("gemeente veld is verplicht"),
    email: Yup.string().email().required("email veld is verplicht"),
    telefoon: Yup.string().required("telefoon veld is verplicht"),
})

const CheckoutPagina = () => {
    const cartState = useSelector(state => state.cart);

    const { cartItems } = cartState;

    const formik = useFormik({
        initialValues: {
            voorNaam: '',
            achterNaam: '',
            straat: '',
            huisnummer: '',
            postcode: '',
            gemeente: '',
            email: '',
            telefoon: '',
        },
        onSubmit: (values) => {
            console.log(values);
            const data = {
                klant: values,
                producten: cartItems,
            }
            axios.post('http://localhost:4000/order', data);
        }, 
        validationSchema: schema,
    })

    return (
        <div >
            <MDBUI.MDBTypography className='text-primary text-center' tag='h1' variant="h1">Uw gegevens</MDBUI.MDBTypography>
            <MDBUI.MDBContainer>
                <form onSubmit={formik.handleSubmit}>
                    <MDBUI.MDBRow>
                        <MDBUI.MDBCol md="6" className='links'>
                            <label htmlFor="voorNaam">Voornaam:&nbsp; </label>
                            <input id='voorNaam' name='voorNaam' value={formik.values.voorNaam} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.voorNaam && <p className='error'>{formik.errors.voorNaam}</p>}
                        </MDBUI.MDBCol>
                        <MDBUI.MDBCol md='6' className='rechts'>
                            <label htmlFor="achterNaam">Achternaam:&nbsp; </label>
                            <input id='achterNaam' name='achterNaam' value={formik.values.achterNaam} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.achterNaam && <p className='error'>{formik.errors.achterNaam}</p>}
                        </MDBUI.MDBCol>
                    </MDBUI.MDBRow>
                
                    <br></br>

                    <MDBUI.MDBRow>
                        <MDBUI.MDBCol md="6" className='links'>
                            <label htmlFor="straat">straat:&nbsp; </label>
                            <input id='straat' name='straat' value={formik.values.straat} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.straat && <p className='error'>{formik.errors.straat}</p>}
                        </MDBUI.MDBCol>
                        <MDBUI.MDBCol md='6' className='rechts'>
                            <label htmlFor="huisnummer">huisnummer:&nbsp; </label>
                            <input id='huisnummer' name='huisnummer' value={formik.values.huisnummer} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.huisnummer && <p className='error'>{formik.errors.huisnummer}</p>}
                        </MDBUI.MDBCol>
                    </MDBUI.MDBRow>

                    <br></br>

                    <MDBUI.MDBRow>
                        <MDBUI.MDBCol md="6" className='links'>
                            <label htmlFor="postcode">postcode:&nbsp; </label>
                            <input id='postcode' name='postcode' value={formik.values.postcode} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.postcode && <p className='error'>{formik.errors.postcode}</p>}
                        </MDBUI.MDBCol>
                        <MDBUI.MDBCol md='6' className='rechts'>
                            <label htmlFor="gemeente">gemeente:&nbsp; </label>
                            <input id='gemeente' name='gemeente' value={formik.values.gemeente} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.gemeente && <p className='error'>{formik.errors.gemeente}</p>}
                        </MDBUI.MDBCol>
                    </MDBUI.MDBRow>

                    <br></br>

                    <MDBUI.MDBRow>
                        <MDBUI.MDBCol md="6" className='links'>
                            <label htmlFor="email">email:&nbsp; </label>
                            <input id='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.email && <p className='error'>{formik.errors.email}</p>}
                        </MDBUI.MDBCol>
                        <MDBUI.MDBCol md='6' className='rechts'>
                            <label htmlFor="telefoon">telefoon:&nbsp; </label>
                            <input id='telefoon' name='telefoon' value={formik.values.telefoon} onChange={formik.handleChange}/>
                            {formik.errors && formik.errors.telefoon && <p className='error'>{formik.errors.telefoon}</p>}
                        </MDBUI.MDBCol>
                    </MDBUI.MDBRow>
                    <br></br>
                    <br></br>

                    <ReactBootStrap.Button type='submit'>Submit</ReactBootStrap.Button>
                </form>
            </MDBUI.MDBContainer>
        </div>
    )
}

export default CheckoutPagina
