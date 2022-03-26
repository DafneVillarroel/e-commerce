import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {

   function onAdd(count){
    alert("Agregaste " +  count + " elementos al carrito")
  }
  return (
   <div className="App">
     <NavBar/>
     <ItemListContainer
     greeting="Bienvenidos a mi E-commerce React!"
     />
     <ItemCount
     onAdd={onAdd}
     initial={1}
     stock={5}
     />
   </div>
  );
}

export default App;
