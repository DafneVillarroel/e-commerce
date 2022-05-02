import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {

 const [producto, setProducto] = useState({})
 const [loading, setLoading] = useState(true)
  const {id} = useParams()


//  Agregue setTimeout para la visualizacion del loading
useEffect(()=>{
 const querydb = getFirestore()
 const queryProd = doc(querydb,'productos',id)

 setTimeout(() => {
        getDoc(queryProd)
         .then(resp => setProducto({id: resp.id, ...resp.data()}))
         .catch(err => console.log(err))
         .finally(()=> setLoading(false))
      }, 1000)

},[])

 return (
      <section className="item-list-container">
         <div className="product-list-container" >
           { loading ?
          <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
          :
           <ItemDetail producto={producto}
          /> }
        </div>
      </section>
    )


}


export default ItemDetailContainer;
