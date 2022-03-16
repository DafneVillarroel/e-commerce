import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
   <div className="App">
     <NavBar/>
     <ItemListContainer
     greeting="Bienvenidos a mi E-commerce React!"
     />
   </div>
  );
}

export default App;
