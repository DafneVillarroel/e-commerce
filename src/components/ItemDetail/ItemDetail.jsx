import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name,image,price, onAdd }) => {
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
                                              <button className="btn btn-dark  btn-block mb-3">
                                                  detalle del producto
                                              </button>
                                             <ItemCount
                                             onAdd={onAdd}
                                             initial={1}
                                             stock={5}
                                             />
                                          </div>
                                      </div>
                                  </div>

  </div>

  )
}

export default ItemDetail;
