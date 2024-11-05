import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {
    const { cart, total } = useContext(CartContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between p-2 border-b">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
            <p className="mt-4 font-bold">Total: ${total}</p>
        </div>
    );
}

export default Cart;
