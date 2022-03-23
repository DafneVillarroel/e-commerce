import React, { useEffect, useState } from 'react';
import Item from './Item';
import { producto } from '../../helpers/getFetch'


const ItemList = () => {
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
    <div className="product-list-container" >
      {
        items.length ? (
          <>
            {
              items.map((producto) => {
                return (
                  <div key={producto.id} >
                    <Item
                      name={producto.name}
                      image={producto.image}
                      price={producto.price}
                      stock={producto.stock}
                      id={producto.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        )

      }
    </div>
  );
};

export default ItemList;
