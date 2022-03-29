import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { producto } from '../../helpers/getFetch'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(producto);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, []);

  return (
    <section className="item-list-container">
      <h3 className="item-list-container__title pt-3">Teclados destacados</h3>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
