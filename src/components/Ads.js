import React from 'react'
import { Link } from 'react-router-dom'
function Ads(props) {
  return (
    <div className='col-md-3 mt-3'>
      <div className="product-card">
    <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg"  className="card-img-top width w-100" alt="" style ={{width : "100%"}}/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
  </div>
  )
}

export default Ads