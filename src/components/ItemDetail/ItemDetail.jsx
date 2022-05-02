import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from "react-router-dom"
import { useState } from 'react';
import useCartContext from '../../context/CartContext';


const ItemDetail = ({producto}) => {
const [hideCount, setHideCount] = useState(false)
const {addItem} = useCartContext()

 function onAdd(count){
     addItem(producto, count)
     setHideCount(!hideCount)
  }

if (producto) {
     return (
                                   <div className="row mt-4" >

                                          <div className="col-12 col-md-6 col-lg-4 mb-4 card ">
                                                <div className="card-body d-flex">
                                                  <img src={producto.image} className="w-50 image" alt=''/>
                                                 <div >
                                                     <div className="card-header title text-start">
                                                      {`${producto.name}`}
                                                      </div>
                                                      <div className="mt-3 text-start ms-2 price">
                                                         ${producto.price}
                                                      </div>
                                                      <div className="description">
                                                        <p className="text-start ms-2 mt-3">Devolución gratis</p>
                                                        <p className="text-start ms-2">Tenés 30 días desde que lo recibís.</p>
                                                      </div>
                                                      <div className="mt-4">

                                                          {hideCount ? (
                                                         <Link to="/cart">
                                                         <button className="btn btn-warning d-flex justify-content-start ms-2">Comprar ahora</button>
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
