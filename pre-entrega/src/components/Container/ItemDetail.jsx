import React from 'react';
import PropTypes from "prop-types";

const ItemDetail = ({item, isLoading, addItem}) => {

    if (isLoading) {
        return <h2>Loading</h2>;
    }

    if (!item){
        return <h2>Product not found</h2>;
    }

    return (
        <div className="row justify-content-center">
        <div className="card w-25 h-75 text-center box-shadow rounded mb-4 ">
            <img src={`/img/${item.imageId}`} alt="product" className="card-img-top"/>
            <div className="card-body"> 
            <p>Precio: ${item.price}</p>
            <p>Stock: {item.stock}</p>
            <p>Categoria: {item.categoryId}</p>
            <p>{item.description}</p>
            <button onClick={() => addItem(item,1)} className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
}

    export default ItemDetail;