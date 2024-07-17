import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { total, cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para procesar el pago o enviar los datos
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
      <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Detalles del Pedido</h3>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-lg font-semibold mb-6">
          Total: ${total.toFixed(2)}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">Dirección</label>
            <input
              type="text"
              id="address"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="card" className="block text-gray-700 mb-2">Número de Tarjeta</label>
              <input
                type="text"
                id="card"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="expiry" className="block text-gray-700 mb-2">Fecha de Expiración</label>
              <input
                type="text"
                id="expiry"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="cvc" className="block text-gray-700 mb-2">CVC</label>
            <input
              type="text"
              id="cvc"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300">
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
