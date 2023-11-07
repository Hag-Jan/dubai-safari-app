import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import TourList from './components/tours/TourList';
import {toursList} from "./data"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <TourList toursList={toursList} />
    </div>
  );
}

export default App;
