import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading..</h2>;
    }

    return (
        <div>
            <h2>ItemList</h2>

            {isLoading && <p>Loading</p>}

            {!isLoading && items.length === 0 && <p>No products</p>}

            <div className="row justify-content-center">
                <div className="row row-cols-4">
                    {items.map((item) => (
                        <Link to={`/item/${item.id}`} key={item.id}>
                            <div className="col">
                                <div className="card w-75 h-75 text-center box-shadow rounded mb-4">
                                    <img src={`/img/${item.imageId}`} alt="" className="card-img-top rounded" />
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">Precio: ${item.price}</p>
                                        <p className="card-text">Stock: {item.stock}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;