import './App.css';
import Carrousel from './Carrousel/Carrousel';
import RoutesApp from './routes/RoutesApp';

function App() {

   function onAdd(count){
    alert("Agregaste " +  count + " elementos al carrito")
  }
  return (
   <div className="App">
       <RoutesApp/>

   </div>
  );
}

export default App;
