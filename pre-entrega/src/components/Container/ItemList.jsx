import propTypes from "prop-types";
import {Link} from "react-router-dom";

const ItemList = ({items, isLoading}) => {
    if(isLoading){
        return <h2>Loading..</h2>;
    }

    return(
        <div>
            <h2>ItemList</h2>

            {isLoading && <p>Loading</p>}

            {!isLoading && items.length === 0 && <p>No products</p>}

            <div className="row">
                {items.map((item) =>(
                    <Link to={`/item/${product.id}`}>
                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                        <div className="card box-shadow rounded mb-4">
                            <img src="" alt="" className="card-img-top rounded"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h5 className="card-title">{item.price}</h5>
                                <h5 className="card-title">{item.categoryId}</h5>
                                <h5 className="card-title">{item.stock}</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>;
        </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;