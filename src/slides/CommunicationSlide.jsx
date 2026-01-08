import Slide from '../components/Slide';

const CommunicationSlide = () => {
    return (
        <Slide>
            <h2>Service Communication</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                How our microservices talk to each other
            </p>

            <div className="two-columns">
                <div className="comm-section">
                    <h3>🔗 OpenFeign (Synchronous)</h3>
                    <p style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-md)' }}>
                        Declarative REST client for service-to-service calls
                    </p>

                    <div className="comm-examples">
                        <div className="comm-example">
                            <div className="comm-flow">
                                <span className="service-tag">Auth</span>
                                <span className="arrow">→</span>
                                <span className="service-tag">User</span>
                            </div>
                            <p>Create user profile on registration</p>
                        </div>
                        <div className="comm-example">
                            <div className="comm-flow">
                                <span className="service-tag">Streaming</span>
                                <span className="arrow">→</span>
                                <span className="service-tag">Content</span>
                            </div>
                            <p>Get video file path for streaming</p>
                        </div>
                        <div className="comm-example">
                            <div className="comm-flow">
                                <span className="service-tag">Profile</span>
                                <span className="arrow">→</span>
                                <span className="service-tag">Subscription</span>
                            </div>
                            <p>Check max profiles allowed</p>
                        </div>
                    </div>
                </div>

                <div className="comm-section">
                    <h3>🌐 Docker DNS</h3>
                    <p style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-md)' }}>
                        Service discovery without Eureka
                    </p>

                    <div className="dns-example">
                        <code>http://authentication-service:8000</code>
                        <code>http://user-service:9000</code>
                        <code>http://content-management-service:9200</code>
                    </div>

                    <div className="gateway-verification">
                        <h4>🛡️ Gateway Verification</h4>
                        <p>All services verify requests come from Gateway via:</p>
                        <code>X-Gateway-Request: true</code>
                        <p className="small">Direct access to services is forbidden</p>
                    </div>
                </div>
            </div>

            <style>{`
        .comm-section {
          background: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .comm-section h3 {
          font-size: var(--font-xl);
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }
        .comm-examples {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .comm-example {
          background: var(--bg-primary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
        }
        .comm-flow {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xs);
        }
        .service-tag {
          background: var(--netflix-red);
          color: white;
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          font-size: var(--font-sm);
          font-weight: 600;
        }
        .arrow {
          color: var(--text-muted);
          font-size: var(--font-lg);
        }
        .comm-example p {
          font-size: var(--font-sm);
          color: var(--text-muted);
        }
        .dns-example {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-lg);
        }
        .dns-example code {
          background: var(--bg-primary);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-sm);
          font-size: var(--font-sm);
          color: var(--text-secondary);
        }
        .gateway-verification {
          background: var(--bg-primary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--netflix-red);
        }
        .gateway-verification h4 {
          font-size: var(--font-md);
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }
        .gateway-verification code {
          display: block;
          background: var(--bg-secondary);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-sm);
          margin: var(--spacing-xs) 0;
          font-size: var(--font-sm);
        }
        .gateway-verification .small {
          font-size: var(--font-xs);
          color: var(--text-muted);
        }
      `}</style>
        </Slide>
    );
};

export default CommunicationSlide;
