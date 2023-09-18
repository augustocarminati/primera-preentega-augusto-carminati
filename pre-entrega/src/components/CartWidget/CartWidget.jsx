import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const quantity = getCartQuantity(cart);

    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantity > 0 ? quantity : ""}
                <span className="visually-hidden">products en cart</span>
                </span>
            </button>
        </div>
    )

}

export default CartWidget;