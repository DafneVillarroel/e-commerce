import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, initial}) {
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
    <button  onClick={decrement}>-</button>
     <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button type="button" class="btn btn-warning" onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
