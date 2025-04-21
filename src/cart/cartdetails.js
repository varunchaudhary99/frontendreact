import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CartPage from "./cartpage";


function CartDetails() {
    const product = useSelector((state) => state.currentProduct.product);
  
    return (
      <div>
        <div className="container-fluid">
          <Navbar />
        </div>
        <div className="container">
          <CartPage product={product} />
        </div>
      </div>
    );
  }
  
  export default CartDetails;