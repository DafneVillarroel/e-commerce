import React from 'react'
import useCartContext from "../../context/CartContext"
import {Link} from "react-router-dom"
import { getFirestore,collection, addDoc } from 'firebase/firestore'

function Cart() {

  const {itemsInCart, removeItemFromCart, clearCart, precioTotal} = useCartContext()

 const generarOrden= (e) =>{
    e.preventDefault()

 let orden = {}

 orden.buyer = { name: 'dafne', email:'villarroelsol1gmail.com',phone: '3513403007'}
 orden.total= precioTotal()

  orden.items = itemsInCart.map(cartItem =>{
  const id = cartItem.id
  const nombre = cartItem.name
  const precio = cartItem.price * cartItem.quantity

  return(id,nombre,precio)
})
const db = getFirestore()
const queryCollection = collection(db, 'orders')
addDoc(queryCollection, orden)
.then(resp=> console.log(resp))

// console.log(orden)
}

  if(itemsInCart.length === 0){
     return(
     <div className="container">
       <h2>No hay elementos en el carrito</h2>
       <Link to="/">Ir al catalogo</Link>
     </div>
     )
  }
else{
 return(
<div className="container">
<h2>Carrito de Compras</h2>
<table className="table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Total</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      itemsInCart.map(items => (
        <tr key={items.id}>
          <td>{items.name}</td>
          <td>{items.price}</td>
          <td>{items.quantity}</td>
          <td>{parseFloat(items.quantity * items.price)}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>removeItemFromCart(items.id)}>Eliminar</button>
          </td>
          </tr>
      ))
    }
  </tbody>
</table>

<button onClick={()=> {alert('compra realizada')}} className="btn btn-success mx-2">Pagar</button>
<button onClick={()=>clearCart()} className="btn btn-danger">Vaciar Carrito</button>
  <button onClick={()=>generarOrden()} className="btn btn-danger">Realizar Orden</button>
</div>


 )
}

}

export default Cart
