import React from 'react';
import storeItems from '../data/products.json';
// import { Items } from './Item';
import { Item } from './Items';

export const ItemList = () => {
  return (
    <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};


{/* <li key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button>Add to cart</button>
            </div>
          </li> */}