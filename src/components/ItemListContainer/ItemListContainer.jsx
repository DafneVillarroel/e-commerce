import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { producto } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore'



const ItemListContainer = () => {

 const [items, setItems] = useState([]);
 const [producto, setProducto] = useState({})
 const { categoriaId } = useParams()

 useEffect(()=>{
   const querydb = getFirestore()
   const queryProd = doc(querydb,'productos','X8I1Y7nYU2pcpBNecGUj')
   getDoc(queryProd)
   .then(resp => setProducto({id: resp.id, ...resp.data()}))
  },[])


//  const getProducts = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(producto), 2000);
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
  <h3 className="item-list-container__title pt-3">Productos Destacados</h3>
  <ItemList producto={items} />
  </section>

 );

};



export default ItemListContainer;