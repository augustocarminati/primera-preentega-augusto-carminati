import { useState, useEffect} from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    return 
        <ItemList products={products} isLoading={isLoading}/>;

};

export  default ItemListContainer;