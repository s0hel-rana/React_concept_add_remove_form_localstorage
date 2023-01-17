import React from 'react';
import { addToDB, deleteShoppingCart, removeFormDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = props => {
    const {id, name, price} = props.cosmetic;

    const addToCart = id =>{
        addToDB(id);
    }
    const removeFormCart = id =>{
          removeFormDb(id);
    }
    const allRemoveFormCart = () =>{
        deleteShoppingCart()
    }
    
    return (
        <div className='product'>
           <h2>Id : {id}</h2>
           <h3>Buy this : {name}</h3>
           <p>Only for : ${price}</p>
           <button onClick={() => addToCart(id)}>Add to Cart</button>
           <button onClick={() =>removeFormCart(id)}>Remove</button>
           <button onClick={() =>allRemoveFormCart()}>All Remove</button>
        </div>
    );
};

export default Cosmetic;