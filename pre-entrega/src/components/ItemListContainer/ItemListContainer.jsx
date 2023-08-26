import { useState, useEffect} from "react";
import ItemList from "./ItemList";

const products= [
    {id: 1, name: "remera", description: "una remera", stock: 10, category: "shirts"},
    {id: 2, name: "remera", description: "una remera", stock: 9, category: "shirts"},
    {id: 3, name: "buzo", description: "un buzo", stock: 10, category: "coverall"},
    {id: 4, name: "buzo", description: "un buzo", stock: 9, category: "coverall"},
    {id: 5, name: "campera", description: "una campera", stock: 10, category: "jacket"},
    {id: 6, name: "campera", description: "una campera", stock: 9, category: "jacket"},
    {id: 7, name: "conjunto", description: "un conjunto", stock: 10, category: "set"},
    {id: 8, name: "conjunto", description: "un conjunto", stock: 9, category: "set"},
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
    const operacionExitosa = true;

    setTimeout(() => {
        if (operacionExitosa) {
            resolve({products : products,
            });
        } else {
            reject({mensaje: "La operacion no fue exitosa"});
        }
}, 2000);
});
};

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((result) =>{
            setProducts(result.products)
        })       
    }, [])

    return 
        <ItemList products={products}/>;
};

export  default ItemListContainer;