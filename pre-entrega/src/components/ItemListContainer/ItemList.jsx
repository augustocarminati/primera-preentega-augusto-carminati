import React from 'react';

const ItemList = ({products}) => {
    return <div>
        <h2>ItemList</h2>

        <ul>
            {products.map((product) =>(
                <li key={product.id}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.category}</p>
                </li>
            ))}
        </ul>
    </div>;
    };

export default ItemList;