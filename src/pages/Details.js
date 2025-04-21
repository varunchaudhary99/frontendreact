import React, { startTransition } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";

function Details() {
    // const product = useSelector((state) => state.currentProduct?.product);
    const product = useSelector((state) => state.currentProduct?.product || null);

  
    if (!product) {
      return <div>Loading product...</div>; // Or redirect, or show a fallback
    }
    return (
        <div>
        <div className='container-fluid'>
            <Navbar/>
        </div>
        <div className='container'>
            <ProductDetails product={product}/>
        </div>
        </div>
    )
}
export default Details