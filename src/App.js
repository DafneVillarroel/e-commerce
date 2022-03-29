import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

   function onAdd(count){
    alert("Agregaste " +  count + " elementos al carrito")
  }
  return (
   <div className="App">
     <NavBar/>
     <ItemDetailContainer/>
     {/* <ItemListContainer
     greeting="Bienvenidos a mi E-commerce React!"
     /> */}
   </div>
  );
}

export default App;
