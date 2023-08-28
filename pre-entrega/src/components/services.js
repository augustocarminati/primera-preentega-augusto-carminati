const products = [
    {id: 1, name: "remera", description: "una remera", stock: 10, category: "shirts", price: 10000},
    {id: 2, name: "remera", description: "una remera", stock: 9, category: "shirts", price: 10000}, 
    {id: 3, name: "buzo", description: "un buzo", stock: 10, category: "coverall", price: 20000},
    {id: 4, name: "buzo", description: "un buzo", stock: 9, category: "coverall", price: 20000},
    {id: 5, name: "campera", description: "una campera", stock: 10, category: "jacket", price: 35000},
    {id: 6, name: "campera", description: "una campera", stock: 9, category: "jacket", price: 35000},
    {id: 7, name: "conjunto", description: "un conjunto", stock: 10, category: "set", price: 45000},
    {id: 8, name: "conjunto", description: "un conjunto", stock: 9, category: "set", price: 45000},
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id == id)

            if (product){
                resolve(product)
            } else {
                reject("No existe el producto");
            }

    }, 1000);
    });
};

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsFiltered = category ? products.filter(product => product.category == category) : products;

            resolve(productsFiltered);

        }, 1000);
    });

};