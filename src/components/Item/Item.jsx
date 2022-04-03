import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
 return (
  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
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
                                              <Link to={`/item/${producto.id}`}>
                                              <button className="btn btn-dark  btn-block">
                                                  detalle del producto
                                              </button>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>

  </div>

  )
}

export default Item;
