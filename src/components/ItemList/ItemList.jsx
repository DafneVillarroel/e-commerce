import Item from '../Item/Item';
import { producto } from '../../helpers/getFetch'

const ItemList = () => {
return (
    <div className="product-list-container" >
      {
        producto.length ? (
          <>
            {
              producto.map((producto) => {
                return (
                  <div key={producto.id} >
                    <Item
                     producto={producto}
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
