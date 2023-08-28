import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getProduct} from "../services";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {detailId} = useParams();

    useEffect(() => {
        getProduct(detailId).then((response) => {
            setItem(response);
    }).catch((error) => {
        setItem(null);
    }).finally(() => {
        setIsLoading(false);
    });
    },[detailId]);

    return <ItemDetail item={item} isLoading={isLoading}/>;
};

export default ItemDetailContainer;