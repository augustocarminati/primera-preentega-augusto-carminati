
import {doc, getDoc, collection, getDocs, query, where, getFirestore} from "firebase/firestore/lite";

//const products = [
//    {id: 1, name: "remera", description: "una remera", stock: 10, category: "shirts", price: 10000},
//    {id: 2, name: "remera", description: "una remera", stock: 9, category: "shirts", price: 10000}, 
//    {id: 3, name: "buzo", description: "un buzo", stock: 10, category: "coverall", price: 20000},
//    {id: 4, name: "buzo", description: "un buzo", stock: 9, category: "coverall", price: 20000},
//   {id: 5, name: "campera", description: "una campera", stock: 10, category: "jacket", price: 35000},
//    {id: 6, name: "campera", description: "una campera", stock: 9, category: "jacket", price: 35000},
//    {id: 7, name: "conjunto", description: "un conjunto", stock: 10, category: "set", price: 45000},
//    {id: 8, name: "conjunto", description: "un conjunto", stock: 9, category: "set", price: 45000},
//];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemDoc = doc(db, "items", id);

        getDoc(itemDoc)
            .then((doc) =>{
                if(doc.exists()) {
                    resolve({ id: doc.id, ...doc.data()});
                } else{
                    resolve(null);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemCollection = collection(db, "ITEMS");

        let q;
        if (categoryId) {
            q = query(itemCollection, where("categoryId", "=", categoryId));
        } else {
            q = query(itemCollection);
        }

        getDocs(q)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                });
                resolve(products);
            })
            .catch((error) => {
                reject(error);
            })
    });

};