import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
// import { useDispatch } from 'react-redux'
// import  addToCart  from '../actions/addtoCart' // update path to your action

function ProductSection() {
  const [products, setProducts] = useState([])
 // const dispatch = useDispatch()

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    // dispatch(addToCart(data))
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="container bg-white">
      <div className="row">
        {products.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
