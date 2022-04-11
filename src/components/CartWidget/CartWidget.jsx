import React from 'react'
import './CartWidget.css'
import useCartContext from "../../context/CartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"


function CartWidget() {
  const {countItemsInCart} = useCartContext()
  return (
    <div>
      <Link to="/cart">
       <FontAwesomeIcon id="cart" icon={faShoppingCart} />
      </Link>
      {countItemsInCart() !== 0 ? <div><small>{countItemsInCart()}</small></div>: <></>}

  </div>
  )
}

export default CartWidget
