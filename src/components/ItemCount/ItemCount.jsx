
import React, {useState} from 'react'
import './ItemCount.css'
import '../ItemDetail/ItemDetail'

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



  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    <button class="btn-outline-secondary me-2 ms-2 mt-1"  onClick={decrement}>-</button>
     <h3 className="mt-2">{count}</h3>
      <button class="btn-outline-secondary me-2 ms-2 mt-1" disabled={count > stock ? true : null} onClick={increment}>+</button>
      <button className="buttonItemCount" onClick={()=>onAdd(count)}
         disabled={count > stock ? true : null}>Agregar al carrito
      </button>
    </div>
  )
}



export default ItemCount