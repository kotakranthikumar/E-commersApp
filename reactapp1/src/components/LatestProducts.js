import { useEffect, useState } from "react";
import axios from 'axios';
import './CustomerProductList.css';
import { Link } from "react-router-dom";
 

function LatestProducts() {

    const [latestProducts, setLatestProducts] = useState([]);


    useEffect(() => {
        getProductsClick();
    }, []);

    function getProductsClick() {
        let url = "http://localhost:3500/Appleproduct?_sort=id&_order=desc&_limit=3";
        axios.get(url).then((resData) => {
            setLatestProducts(resData.data);
        });
    }



    let resultArray = latestProducts.map((item, index) =>
        
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

export default LatestProducts;