import { useState, useEffect } from 'react';
import Navbar, { type PageId } from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HeroesOfClay from './pages/HeroesOfClay';
import IdolStyles from './pages/IdolStyles';
import MakingOfGoddess from './pages/MakingOfGoddess';
import FolkStories from './pages/FolkStories';
import StoriesToRemember from './pages/StoriesToRemember';
import ArtistArchive from './pages/ArtistArchive';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Store page preference in localStorage (harmless UI state)
  useEffect(() => {
    const saved = localStorage.getItem('maas-karigors-page') as PageId | null;
    if (saved && isValidPage(saved)) {
      setCurrentPage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('maas-karigors-page', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'heroes':
        return <HeroesOfClay />;
      case 'styles':
        return <IdolStyles />;
      case 'making':
        return <MakingOfGoddess />;
      case 'folk':
        return <FolkStories />;
      case 'oral':
        return <StoriesToRemember />;
      case 'archive':
        return <ArtistArchive />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FDF8EF',
      }}
    >
      <Navbar currentPage={currentPage} navigate={navigate} />

      <main
        key={currentPage}
        style={{
          flex: 1,
          paddingTop: '60px',
        }}
      >
        {renderPage()}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

function isValidPage(p: string): p is PageId {
  return ['home', 'heroes', 'styles', 'making', 'folk', 'oral', 'archive'].includes(p);
}
