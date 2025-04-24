import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id: product.id, title: product.name, price: product.price }));
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard