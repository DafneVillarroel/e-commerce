import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { producto } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoriaId} = useParams()

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoriaId){
         let resultado = producto.filter((destino)=>{
          return destino.categoria === categoriaId
        })
        resolve(resultado)
      }
      else resolve(producto)

    }, 2000);
  });

  const getProductsFromDB = async (categoriaId) => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };



  useEffect(() => {
    getProductsFromDB(categoriaId);
  }, [categoriaId]);

  return (
    <section className="item-list-container">
      <h3 className="item-list-container__title pt-3">Productos Destacados</h3>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
