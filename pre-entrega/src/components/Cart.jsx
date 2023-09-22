import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, addItem, removeItem, clear } = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>

            <div className="row justify-content-center">

                {cart.map((item) => (
                    <div className="card w-25 text-center box-shadow rounded" key={item.id}>
                        <img src={`/img/${item.imageId}`} alt="product" className="card-img-top" />
                        <div className="card-body">
                            <p>Precio: ${item.price}</p>
                            <p>Stock: {item.stock}</p>
                            <p>Categoria: {item.categoryId}</p>
                            <p>{item.description}</p>
                            <br />
                            <button className="btn btn-primary btn-sm" onClick={() => addItem(item.id, 1)}>Agregar</button>
                            <button className="btn btn-primary btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="d-grid gap-2 col-2 mx-auto">
                <button className="btn btn-primary btn-sm" onClick={clear}>Vaciar Carrito</button>
                <br />
                <Link to="/checkout">Ir a finalizar compra</Link>
            </div>

        </div>
    );
};

export default Cart;