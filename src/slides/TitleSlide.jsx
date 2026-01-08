import Slide from '../components/Slide';

const TitleSlide = () => {
  return (
    <Slide variant="centered">
      <div className="title-container">
        <div className="logo-container">
          <span className="logo-text">MSKU</span>
          <span className="logo-highlight">FLIX</span>
        </div>

        <div className="project-badge">
          CAPSTONE PROJECT 2025
        </div>

        <h2 className="project-subtitle">
          A Microservices Architecture Study
        </h2>

        <div className="divider"></div>

        <div className="team-section">
          <p className="team-label">Team</p>
          <p className="team-names">Münib Akar & Ela Semra Sava & Ali Zekai Deveci</p>
        </div>
      </div>

      <style>{`
        .title-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-lg);
        }
        .logo-container {
          display: flex;
          align-items: baseline;
        }
        .logo-text {
          font-size: 6rem;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -2px;
        }
        .logo-highlight {
          font-size: 6rem;
          font-weight: 900;
          color: var(--netflix-red);
          letter-spacing: -2px;
        }
        .project-badge {
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-lg);
          background: var(--netflix-red);
          color: white;
          font-size: var(--font-sm);
          font-weight: 600;
          letter-spacing: 3px;
          border-radius: var(--radius-sm);
        }
        .project-subtitle {
          font-size: var(--font-2xl);
          font-weight: 400;
          color: var(--text-secondary);
          margin: 0;
        }
        .divider {
          width: 80px;
          height: 4px;
          background: var(--netflix-red);
          border-radius: 2px;
          margin: var(--spacing-md) 0;
        }
        .team-section {
          text-align: center;
        }
        .team-label {
          font-size: var(--font-sm);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--spacing-xs);
        }
        .team-names {
          font-size: var(--font-xl);
          color: var(--text-primary);
          font-weight: 500;
        }
      `}</style>
    </Slide>
  );
};

export default TitleSlide;
