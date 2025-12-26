import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'menu':
        return <Menu />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      case 'reservation':
        return <Reservation />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
