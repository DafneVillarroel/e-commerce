import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import './ItemListContainer.css'
import Carrousel from '../../Carrousel/Carrousel';
import Footer from '../../components/Footer/Footer'

const ItemListContainer = () => {

 const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
 const { categoriaId } = useParams()


 useEffect(()=>{

       const querydb = getFirestore()
       const queryCollection = collection(querydb, 'productos')

     if(categoriaId === 'camperas'){
       const queryFilter = query(queryCollection, where('categoria','==','camperas'))

        getDocs(queryFilter)
      .then(resp=>setProductos(resp.docs.map(items =>( {id: items.id, ...items.data()} ))))
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
    } else{
     if(!categoriaId ){
      getDocs(queryCollection)
      .then(resp=>setProductos(resp.docs.map(items =>( {id: items.id, ...items.data()} )))
       )
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
     } else{
      const queryFilter = query(queryCollection, where('categoria','==','mochilas'))

        getDocs(queryFilter)
      .then(resp=>setProductos(resp.docs.map(items =>( {id: items.id, ...items.data()} ))))
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
     }

   }}
,[categoriaId])

 return (

  <section className="item-list-container">
       <div>
       <Carrousel/>

       </div>
  <h4 className="item-list-container__title pt-3">Productos Destacados</h4>
   { loading ? <div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div> :
   <ItemList  producto={productos} /> }
   <div>
    <Footer/>
   </div>
</section>

 );

};



export default ItemListContainer;