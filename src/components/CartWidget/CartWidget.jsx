import React from 'react'
import './CartWidget.css'
import useCartContext from "../../context/CartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


function CartWidget() {
  const {countItemsInCart} = useCartContext()
  return (
    <div>
       <FontAwesomeIcon id="cart" icon={faShoppingCart} />
       {countItemsInCart() !== 0 ? <div><small>{countItemsInCart()}</small></div>: <></>}

  </div>
  )
}

export default CartWidget
