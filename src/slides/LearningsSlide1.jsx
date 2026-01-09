import Slide from '../components/Slide';

const LearningsSlide1 = () => {
    return (
        <Slide>
            <h2>What We Learned</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                Technical skills and frameworks
            </p>

            <div className="learnings-grid">
                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">01</span>
                        <h4>Spring Boot Framework</h4>
                    </div>
                    <p>
                        Building production-ready Java applications with Spring Boot, including
                        dependency injection, auto-configuration, and the Spring Cloud ecosystem.
                    </p>
                </div>

                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">02</span>
                        <h4>Docker & Docker Swarm</h4>
                    </div>
                    <p>
                        Containerization with Docker, multi-container orchestration with Docker Compose,
                        and cluster management with Docker Swarm.
                    </p>
                </div>

                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">03</span>
                        <h4>Kubernetes Fundamentals</h4>
                    </div>
                    <p>
                        Understanding pods, deployments, services, and ingress controllers for
                        future Kubernetes adoption.
                    </p>
                </div>

                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">04</span>
                        <h4>Monolithic vs Microservices</h4>
                    </div>
                    <p>
                        When to choose each architecture: monoliths for simpler applications,
                        microservices for complex domains.
                    </p>
                </div>

                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">05</span>
                        <h4>Communication Protocols</h4>
                    </div>
                    <p>
                        REST for synchronous patterns, gRPC for internal communication, and
                        message queues for async processing.
                    </p>
                </div>

                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">06</span>
                        <h4>DevOps Fundamentals</h4>
                    </div>
                    <p>
                        Server provisioning, SSH configuration, firewall management, and
                        deployment automation.
                    </p>
                </div>

                <div className="learning-item">
                    <div className="learning-header">
                        <span className="learning-number">07</span>
                        <h4>Replica Scaling</h4>
                    </div>
                    <p>
                        Horizontal scaling of microservices with load balancing, stateless
                        vs stateful services, and session affinity.
                    </p>
                </div>

                <div className="learning-item featured">
                    <div className="learning-header">
                        <span className="learning-number">08</span>
                        <h4>Netflix Engineering Culture</h4>
                    </div>
                    <p>
                        How Netflix pioneered microservices, their open-source contributions
                        (Eureka, Zuul, Hystrix) that shaped distributed systems.
                    </p>
                </div>
            </div>

            <style>{`
        .learnings-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-md);
        }
        .learning-item {
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          border-top: 3px solid var(--netflix-red);
        }
        .learning-item.featured {
          background: #FFF5F5;
        }
        .learning-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-xs);
        }
        .learning-number {
          font-size: var(--font-md);
          font-weight: 700;
          color: var(--netflix-red);
        }
        .learning-item h4 {
          font-size: var(--font-sm);
          color: var(--text-primary);
          margin: 0;
        }
        .learning-item p {
          font-size: var(--font-xs);
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }
        @media (max-width: 1400px) {
          .learnings-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-sm);
          }
          .learning-item {
            padding: var(--spacing-sm);
          }
        }
        @media (max-width: 900px) {
          .learnings-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </Slide>
    );
};

export default LearningsSlide1;
