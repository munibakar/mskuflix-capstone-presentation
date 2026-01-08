import './SlideNavigation.css';

const SlideNavigation = ({
    currentSlide,
    totalSlides,
    onNavigate,
    onPrev,
    onNext
}) => {
    const progress = ((currentSlide + 1) / totalSlides) * 100;

    return (
        <nav className="slide-navigation">
            {/* Progress Bar */}
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Navigation Controls */}
            <div className="nav-controls">
                {/* Previous Button */}
                <button
                    className="nav-arrow nav-arrow--prev"
                    onClick={onPrev}
                    disabled={currentSlide === 0}
                    aria-label="Previous slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Slide Counter */}
                <div className="slide-counter">
                    <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="separator">/</span>
                    <span className="total">{String(totalSlides).padStart(2, '0')}</span>
                </div>

                {/* Dots */}
                <div className="nav-dots">
                    {Array.from({ length: totalSlides }, (_, i) => (
                        <button
                            key={i}
                            className={`nav-dot ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => onNavigate(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    className="nav-arrow nav-arrow--next"
                    onClick={onNext}
                    disabled={currentSlide === totalSlides - 1}
                    aria-label="Next slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default SlideNavigation;
