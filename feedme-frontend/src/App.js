import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ListofPets from './components/ListofPets';
import PetForm from './components/PetForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListofPets/>
      <PetForm/>
    </div>
  );
}

export default App;
