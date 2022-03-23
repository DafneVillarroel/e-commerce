import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <h3 className="item-list-container__title pt-3">Teclados destacados</h3>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
