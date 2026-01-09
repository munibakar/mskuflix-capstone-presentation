import Slide from '../components/Slide';

const FutureWorkSlide = () => {
  return (
    <Slide>
      <h2>Possible Future Paths</h2>
      <p style={{ marginBottom: 'var(--spacing-lg)' }}>
        This foundation enables research in multiple directions
      </p>

      <div className="future-grid">
        <div className="future-card">
          <div className="card-header">
            <span className="card-label">Research Area 1</span>
            <h4>SDN (Software Defined Networking)</h4>
          </div>
          <p>
            Dynamic network management for microservices traffic. Exploring how SDN
            controllers can optimize service-to-service communication paths and
            implement traffic policies at the network level.
          </p>
        </div>

        <div className="future-card">
          <div className="card-header">
            <span className="card-label">Research Area 2</span>
            <h4>AI-Based Anomaly Detection</h4>
          </div>
          <p>
            Implementing AI-powered anomaly detection for microservices security.
            Using machine learning to identify unusual patterns, potential attacks,
            and security threats in real-time across the distributed system.
          </p>
        </div>

        <div className="future-card">
          <div className="card-header">
            <span className="card-label">Research Area 3</span>
            <h4>Federated Learning</h4>
          </div>
          <p>
            Privacy-preserving machine learning across distributed data. Exploring how
            user data can remain local while still training models that improve
            recommendations and personalization.
          </p>
        </div>

        <div className="future-card">
          <div className="card-header">
            <span className="card-label">Research Area 4</span>
            <h4>AI/ML Integration</h4>
          </div>
          <p>
            Building recommendation systems, automated content tagging, video
            quality optimization based on network conditions, and predictive
            scaling of services.
          </p>
        </div>
      </div>

      <div className="team-note">
        <strong>Team Approach:</strong> As a 3-person team, each member will focus on a
        specific research area while sharing the common microservices foundation. This
        enables parallel exploration of different optimization strategies.
      </div>

      <div className="goal-box">
        <div className="goal-label">Project Goal</div>
        <p>Develop efficient systems that can operate effectively on microservices architecture</p>
      </div>

      <style>{`
        .future-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        .future-card {
          background: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
        }
        .card-header {
          margin-bottom: var(--spacing-sm);
        }
        .card-label {
          font-size: var(--font-xs);
          color: var(--netflix-red);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .future-card h4 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin: 4px 0 0 0;
        }
        .future-card p {
          font-size: var(--font-sm);
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }
        .team-note {
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          font-size: var(--font-md);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }
        .team-note strong {
          color: var(--text-primary);
        }
        .goal-box {
          background: var(--netflix-red);
          padding: var(--spacing-md) var(--spacing-lg);
          border-radius: var(--radius-md);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .goal-label {
          font-size: var(--font-sm);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .goal-box p {
          font-size: var(--font-lg);
          color: white;
          margin: 0;
          font-weight: 500;
          text-align: center;
        }
        @media (max-width: 1400px) {
          .future-grid {
            gap: var(--spacing-sm);
          }
          .future-card {
            padding: var(--spacing-sm);
          }
          .future-card h4 {
            font-size: var(--font-md);
          }
          .future-card p {
            font-size: var(--font-xs);
          }
          .team-note {
            padding: var(--spacing-sm);
            font-size: var(--font-sm);
          }
        }
        @media (max-width: 900px) {
          .future-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Slide>
  );
};

export default FutureWorkSlide;
