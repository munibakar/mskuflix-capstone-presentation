import Slide from '../components/Slide';

const DeploymentSlide = () => {
  return (
    <Slide>
      <h2>Deployment Architecture</h2>
      <p style={{ marginBottom: 'var(--spacing-lg)' }}>
        Docker Swarm on 2 Physical Machines
      </p>

      <div className="deployment-layout">
        <div className="swarm-section">
          <div className="swarm-header">
            Docker Swarm Cluster
            <span className="overlay-tag">Overlay Network</span>
          </div>

          <div className="nodes-row">
            <div className="node">
              <div className="node-title">Manager Node</div>
              <div className="services-list">
                <div className="service-item">Config Server</div>
                <div className="service-item">API Gateway</div>
                <div className="service-item">All Databases (5)</div>
                <div className="service-item">Video Streaming</div>
              </div>
              <div className="node-desc">Orchestration & persistent data</div>
            </div>

            <div className="node">
              <div className="node-title">Worker Node</div>
              <div className="services-list">
                <div className="service-item">Auth Service</div>
                <div className="service-item">User Service</div>
                <div className="service-item">Profile Service</div>
                <div className="service-item">Subscription Service</div>
                <div className="service-item">Content Service</div>
              </div>
              <div className="node-desc">Scalable application services</div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <div className="feature-title">Replica Scaling</div>
              <p>Services can scale horizontally for load balancing</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div>
              <div className="feature-title">Health Checks</div>
              <p>Automatic restart on service failure</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <div>
              <div className="feature-title">Volume Mounts</div>
              <p>Persistent storage for databases & videos</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .deployment-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-xl);
          align-items: stretch;
        }
        .swarm-section {
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .swarm-header {
          background: var(--netflix-red);
          color: white;
          padding: var(--spacing-md) var(--spacing-lg);
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .overlay-tag {
          font-size: var(--font-xs);
          background: rgba(255,255,255,0.2);
          padding: 4px 12px;
          border-radius: var(--radius-sm);
        }
        .nodes-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
        }
        .node {
          background: var(--bg-primary);
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          border: 1px solid var(--bg-tertiary);
        }
        .node-title {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
          padding-bottom: var(--spacing-xs);
          border-bottom: 2px solid var(--bg-tertiary);
        }
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .service-item {
          font-size: var(--font-sm);
          color: var(--text-secondary);
          padding: 6px var(--spacing-sm);
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        .node-desc {
          font-size: var(--font-xs);
          color: var(--text-muted);
          margin-top: var(--spacing-sm);
          font-style: italic;
        }
        .features-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .feature-item {
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          flex: 1;
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
        }
        .feature-icon {
          width: 40px;
          height: 40px;
          background: var(--netflix-red);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .feature-title {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .feature-item p {
          font-size: var(--font-sm);
          color: var(--text-muted);
          margin: 0;
        }
      `}</style>
    </Slide>
  );
};

export default DeploymentSlide;
