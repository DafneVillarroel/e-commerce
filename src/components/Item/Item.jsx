import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ name, image, price,id }) => {
 return (
  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                               <div  className='col-md-6 p-1 '>
                                      <div className="card w-100 mt-5" >
                                          <div className="card-header">
                                              {`${name}`}
                                          </div>
                                          <div className="card-body">
                                              <img src={image} alt='' className='w-60' />

                                       </div>
                                          {price}
                                          <div className="card-footer">
                                              <Link to={`/item/${id}`}>
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
