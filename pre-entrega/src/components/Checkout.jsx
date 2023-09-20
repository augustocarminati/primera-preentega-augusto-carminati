import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../utils";
import { createOrder } from "./services";
import Field from './Field';


const Checkout = () => {

    const [formState, setFormState] = useState({
        name: '',
        surname: '',
        age: '',
    });

    const { name, surname, age } = formState;

    const onChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = (name && surname && age)

    const onSubmit = (event) => {
        event.preventDefault();

        if (isFormValid) {
            console.log(`your name is ${name} ${surname} and you have ${age}`);
        }
    }


    const [orderId, setOrderId] = useState(null);

    const [isLoading, setIsLoading] = useState(null);

    const { cart, clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    const handleCheckout = () => {
        const order = {
            buyer: {
                name: "John",
                phone: "123456789",
                email: "john@gmail.com",
            },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };

        setIsLoading(true);
        createOrder(order).then((docRef) => {
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
        });
    };

    return (
        <div>
            <h1>Checkout</h1>

            <h2>Resumen de la compra</h2>

            {orderId && <p>El id de la orden es:{orderId}</p>}
            {!orderId && (
                <>
                    <div>
                        <h3>Formulario de contacto</h3>

                        <form onSubmit={onSubmit}>

                            <Field label="Nombre" name="name" onChange={onChange} />
                            <Field label="Apellido" name="surname" onChange={onChange} />
                            <Field label="Edad" name="age" onChange={onChange} />

                            <button disabled={!isFormValid} type="submit">Agregar formulario</button>

                        </form>
                    </div>

                    <div>
                        <h4>Productos</h4>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <p>{item.title}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio unitario: ${item.price}</p>
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p>Total de la compra:{total}</p>

                    <button onClick={handleCheckout}>Finalizar compra</button>

                    {isLoading && <p>Procesando compra...</p>}
                </>
            )}
        </div>
    );
};


export default Checkout;