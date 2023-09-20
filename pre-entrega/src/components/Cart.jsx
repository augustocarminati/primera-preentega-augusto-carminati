import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
    const {cart, addItem, removeItem, clear } = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>

            <p>
                <button onClick={clear}>Vaciar Carrito</button>
            </p>

            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        ID: {item.id}
                        Cantidad: {item.quantity}
                        Precio: ${item.price}
                        <br />
                        <button onClick={() => addItem(item.id,1)}>Agregar</button>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;