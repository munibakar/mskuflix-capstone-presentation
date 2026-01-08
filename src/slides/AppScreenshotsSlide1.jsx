import Slide from '../components/Slide';

const AppScreenshotsSlide1 = () => {
  return (
    <Slide>
      <div className="screenshot-page">
        <h2>Mobile & Web Client</h2>

        <div className="screenshots-grid">
          <div className="screenshot-item">
            <img src="/login.png" alt="Login Screen" />
            <span className="screenshot-label">Login</span>
          </div>
          <div className="screenshot-item">
            <img src="/register.png" alt="Register Screen" />
            <span className="screenshot-label">Register</span>
          </div>
        </div>
      </div>

      <style>{`
        .screenshot-page {
          width: 100%;
        }
        .screenshot-page h2 {
          margin-bottom: var(--spacing-lg);
        }
        .screenshots-grid {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: var(--spacing-xl);
        }
        .screenshot-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-sm);
        }
        .screenshot-item img {
          height: 520px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }
        .screenshot-label {
          font-size: var(--font-lg);
          font-weight: 500;
          color: var(--text-secondary);
        }
      `}</style>
    </Slide>
  );
};

export default AppScreenshotsSlide1;
