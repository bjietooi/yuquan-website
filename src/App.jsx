import { useState, useRef } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import { useConfetti } from './components/Confetti';
import HomePage from './pages/HomePage';
import PreschoolPage from './pages/PreschoolPage';
import LanguageSchoolPage from './pages/LanguageSchoolPage';
import TeachingApproachPage from './pages/TeachingApproachPage';
import AboutPage from './pages/AboutPage';
import ProgrammesPage from './pages/ProgrammesPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import HolidayProgrammesPage from './pages/HolidayProgrammesPage';
import NewsPage from './pages/NewsPage';

const PAGES = {
  home: HomePage,
  preschool: PreschoolPage,
  'language-school': LanguageSchoolPage,
  'teaching-approach': TeachingApproachPage,
  about: AboutPage,
  programmes: ProgrammesPage,
  locations: LocationsPage,
  contact: ContactPage,
  'holiday-programmes': HolidayProgrammesPage,
  news: NewsPage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const [scrollToSection, setScrollToSection] = useState(null);
  const [transitioning, setTransitioning] = useState(null);
  const pendingPage = useRef(null);
  const { fire, node: confettiNode } = useConfetti();

  const go = (target) => {
    if (!target) return;
    // Support "pagename#section" for scroll-to anchors
    const [pageName, section] = target.split('#');
    if (pageName === page && !transitioning) {
      // Same page — just scroll to section
      if (section) {
        import('./pages/ProgrammesPage').then(m => m.scrollToProgramme(section));
      }
      return;
    }
    if (transitioning) return;
    setScrollToSection(section || null);
    pendingPage.current = pageName;
    setTransitioning('in');
    setTimeout(() => {
      setPage(pageName);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTransitioning('out');
      setTimeout(() => {
        setTransitioning(null);
        pendingPage.current = null;
      }, 550);
    }, 450);
  };

  const fireConfetti = (e) => {
    fire(e?.clientX ? e : null);
  };

  const Page = PAGES[page] || HomePage;

  const isGateway = page === 'home';

  return (
    <div className="app">
      <FloatingShapes />
      {!isGateway && <Nav current={page} go={go} onCta={fireConfetti} />}
      <main>
        <Page key={page} go={go} fireConfetti={fireConfetti} scrollToSection={scrollToSection} />
      </main>
      {!isGateway && <Footer go={go} />}

      {transitioning && (
        <div className={`swoosh-overlay ${transitioning}`}>
          <div className="blob" />
        </div>
      )}

      {confettiNode}
    </div>
  );
}
