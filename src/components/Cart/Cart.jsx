import React, { useState } from 'react'
import useCartContext from "../../context/CartContext"
import {Link} from "react-router-dom"
import './Cart.css'
import { getFirestore,collection,addDoc, Timestamp } from 'firebase/firestore'

function Cart() {
 const [formData, setFormData] = useState({
   email:'',
   phone:'',
   name:''
 })

 const {itemsInCart, removeItemFromCart, clearCart, precioTotal} = useCartContext()

 const generarOrden= (e) =>{
    e.preventDefault()


 let orden = {}

 orden.buyer = formData
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

  const handleChange =(event)=>{
   setFormData({
     ...formData,
     [event.target.name]: event.target.value
   })
  }

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
            <button className="buttonCartDelete delete"  onClick={()=>removeItemFromCart(items.id)}>Eliminar</button>
          </td>
          </tr>
      ))
    }
  </tbody>
</table>
<div className="buttons">
<button onClick={()=> {alert('compra realizada')}} className="buttonCartBuy mx-2 mt-2">Pagar</button>
<button onClick={()=>clearCart()} className="buttonCartDelete mt-2 me-2">Vaciar Carrito</button>
<br/>
<form onSubmit={generarOrden}>
  <input name="name" type="text" placeholder="Ingrese el email"
  onChange={handleChange}
   value={formData.name}/>
  <input name="email" type="text" placeholder="Ingrese el phone"
   onChange={handleChange}
  value={formData.email}
   />
  <input name="phone" type="text" placeholder="Ingrese el nombre"
   onChange={handleChange}
  value={formData.phone}
   />

</form>
<button onClick={generarOrden} className="buttonCartOrder mt-2">Realizar Orden</button>
</div>
</div>
)
}

}

export default Cart
