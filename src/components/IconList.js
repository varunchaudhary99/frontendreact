import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setCurrentProduct from '../actions/setCurrentProduct';
import { addToCart } from '../actions/cartActions';

function IconList({ product }) {
  const dispatch = useDispatch();

  const handleCurrentProduct = () => {
    dispatch(setCurrentProduct(product));
    alert("checked item!")
  };

  const handleShoppingBagProduct = () => {
    dispatch(addToCart({ id: product.id, title: product.name, price: product.price,image: product.image ,quantity:1}));
    alert('Added to cart!');
  };

  return (
    <ul className="hover-container">
      <Link onClick={handleCurrentProduct} to="/details">
        <li className="icon">
          <span className="fas fa-expand-arrows-alt"></span>
        </li>
      </Link>

      <Link to="#">
        <li className="icon">
          <span className="far fa-heart"></span>
        </li>
      </Link>

      <Link onClick={handleShoppingBagProduct} to="/CartPage">
        <li className="icon">
          <span className="fas fa-shopping-bag"></span>
        </li>
      </Link>
    </ul>
  );
}

export default IconList;
