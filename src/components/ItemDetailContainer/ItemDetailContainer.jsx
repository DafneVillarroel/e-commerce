import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {

  const [items, setItems] = useState([])
 const [producto, setProducto] = useState({})
 const [loading, setLoading] = useState(true)
  const {id} = useParams()



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
//   const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(id){
//          let item = producto.find((destino)=>{
//           return destino.id === Number(id)
//         })
//         resolve(item)
//       }
//       else resolve(producto)
//     }, 2000)
//   });



//  const getProductsFromDB = async () => {
//     try {
//       const result = await getProducts
//       setItems(result)
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       alert('No podemos mostrar los productos en este momento');
//     }
//   };

//   useEffect(() => {
//     getProductsFromDB()
//   }, [id])


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
