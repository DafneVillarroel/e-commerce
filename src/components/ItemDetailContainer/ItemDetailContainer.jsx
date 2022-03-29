import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../../helpers/getFetch';

 const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(producto);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

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


if(producto.find(producto=> producto.name === "Teclado Logitech K380 QWERTY color rosa")){

  return (
      <section className="item-list-container">
        <h3 className="item-list-container__title pt-3">Teclados destacados</h3>
         <div className="product-list-container" >
          {
        <ItemDetail name={producto.name}
                    price={producto.price}
                    image={producto.image}
                    />

          }
        </div>
      </section>
    );
  };

}


export default ItemDetailContainer;
