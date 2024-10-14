import React, { useContext} from 'react'
import { CartContext } from '../contexts/ShoppingCartContext';

const items = [
  {
    id: 1,
    name: 'T-shirt',
    price: 10,
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Pants',
    price: 20,
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Shoes',
    price: 30,
    imgUrl: 'https://via.placeholder.com/150'
  }
]

export const Item = ({ name, price, id, imgUrl }) => {
  // console.log('Item', name, price, id, imgUrl);
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { id, name, price, quantity: 1 }];
      }
    });
  };

  //Show quantity of specific item in cart
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  const quantityPerItem = getQuantityById(id);

  const removeItem = (id) => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        if (isItemFound.quantity === 1) {
          // Remove item from cart if quantity is 1
          return currItems.filter((item) => item.id !== id);
        } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        }
      }
      // Return original cart if item not found
      return currItems;
    });
  }

  return (
    <div className='item-box'>
      {
        quantityPerItem > 0 && (
          <div className='item-quantity'>Quantity: {quantityPerItem}</div>
        )
      }
      <img src={imgUrl} alt={name} width='80' height='55'/>
      <div>
        <h3>{name}</h3>
        <div className='item-price'>Price: ${price}</div>

        
      </div>
      { quantityPerItem === 0 ? (
          <button className='item-add-button' onClick={() => addToCart()}>+ Add to cart</button>
        ) : (
          <button className='item-plus-button' onClick={() => addToCart()}>+ Add more</button>
        )}
        {quantityPerItem > 0 && (
          <button className='item-minus-button' onClick={() => removeItem(id)}>- Remove from cart</button>
        )}
    </div>
  )
}
