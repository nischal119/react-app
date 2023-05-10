import React from 'react'
import {PRODUCTS} from "../../product";
import { Product } from './product';
import './shop.css';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Someone's Shop</h1>
      </div>
      <div className='products'>
      {PRODUCTS.map ((product) =>
       <Product key={product.id} data={product}/>)}
      </div>
    </div>
  )
}


