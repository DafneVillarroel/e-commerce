import React from 'react'
import useCartContext from "../../context/CartContext"
import {Link} from "react-router-dom"
import './Cart.css'
import { getFirestore,collection, query,getDocs, updateDoc, where, addDoc, writeBatch, Timestamp } from 'firebase/firestore'

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

orden.date = Timestamp.fromDate(new Date())

const db = getFirestore()
const queryCollection = collection(db, 'orders')
addDoc(queryCollection, orden)
.then(({id}) => alert("Pedido registrado exitosamente. Su id es : " + (id) ))
  .catch(err=> console.log(err))

}

// actualizar stock
// const queryCollectionStock = collection(db, 'productos')

// const queryActualizarStock = query(
//   queryCollectionStock,
//   where(documentId(), 'in', itemsInCart.map(it => it.id))
// )
// const batch = writeBatch(db)

// await getDocs(queryActualizarStock)
//  .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
//    stock:res.data().stock = itemsInCart.find(items => items.id === res.id).quantity
//  }) ))
// .finally(()=> console.log('actualizado'))

// batch.commit()

  if(itemsInCart.length === 0){
     return(
     <div className="container">
       <h3 className="mt-4">No hay elementos en el carrito</h3>
       <div>
        <Link to="/">Ir al catalogo</Link>
       </div>

       <img src="https://i.blogs.es/588e01/istock-689453486/840_560.jpeg" className="w-75 mt-2"/>
     </div>
     )
  }
else{
 return(
<div className="container ">
<h2 className="mt-3">Carrito de Compras</h2>
<table className="table">
  <thead>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Total</th>
      <th>Acciones</th>
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

<button onClick={()=> {alert('compra realizada')}} className="btn btn-success mx-2 mt-2">Pagar</button>
<button onClick={()=>clearCart()} className="btn btn-danger mt-2 me-2">Vaciar Carrito</button>
  <button onClick={generarOrden} className="btn btn-dark mt-2">Realizar Orden</button>
</div>
)
}

}

export default Cart
