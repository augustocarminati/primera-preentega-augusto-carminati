import React from 'react';
import PropTypes from "prop-types";

const ItemDetail = ({item, isLoading}) => {

    if (isLoading) {
        return <h2>Loading</h2>;
    }

    if (!item){
        return <h2>Product not found</h2>;
    }

    return <div>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <p>{item.stock}</p>
        <p>{item.category}</p>
        <p>{item.description}</p>
    </div>;
    };

ItemDetail.PropTypes = {
    item: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
}

    export default ItemDetail;