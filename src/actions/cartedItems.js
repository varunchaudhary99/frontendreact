import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function CartDetails(){
    const cartItems = useSelector(state => state.cart.cartItems);
    // const cartCounter = useSelector(state => state.cart.cartCounter);
    // const totalPrice = useSelector(state => state.cart.totalPrice);
    // const deliveryCharges = useSelector(state => state.cart.deliveryCharges);
    //  const taxes = useSelector(state => state.cart.taxes);
    //   const grandTotal = useSelector(state => state.cart.grandTotal);

      return (
        <div>
        {cartItems.length? 
       <div className="container"> 
   <h1>Shopping Cart</h1>
   <div id="alerts"></div>
 {cartItems.map(item =>( 
<div className="productcont">
       
        <div className="product">
          <img src={item.image} style={{width:"40px", height:"80"}}></img>
            <h3 className="productname">{item.title}</h3>
            <p>Product description excerpt...</p>
            <p className="price">Rs{item.price}</p>
            <button className="addtocart">Add To Cart</button>
        </div>
        </div>))}
        <div className="cart-container">
          <h2>Cart</h2>
          <table>
            <thead>
              <tr>
              <th><strong>Product</strong></th>
              <th><strong>Price</strong></th>
            </tr>
            </thead>
            <tbody id="carttable">
            </tbody>
          </table>
          <hr/>
          <table id="carttotals">
            <tr>
              <td><strong>Items</strong></td>
              <td><strong>{cartItems.totalPrice}</strong></td>
            </tr>
            <tr>
              <td>x <span id="itemsquantity">{cartItems.price}</span></td>
             
              <td>$<span id="total">{cartItems.grandTotal}</span></td>
            </tr></table>

            
          <div className="cart-buttons">  
            <button id="emptycart">Empty Cart</button>
            <button id="checkout">Checkout</button>
          </div>
        </div>
</div>
:<h1 > No Items in Cart </h1>}
</div>

)}
export default CartDetails