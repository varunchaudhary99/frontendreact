

let ProductDetails = ({product}) => {
  console.log("====================")
  console.log(product)
  console.log("==========================")
  return (
    <section id="product-info">

    <div className="item-image-parent">
        <div className="item-list-vertical">
            <div className="thumb-box">
            <img src={product.image} alt="thumbnail" style={{width:'100', height:200}}/>
            </div>
            <div className="thumb-box">
               <img src={product.image} alt="thumbnail" style={{width:'50', height:50}}/>
            </div>

        </div>
        
    </div>

    <div className="item-info-parent">
        <div className="main-info">
            <h4>{product.title}</h4>
            <div className="star-rating">
                <span>★★★★</span>★            
            </div>
            <p>Price: <span id="price">₹ {product.price}</span></p>
        </div>
        
        <div className="select-items">
            
            <div className="change-color">
                <label><b>Colour:</b> Black</label><br/>
            </div>
            
            <div className="change-size">
                <label><b>Size:</b></label><br/>
                <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>2XL</option>
                </select>
            </div>

            <div className="description">
              <p>{product.description}</p>
                <ul>
                    <li>Care Instructions: Machine Wash</li>
                    <li>Fit Type: classNameic Fit</li>
                    <li>Color name: Black-White</li>
                    <li>Material: Cotton</li>
                    <li>Pattern: Solid</li>
                </ul>
            </div>
        </div>
      
    </div>
</section>
  )
}

export default ProductDetails