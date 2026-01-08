import { useRef, useEffect } from 'react';
import Slide from '../components/Slide';

const QASlide = ({ isActive }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {
          // Autoplay with sound might be blocked by browser
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <Slide>
      <div className="qa-layout">
        <div className="qa-left">
          <div className="logo-container">
            <span className="logo-text">MSKU</span>
            <span className="logo-highlight">FLIX</span>
          </div>

          <h1>Questions?</h1>

          <p className="thank-you">Thank you for your attention</p>

          <div className="divider"></div>

          <div className="team-cards">
            <div className="team-card">
              <h4>Münib Akar</h4>
            </div>
            <div className="team-card">
              <h4>Ela Semra Sava</h4>
            </div>
            <div className="team-card">
              <h4>Ali Zekai Deveci</h4>
            </div>
          </div>

          <p className="project-footer">
            Capstone Project 2025
          </p>
        </div>

        <div className="qa-right">
          <video
            ref={videoRef}
            className="demo-video"
            loop
            playsInline
            controls
          >
            <source src="/demo-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <style>{`
        .qa-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          width: 100%;
          align-items: center;
        }
        .qa-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .logo-container {
          display: flex;
          align-items: baseline;
          margin-bottom: var(--spacing-md);
        }
        .logo-text {
          font-size: 3rem;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -1px;
        }
        .logo-highlight {
          font-size: 3rem;
          font-weight: 900;
          color: var(--netflix-red);
          letter-spacing: -1px;
        }
        .qa-left h1 {
          font-size: var(--font-4xl);
          color: var(--text-primary);
          margin: 0 0 var(--spacing-xs) 0;
        }
        .thank-you {
          font-size: var(--font-lg);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }
        .divider {
          width: 60px;
          height: 4px;
          background: var(--netflix-red);
          border-radius: 2px;
          margin-bottom: var(--spacing-lg);
        }
        .team-cards {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }
        .team-card {
          background: var(--bg-secondary);
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--radius-md);
        }
        .team-card h4 {
          font-size: var(--font-md);
          color: var(--text-primary);
          margin: 0;
        }
        .project-footer {
          font-size: var(--font-sm);
          color: var(--text-muted);
        }
        .qa-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .demo-video {
          max-height: 550px;
          width: auto;
          max-width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }
        @media (max-width: 900px) {
          .qa-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          .qa-left {
            align-items: center;
            text-align: center;
          }
          .demo-video {
            max-height: 350px;
          }
        }
        @media (max-width: 600px) {
          .logo-text, .logo-highlight {
            font-size: 2rem;
          }
          .demo-video {
            max-height: 250px;
          }
        }
      `}</style>
    </Slide>
  );
};

export default QASlide;
