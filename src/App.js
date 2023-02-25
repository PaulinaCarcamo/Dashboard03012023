
import './App.css';
import MrfCars from './components/MrfCars';
import MrfCountries from './components/MrfCountries';
import MrfNames from './components/MrfNames'
import MrfTrucks from './components/MrfTrucks';


function App() {
  return (
    <div className="App">
      <MrfTrucks/>
      <MrfCars/>
      <MrfNames />
     <MrfCountries/>
    </div>
  );
}

export default App;
