import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function  ShoppingCart(){

  const [cartArray, setCartArray ] = useState([]); 
  const navigate = useNavigate();
    
  useEffect(() => 
  {
      getCartItems();
  }, []);

  let userId = sessionStorage.getItem("USER_ID");
if(userId === null || userId === undefined)
{
    alert("Please Login before viewing items in Cart");
    navigate("/Login");
    return;
}



  function getCartItems()
  {     
      let userId = sessionStorage.getItem("USER_ID");
      let url = "http://localhost:3500/cart?userId=" + userId; 
      axios.get(url).then( (resData) => 
      {
          setCartArray(resData.data);
      });       
  }

  const removeCartItem = (id) => {
    const updatedCartArray = cartArray.filter(item => item.id !== id);
    setCartArray(updatedCartArray);
};

 function getFinalTotalAmount()
 {
    let finalTotal = 0;
    for(let item of cartArray)
    {
      finalTotal = finalTotal + item.total;
    }
    return finalTotal;
 }


  let resultArray = cartArray.map((item, index) =>  
      <tr key={index}>
          <td>   {index + 1}  </td>
          <td>   {item.productName}  </td>        
          <td>   {item.price}  </td> 
          <td>   {item.quantity}  </td> 
          <td>   {item.total}  </td>        
          <td>   
              <a  href="javascript:void(0);"  onClick={() => removeCartItem(item.id)}>Remove</a>               
          </td>
      </tr>
   );

  return (
      <>  <h3>Your ShoppingCart Items</h3>

          <table align="center" border="2" width="600" cellspacing="0" cellpadding="5">
              <tr>
                  <th>S.No</th>               
                  <th>Product Name</th> 
                  <th>price</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>                         
                  <th></th>
              </tr>
              {resultArray}
              <tr>
                <td align="right" colspan="6">Final Total :  {getFinalTotalAmount()}</td>
              </tr>
          </table>
      </>
  );
}


 export default ShoppingCart; 