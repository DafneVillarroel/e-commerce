import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ producto }) => {
 return (
<div className="row mt-4 c1" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                               <div className="col-12 col-md-6 col-lg-4 mb-4 card1">

                                          <div >
                                              <img src={producto.image} alt='' className="w-100 mt-4"/>
                                          </div>
                                          <div>
                                                <div>
                                              {`${producto.name}`}
                                                </div>
                                              <div className="mt-1 price">
                                                      $ {producto.price}
                                              </div>
                                                 <p className="description">
                                                     Envío gratis
                                                </p>
                                                  <Link to={`/item/${producto.id}`}>
                                                  <button className="btn btn-dark  btn-block mb-2">
                                                      detalle del producto
                                                  </button>
                                                  </Link>
                                              </div>

                               </div>
 </div>

  )
}

export default Item;
