import React, {useState, createContext, useContext} from "react"

const CartContext = createContext()

const useCartContext = function(){
return useContext(CartContext)
}

export function CartContextProvider({children}) {
const [itemsInCart, setItemsInCart] = useState([])

  function addItem(items, quantity){
    setItemsInCart([...itemsInCart, {...items, quantity}])
  }

 function isInCart(id){
   let found = itemsInCart.some((items)=>{
     return items.id === id
   })
   return found
   }

   function getItemInCart(id){
   let itemInCart = itemsInCart.find((items)=>{
     return items.id === id
   })
   return itemsInCart
   }




  return (
    <CartContext.Provider value={{addItem, isInCart, getItemInCart, quantity:5, itemsInCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default useCartContext
