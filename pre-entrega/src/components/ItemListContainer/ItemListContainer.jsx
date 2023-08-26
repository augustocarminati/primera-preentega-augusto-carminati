import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getProducts} from "../services.js";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams([]);

    useEffect(() => {
        setIsLoading(true);

        getProducts(id).then((response) => {
            setItems(response);
            setIsLoading(false);
        })
    },[id]);

    return 
        <ItemList items={items} isLoading={isLoading}/>;

};

export  default ItemListContainer;