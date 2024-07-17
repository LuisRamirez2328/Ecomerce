import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-xs lg:max-w-sm rounded-lg shadow-lg" src={image} alt={title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">{title}</h1>
            <div className="text-2xl text-red-500 font-semibold mb-4">${price.toFixed(2)}</div>
            <p className="mb-6 text-gray-700 leading-relaxed">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-3 px-6 text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
