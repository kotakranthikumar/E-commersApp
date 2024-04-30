import { useEffect, useState } from "react";
import axios from 'axios';
 
function AdminProductList() { 
    
    const [productsArray, setProductsArray ] = useState([]); 
    

    useEffect(() => 
    {
        getProductsClick();
    }, []);

    function getProductsClick()
    {     
        let url = " http://localhost:3500/Appleproduct/"; 
        axios.get(url).then( (resData) => 
        {
            setProductsArray(resData.data);
        });       
    }

   

 
    let resultArray = productsArray.map((item, index) =>  
        <tr key={index}>
            <td>   {item.id}  </td>
            <td>   {item.productName}  </td>
            <td>   {item.category}  </td>
            <td>   {item.description}  </td> 
            <td>   {item.price}  </td> 
            <td> <img width="100" src={(item.Image)}  />  </td> 
            <td>                  
            </td>
        </tr>
     );

    return (
        <>
            <input type="button" value="Get AppleProduct" onClick={getProductsClick} />
          
            <hr/>

            <table align="center" border="2" width="900" cellspacing="0" cellpadding="4">
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>price</th>
                    <th>Image</th>                   
                    <th></th>
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default AdminProductList;