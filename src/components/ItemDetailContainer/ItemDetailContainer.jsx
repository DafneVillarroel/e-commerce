import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(id){
         let item = producto.find((destino)=>{
          return destino.categoria === Number(id)
        })
        resolve(item)
      }
      else resolve(producto)
    }, 2000);
  });

  const [items, setItems] = useState([]);
  const {id} = useParams()

 const getProductsFromDB = async (id) => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB(id);
  }, [id]);


if(producto.find(producto=> producto.id === 1)){

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
