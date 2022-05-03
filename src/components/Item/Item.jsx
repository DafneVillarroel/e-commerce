import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ producto }) => {
 return (
<div className="row mt-4 c1" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                               <div className="col-12 col-md-6 col-lg-4 mb-3 card1">

                                          <div >
                                              <img src={producto.image} alt='' className="w-100 mt-4"/>
                                          </div>
                                          <div>
                                                <div className="mt-1">
                                              {`${producto.name}`}
                                                </div>
                                              <div className="price">
                                                      $ {producto.price}
                                              </div>
                                                 <p className="description">
                                                     Envío gratis
                                                </p>
                                                  <Link to={`/item/${producto.id}`}>
                                                    <button className="buttonItem">
                                                      <div className="default-btn">
                                                        <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
                                                        <span>Ver detalle</span>
                                                      </div>
                                                      <div className="hover-btn">
                                                        <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                                        <span>Shop Now</span>
                                                      </div>
                                                    </button>
                                                  </Link>
                                              </div>

                               </div>
 </div>

  )
}

export default Item;
