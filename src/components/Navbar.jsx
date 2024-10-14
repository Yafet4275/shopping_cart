import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";


export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log("Navbar", cart);
  // Get total quantity of items in cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>Store</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Cart items: <span className="cart-count">{cartCount}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};