
import './App.css';
import Navbar from './components/Navbar';
import itemlistcontainer from './components/itemlistcontainer';


function App() {
  return (
    <div className="App">
     <Navbar> <CartWidget></CartWidget></Navbar>
     <itemlistcontainer greeting= "saludos"></itemlistcontainer>
    </div>
  );
}

export default App;
