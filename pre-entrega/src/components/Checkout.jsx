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
                        <div className="row">
                            {cart.map((item) => (
                                <div className="card w-25 text-center box-shadow rounded" key={item.id}>
                                    <img src={`/img/${item.imageId}`} alt="product" className="card-img-top" />
                                    <div className="card-body">
                                        <p>{item.description}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio unitario: ${item.price}</p>
                                        <p>Subtotal: ${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p>Total de la compra:{total}</p>

                    <button className="btn btn-primary btn-sm" onClick={handleCheckout}>Finalizar compra</button>

                    {isLoading && <p>Procesando compra...</p>}
                </>
            )}
        </div>
    );
};


export default Checkout;