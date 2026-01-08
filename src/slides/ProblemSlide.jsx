import Slide from '../components/Slide';

const ProblemSlide = () => {
  return (
    <Slide>
      <h2>Architecture Comparison</h2>
      <p style={{ marginBottom: 'var(--spacing-xl)' }}>
        Understanding when to use each approach
      </p>

      <div className="comparison-container">
        <div className="comparison-card monolith">
          <div className="card-header">
            <h3>Monolithic Architecture</h3>
          </div>
          <ul>
            <li>Single codebase, tightly coupled components</li>
            <li>Simpler to develop and deploy initially</li>
            <li>Easier debugging and testing</li>
            <li>Lower operational complexity</li>
            <li>Good for small teams and simpler domains</li>
          </ul>
          <div className="when-to-use">
            <strong>Best for:</strong> Small to medium applications, startups, MVPs, teams with limited DevOps experience
          </div>
        </div>

        <div className="vs-divider">
          <span>VS</span>
        </div>

        <div className="comparison-card microservices">
          <div className="card-header">
            <h3>Microservices Architecture</h3>
          </div>
          <ul>
            <li>Independent, loosely coupled services</li>
            <li>Scale each service independently</li>
            <li>Fault isolation — failures are contained</li>
            <li>Technology flexibility per service</li>
            <li>Teams can work in parallel</li>
          </ul>
          <div className="when-to-use">
            <strong>Best for:</strong> Large-scale applications, multiple teams, complex domains, high availability requirements
          </div>
        </div>
      </div>

      <div className="key-message">
        <strong>Key Takeaway:</strong> Neither architecture is universally "better."
        The right choice depends on your team size, domain complexity, and scalability requirements.
        We chose microservices to learn distributed systems, not because monolithic is wrong.
      </div>

      <style>{`
        .comparison-container {
          display: flex;
          align-items: stretch;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        .comparison-card {
          flex: 1;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          background: var(--bg-secondary);
          display: flex;
          flex-direction: column;
        }
        .comparison-card.monolith {
          border-top: 4px solid #4CAF50;
        }
        .comparison-card.microservices {
          border-top: 4px solid var(--netflix-red);
        }
        .card-header h3 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin: 0 0 var(--spacing-md) 0;
        }
        .comparison-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
        }
        .comparison-card li {
          padding: var(--spacing-xs) 0;
          font-size: var(--font-md);
          color: var(--text-secondary);
          border-bottom: 1px solid var(--bg-tertiary);
        }
        .comparison-card li:last-child {
          border-bottom: none;
        }
        .when-to-use {
          margin-top: var(--spacing-md);
          padding: var(--spacing-sm);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: var(--font-sm);
          color: var(--text-muted);
        }
        .when-to-use strong {
          color: var(--text-primary);
        }
        .vs-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .vs-divider span {
          font-size: var(--font-lg);
          font-weight: 700;
          color: var(--text-muted);
        }
        .key-message {
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-secondary);
          border-left: 4px solid var(--netflix-red);
          font-size: var(--font-md);
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .key-message strong {
          color: var(--text-primary);
        }
      `}</style>
    </Slide>
  );
};

export default ProblemSlide;
