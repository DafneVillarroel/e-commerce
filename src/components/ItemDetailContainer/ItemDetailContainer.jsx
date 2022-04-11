import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {

  const [items, setItems] = useState([])
 const [loading, setLoading] = useState(true)
  const {id} = useParams()


  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(id){
         let item = producto.find((destino)=>{
          return destino.id === Number(id)
        })
        resolve(item)
      }
      else resolve(producto)
    }, 2000)
  });



 const getProductsFromDB = async () => {
    try {
      const result = await getProducts
      setItems(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB()
  }, [id])


 return (
      <section className="item-list-container">
         <div className="product-list-container" >
           { loading ? <h3>Loading...</h3> :
           <ItemDetail items={items}
          /> }
        </div>
      </section>
    )


}


export default ItemDetailContainer;
