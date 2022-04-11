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
   return itemInCart
   }

  function removeItemFromCart(id){
    if(isInCart(id)){
      let filterCart = itemsInCart.filter((items)=>{
        return items.id !== id
      })
      setItemsInCart(filterCart)
    }
  }

  function clearCart(){
    setItemsInCart([])
  }
  function countItemsInCart(){
    let total =0
    itemsInCart.forEach((items)=>{
      total += items.quantity
    })
    return total
  }
  return (
    <CartContext.Provider value={{addItem, isInCart,clearCart,removeItemFromCart, getItemInCart, quantity:5, itemsInCart,countItemsInCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default useCartContext
