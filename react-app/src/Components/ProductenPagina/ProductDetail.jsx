import React, { useEffect, useState}from 'react';
import axios from 'axios';
import Nav from '../Nav';

const ProductDetail = () => {
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProducten] = useState([]);

    const linkPath = window.location.pathname;

      const response = axios({
        url: `http://localhost:4000${linkPath}`,
        method: "GET",
        responseType: "json",
    });

    if(isLoading) {
        return (<p>Loading...</p>)
    }

    console.log(response);
    return (
        <>
        <Nav />
        <p>{product[0].id}</p>
        </>
        
    );
}

export default ProductDetail;
