//local storage data manage
const addToDB = id =>{
    let shoppingCart = {};
    //get the shopping card
    const storageCart = localStorage.getItem('shopping-cart');
    if(storageCart){
        shoppingCart = JSON.parse(storageCart);
    }

    //add the quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id,newQuantity); 
    }else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}

const removeFormDb = id =>{
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        const shoppingCart = JSON.parse(storeCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}
export{addToDB, removeFormDb,deleteShoppingCart}