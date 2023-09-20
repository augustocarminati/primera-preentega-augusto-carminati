import React from 'react';
import PropTypes from "prop-types";

const ItemDetail = ({item, isLoading, addItem}) => {

    if (isLoading) {
        return <h2>Loading</h2>;
    }

    if (!item){
        return <h2>Product not found</h2>;
    }

    return (<div>
        <h2>{item.title}</h2>
        <p>Precio: ${item.price}</p>
        <p>Stock: {item.stock}</p>
        <p>Categoria: {item.categoryId}</p>
        <p>{item.description}</p>
        <button onClick={() => addItem(item,1)}>Agregar al carrito</button>
    </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
}

    export default ItemDetail;