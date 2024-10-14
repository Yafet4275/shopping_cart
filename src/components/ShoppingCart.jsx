import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/ShoppingCartContext';
import { Button } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/js/mdb.min.js';


export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />
                      {/* Map through cart items */}
                      {cart.map((item, index) => (
                        <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={item.image} className="img-fluid rounded-3" alt={item.name} />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{item.category}</h6>
                            <h6 className="mb-0">{item.name}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleQuantityChange(item, item.quantity - 1)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">${item.price}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted" onClick={() => handleRemoveItem(item)}>
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>
                      ))}
                      <hr className="my-4" />
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Items {cart.length}</h5>
                        <h5>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h5>
                      </div>
                      <h5 className="text-uppercase mb-3">Shipping</h5>
                      <div className="mb-4 pb-2">
                        <select>
                          <option value="1">Standard-Delivery- $5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>
                      <h5 className="text-uppercase mb-3">Give code</h5>
                      <div className="mb-5">
                        <div>
                          <input type="text" className="form-control form-control-lg" />
                          <label className="form-label">Enter your code</label>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${cart.reduce((acc, item) => acc)}</h5>
                      </div>
                      <Button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-button-init data-mdb-ripple-init data-mdb-ripple-color="dark">
                        Checkout
                      </Button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                  



    // <div className='cart-container'>
    //   <div>Items in cart: {cartCount}</div>
    //   <div>Total: {totalPrice}</div>
    //   <button onClick={() => console.log(cart)}>Checkout</button>
    // </div>
  )
};

    