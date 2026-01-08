import Slide from '../components/Slide';

const QASlide = () => {
  return (
    <Slide variant="centered">
      <div className="qa-container">
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
            <p>Team Member</p>
          </div>
          <div className="team-card">
            <h4>Ela Semra Sava</h4>
            <p>Team Member</p>
          </div>
          <div className="team-card">
            <h4>Ali Zekai Deveci</h4>
            <p>Team Member</p>
          </div>
        </div>

        <p className="project-footer">
          Capstone Project 2025 • Microservices Architecture Study
        </p>
      </div>

      <style>{`
        .qa-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }
        .qa-container .logo-container {
          display: flex;
          align-items: baseline;
          margin-bottom: var(--spacing-sm);
        }
        .qa-container .logo-text {
          font-size: 3rem;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -1px;
        }
        .qa-container .logo-highlight {
          font-size: 3rem;
          font-weight: 900;
          color: var(--netflix-red);
          letter-spacing: -1px;
        }
        .qa-container h1 {
          font-size: var(--font-4xl);
          color: var(--text-primary);
          margin: 0;
        }
        .thank-you {
          font-size: var(--font-xl);
          color: var(--text-secondary);
        }
        .divider {
          width: 60px;
          height: 4px;
          background: var(--netflix-red);
          border-radius: 2px;
          margin: var(--spacing-md) 0;
        }
        .team-cards {
          display: flex;
          gap: var(--spacing-lg);
        }
        .team-card {
          background: var(--bg-secondary);
          padding: var(--spacing-lg) var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .team-card h4 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin: 0 0 4px 0;
        }
        .team-card p {
          font-size: var(--font-md);
          color: var(--text-muted);
          margin: 0;
        }
        .project-footer {
          font-size: var(--font-md);
          color: var(--text-muted);
          margin-top: var(--spacing-lg);
        }
      `}</style>
    </Slide>
  );
};

export default QASlide;
