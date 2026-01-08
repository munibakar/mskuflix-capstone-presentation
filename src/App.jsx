import { useState, useEffect, useCallback } from 'react';
import './App.css';
import SlideNavigation from './components/SlideNavigation';
import {
  TitleSlide,
  AgendaSlide,
  WhyThisProjectSlide,
  ProblemSlide,
  ArchitectureSlide,
  MicroservicesSlide,
  TechStackSlide,
  CommunicationSlide,
  DeploymentSlide,
  MobileClientSlide,
  AppScreenshotsSlide1,
  AppScreenshotsSlide2,
  AppScreenshotsSlide3,
  ChallengesSlide1,
  ChallengesSlide2,
  LearningsSlide,
  FutureWorkSlide,
  QASlide
} from './slides';

const slides = [
  TitleSlide,           // 1
  AgendaSlide,          // 2
  WhyThisProjectSlide,  // 3
  ProblemSlide,         // 4
  TechStackSlide,       // 5
  MicroservicesSlide,   // 6
  ArchitectureSlide,    // 7
  CommunicationSlide,   // 8
  DeploymentSlide,      // 9
  MobileClientSlide,    // 10
  AppScreenshotsSlide1, // 11 - Login, Register
  AppScreenshotsSlide2, // 12 - Account, Plan
  AppScreenshotsSlide3, // 13 - Payment, Home
  ChallengesSlide1,     // 14
  ChallengesSlide2,     // 15
  LearningsSlide,       // 16
  FutureWorkSlide,      // 17
  QASlide               // 18
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length && index !== currentSlide) {
      setPrevSlide(currentSlide);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'Enter':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, goToSlide]);

  return (
    <div className="app">
      <div className="slides-container">
        {slides.map((SlideComponent, index) => {
          let className = 'slide-wrapper';
          if (index === currentSlide) {
            className += ' active';
          } else if (index === prevSlide) {
            className += ' prev';
          }

          return (
            <div key={index} className={className}>
              <SlideComponent isActive={index === currentSlide} />
            </div>
          );
        })}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={goToSlide}
        onPrev={goPrev}
        onNext={goNext}
      />

      <div className="keyboard-hint">
        <kbd>←</kbd> <kbd>→</kbd> or <kbd>Space</kbd> to navigate
      </div>
    </div>
  );
}

export default App;
