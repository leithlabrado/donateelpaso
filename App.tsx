import React, { useState } from 'react';
import { ContentProvider } from './context/ContentContext';
import { PageView } from './types';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Donate from './pages/Donate';
import Events from './pages/Events';
import About from './pages/About';
import Admin from './pages/Admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={setCurrentPage} />;
      case 'DONATE':
        return <Donate />;
      case 'EVENTS':
        return <Events />;
      case 'ABOUT':
        return <About />;
      case 'CONTACT':
        // Reuse About page with scroll to footer logic usually, but here just rendering About for simplicity or a dedicated contact section view
        return <About />; 
      case 'ADMIN':
        return <Admin onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ContentProvider>
      {currentPage === 'ADMIN' ? (
        <Admin onNavigate={setCurrentPage} />
      ) : (
        <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
          {renderPage()}
        </Layout>
      )}
    </ContentProvider>
  );
};

export default App;