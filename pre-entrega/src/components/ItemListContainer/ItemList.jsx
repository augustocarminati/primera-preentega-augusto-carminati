import React from 'react';
import propTypes from "prop-types";

const ItemList = ({products, isLoading}) => {
    return(
        <div>
            <h2>ItemList</h2>

            {isLoading && <p>Loading</p>}

            {!isLoading && products.length === 0 && <p>No products</p>}

            <div className="row">
                {products.map((product) =>(
                    <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="card box-shadow rounded mb-4">
                            <img src="" alt="" className="card-img-top rounded"/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h5 className="card-title">{product.price}</h5>
                                <h5 className="card-title">{product.category}</h5>
                                <h5 className="card-title">{product.stock}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>;
        </div>
    );
};

ItemList.propTypes = {
    products: propTypes.array.isRequired,
};

export default ItemList;