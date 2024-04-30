import { useEffect, useState } from "react";
import axios from 'axios';
import './CustomerProductList.css';
import { Link } from "react-router-dom";
 
function CustomerProductList() {

    const [productsArray, setProductsArray] = useState([]);


    useEffect(() => {
        getProductsClick();
    }, []);

    function getProductsClick() {
        let url = " http://localhost:3500/Appleproduct/";
        axios.get(url).then((resData) => {
            setProductsArray(resData.data);
        });
    }



    let resultArray = productsArray.map((item, index) => 
        <div className="productCard">
            <img src={item.Image} height={100} width="100" />
            <br />
            <span className="prdName">{item.productName}</span>  <br />
            <span className="prdPrice"> ₹ {parseFloat(item.price).toFixed(2)}</span>
            <br />
            <Link to={"/ProductDetails/" +  item.id}>View Details</Link>
        </div>
    );

    return (
        <>
            {resultArray}
        </>
    );
}

export default CustomerProductList;