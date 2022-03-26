
import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount({initial,stock,onAdd}) {
const [count, setCount] = useState(initial)

function increment(){
  if(count < stock){
    setCount(count+1)
  }
}
function decrement(){
  if(count > 1){
     setCount(count-1)
  }
}
  function onAdd(){
    alert("Agregaste " +  count + " elementos al carrito")
  }


  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    <button class="btn btn-dark me-2 ms-2"  onClick={decrement}>-</button>
     <h3>{count}</h3>
      <button class="btn btn-dark me-2 ms-2" disabled={count > stock ? true : null} onClick={increment}>+</button>
      <button type="button"
       class="btn btn-warning me-2 ms-2"
       onClick={onAdd}
      disabled={count > stock ? true : null}>Agregar al carrito</button>
    </div>
  )
}




export default ItemCount