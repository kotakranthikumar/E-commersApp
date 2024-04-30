import { useEffect, useState } from "react";
import axios from 'axios';
import './CustomerProductList.css';
import { Link, useParams } from "react-router-dom";
 
function ProductsByCategory() {

    const [productsArray, setProductsArray] = useState([]);
    const {id}  =  useParams();


    useEffect(() => {
        getProductsClick();
    }, []);
	
	
	// http://localhost:3500/products?category=Classic

    function getProductsClick() {
		let strCategory = "Smart";
        let url = " http://localhost:3500/Appleproduct?Categories=Smart" + strCategory;
        axios.get(url).then((resData) => {
            setProductsArray(resData.data);
        });
    }



    let resultArray = productsArray.map((item, index) =>
        <div className="productCard">
            <img src={item.Image} height={100} width="100" />
            <br />
            <span className="prdName">{item.productName}</span>  <br />
            <span className="prdPrice"> ₹ {item.price.toFixed(2)}</span>
          
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

export default ProductsByCategory;