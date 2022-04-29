import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ producto }) => {
 return (
<div className="row mt-4" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                               <div className="col-12 col-md-6 col-lg-4 mb-4 card">
                                          <div className="card-header">
                                              {`${producto.name}`}
                                          </div>
                                          <div >
                                              <img src={producto.image} alt='' className="w-50"/>

                                          </div>
                                         $ {producto.price}
                                          <div className="card-footer">
                                              <Link to={`/item/${producto.id}`}>
                                              <button className="btn btn-dark  btn-block">
                                                  detalle del producto
                                              </button>
                                              </Link>
                                          </div>
                                  </div>


  </div>

  )
}

export default Item;
