
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../cart/slicecart';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
  <div>
      {cartItems.length ? (
  <div className="container"> 
    <h1>Shopping Cart</h1>
    {cartItems.map((item, index) => (
  <div className="productcont" key={item.id || index}>
    <div className="product">
      <img
        src={item.image || "/placeholder.jpg"}
        alt={item.title}
        style={{ width: "40px", height: "80px" }}
      />
      <h3 className="productname">{item.title}</h3>
      <p>Product description excerpt...</p>
      <p className="price">Rs {item.price}</p>
      <p>Qty: {item.quantity}</p>
      <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  </div>
))}
    <div className="cart-container">
      <h2>Cart Summary</h2>
      <p><strong>Total:</strong> Rs {totalPrice.toFixed(2)}</p>
      <div className="cart-buttons">  
        <button onClick={() => dispatch(clearCart())}>Empty Cart</button>
        <button id="checkout">Checkout</button>
      </div>
    </div>
  </div>
) : (
  <h1>No Items in Cart</h1>
)}
</div>
  );
};

export default CartPage;
