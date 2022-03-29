import React from 'react';

const Item = ({ name, image, price }) => {
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
                                              <button className="btn btn-dark  btn-block">
                                                  detalle del producto
                                              </button>

                                          </div>
                                      </div>
                                  </div>

  </div>

  )
}

export default Item;
