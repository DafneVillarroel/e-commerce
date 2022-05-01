import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { producto } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom';
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import './ItemListContainer.css'
import Carrousel from '../../Carrousel/Carrousel';


const ItemListContainer = () => {

 const [items, setItems] = useState([]);
 const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
 const { categoriaId } = useParams()


 useEffect(()=>{

       const querydb = getFirestore()
       const queryCollection = collection(querydb, 'productos')

     if(categoriaId === 'zapatillas'){
       const queryFilter = query(queryCollection, where('categoria','==','zapatillas'))

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


//  const getProducts = new Promise((resolve, reject) => {
//   setTimeout(() => {}, 2000)
//  });

// const getProductsFromDB = async () => {
// try {
// const result = await getProducts;
//    if (categoriaId) {
//  const resultado = result.filter(destino => destino.categoria === categoriaId);
// setItems(resultado);
// } else {
//  setItems(result);
// }

// } catch (error) {
// console.log(error);
// alert('No podemos mostrar los productos en este momento');
// }
// };


// useEffect(() => {

//   getProductsFromDB();

//  }, [categoriaId]);



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
  </section>

 );

};



export default ItemListContainer;