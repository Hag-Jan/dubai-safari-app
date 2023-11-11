import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Pagination from './components/pagination/Pagination';
import Services from './components/services/Services';
import TourList from './components/tours/TourList';
import { toursList } from "./data"
import SortInput from './components/sort-input/SortInput';
import { paginate } from './utils/pagination';
import Banner, { banner } from './components/banner/Banner';
import NewsLetter from './components/news-letter/NewsLetter';
import Footer from './components/footer/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recomended")


  // Sort Tour
  const sortedTourList =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high" ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
        : toursList.sort((a, b) => b.rating - a.rating)

  const { pages, orderedTourList } = paginate(toursList.length, sortedTourList, currentPage)

  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <SortInput setSortItem={setSortItem} sortItem={sortItem} toursLength={toursList.length} />
      <TourList toursList={orderedTourList} />
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Banner />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
