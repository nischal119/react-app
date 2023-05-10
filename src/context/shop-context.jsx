import React, {createContext,useState} from 'react'
import {PRODUCTS} from "../product"
export const ShopContext =createContext(null);

const getDefaultCart = () =>
{
  let cart = {}
  for (let i=1;i<PRODUCTS.length+1; i++)
  {
    cart[i]=0;
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  const[cartItems ,setCartItems]=useState(getDefaultCart());
  console.log(cartItems);
  const getTotalCartAmount = ()=>
  {
    let totalAmount=0;
    for(const item in cartItems)
    {
      console.log(item);
      if(cartItems[item]>0)
      {
        let itemInfo = PRODUCTS.find((product)=>product.id ===(Number(item)));
        console.log(itemInfo);
        totalAmount += cartItems[item] * Number(itemInfo.price);
        console.log(totalAmount);
        console.log(PRODUCTS.price);
      }
    }
    console.log("Total Amount: ",totalAmount);
    return totalAmount;
  
  }

  const addToCart=(itemId) =>
  {
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}));
  }
  const removeFromCart=(itemId) =>
  {
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}));
  }

  const updateCartItemCount = (newAmount,itemId) =>
  {
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
  }

  const contextVlaue = {cartItems,addToCart,removeFromCart,getTotalCartAmount };
  console.log(cartItems)
  return  <ShopContext.Provider value={contextVlaue}> {props.children} </ShopContext.Provider>
  
}


