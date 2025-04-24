import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
// import { useDispatch } from 'react-redux'
// import  addToCart  from '../actions/addtoCart' // update path to your action

function ProductSection() {
  const [products, setProducts] = useState([])
 // const dispatch = useDispatch()

  const getProducts = async () => {
    try { 
      const response = await fetch('http://localhost:3001/api/products')
      const data = await response.json()
      setProducts(data)
      console.log(data)
    // dispatch(addToCart(data))
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])



  const uniqueProducts = Array.from(
    new Map(products.map(item => [item.id || item.title, item])).values())

  return (
    <div className="container bg-white">
      <div className="row">
      {uniqueProducts.map((product) => (
          <ProductItems key={product.id || product.title} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
