import './App.css';
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
