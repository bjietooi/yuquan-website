import { useState, useRef } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import { useConfetti } from './components/Confetti';
import HomePage from './pages/HomePage';
import PreschoolPage from './pages/PreschoolPage';
import LanguageSchoolPage from './pages/LanguageSchoolPage';
import AboutPage from './pages/AboutPage';

const PAGES = {
  home: HomePage,
  preschool: PreschoolPage,
  'language-school': LanguageSchoolPage,
  about: AboutPage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const [transitioning, setTransitioning] = useState(null);
  const pendingPage = useRef(null);
  const { fire, node: confettiNode } = useConfetti();

  const go = (target) => {
    if (target === page || transitioning) return;
    pendingPage.current = target;
    setTransitioning('in');
    setTimeout(() => {
      setPage(target);
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
      {!isGateway && <FloatingShapes />}
      {!isGateway && <Nav current={page} go={go} onCta={fireConfetti} />}
      <main>
        <Page key={page} go={go} fireConfetti={fireConfetti} />
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
