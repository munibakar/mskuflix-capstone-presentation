import Slide from '../components/Slide';

const ChallengesSlide2 = () => {
  return (
    <Slide>
      <h2>Challenges We Faced</h2>
      <p style={{ marginBottom: 'var(--spacing-lg)' }}>
        Architecture and communication obstacles
      </p>

      <div className="challenges-list">
        <div className="challenge-item">
          <div className="challenge-header">
            <span className="challenge-number">05</span>
            <h4>Docker Swarm</h4>
          </div>
          <p>
            Setting up an overlay network between physical machines required proper Swarm
            initialization, correct firewall ports (2377, 7946, 4789), and troubleshooting
            connectivity issues. Container-to-container communication across nodes was initially
            unreliable until we properly configured the overlay driver.
          </p>
        </div>

        <div className="challenge-item">
          <div className="challenge-header">
            <span className="challenge-number">06</span>
            <h4>Kubernetes</h4>
          </div>
          <p>
            We initially attempted to set up Kubernetes for orchestration, thinking it would
            be our final goal. However, skipping the simpler Docker Compose/Swarm step caused
            conflicts and confusion. We had to step back, master the basics first, and then
            plan for Kubernetes migration — a valuable lesson in incremental complexity.
          </p>
        </div>

        <div className="challenge-item">
          <div className="challenge-header">
            <span className="challenge-number">07</span>
            <h4>Inter-Service Communication & ID Sync</h4>
          </div>
          <p>
            Ensuring consistent data across services was challenging. We had to decide between
            UUIDs and sequential IDs, handle eventual consistency, and implement proper error
            handling when services were unavailable. The saga pattern for user registration
            (Auth → User Service) required careful rollback logic.
          </p>
        </div>

        <div className="challenge-item ongoing">
          <div className="challenge-header">
            <span className="challenge-number">08</span>
            <h4>Response Time Optimization</h4>
            <span className="ongoing-tag">Ongoing</span>
          </div>
          <p>
            We're still working on optimizing request-response times between services.
            Chained synchronous calls add latency, and we're exploring caching strategies,
            connection pooling, and potentially async messaging for non-critical paths to
            improve overall system performance.
          </p>
        </div>
      </div>

      <style>{`
        .challenges-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }
        .challenge-item {
          background: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--netflix-red);
        }
        .challenge-item.ongoing {
          border-left-color: #F5A623;
        }
        .challenge-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          flex-wrap: wrap;
        }
        .challenge-number {
          font-size: var(--font-xl);
          font-weight: 700;
          color: var(--netflix-red);
        }
        .ongoing .challenge-number {
          color: #F5A623;
        }
        .ongoing-tag {
          font-size: var(--font-xs);
          background: #FFF3CD;
          color: #856404;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          margin-left: auto;
        }
        .challenge-item h4 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin: 0;
        }
        .challenge-item p {
          font-size: var(--font-md);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 1400px) {
          .challenges-list {
            gap: var(--spacing-sm);
          }
          .challenge-item {
            padding: var(--spacing-sm);
          }
          .challenge-item p {
            font-size: var(--font-sm);
          }
        }
        @media (max-width: 900px) {
          .challenges-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Slide>
  );
};

export default ChallengesSlide2;
