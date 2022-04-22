import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from "react-router-dom"
import { useState } from 'react';
import useCartContext from '../../context/CartContext';


const ItemDetail = ({producto}) => {

const {addItem, isInCart } = useCartContext()

 function onAdd(count){
     addItem(producto, count)
  }

if (producto) {
     return (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}} >
                                   <div  className='col-md-6 p-1 '>

                                          <div className="card w-100 mt-5" >

                                              <div className="card-header">
                                                  {`${producto.name}`}
                                              </div>
                                              <div className="card-body">
                                                  <img src={producto.image} alt='' className='w-60' />

                                              </div>
                                              {producto.price}

                                              <div className="card-footer">

                                                  {isInCart(producto.id) ? (
                                                 <Link to="/cart">
                                                 <button className="btn btn-dark  btn-block mb-3 mt-1 ms-3">Finaliza tu compra</button>
                                                </Link>
                                                  ):(

                                                 <ItemCount
                                                 onAdd={onAdd}
                                                 initial={1}
                                                 stock={5}
                                                 />
                                                  )}



                                              </div>
                                          </div>
                                      </div>

      </div>
)} else {
    return(
    <div>
        <h1>No encontramos ese destino</h1>
    </div>
    )
}



}

export default ItemDetail;
