import Slide from '../components/Slide';

const ChallengesSlide1 = () => {
    return (
        <Slide>
            <h2>Challenges We Faced</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                Infrastructure and deployment obstacles
            </p>

            <div className="challenges-list">
                <div className="challenge-item">
                    <div className="challenge-header">
                        <span className="challenge-number">01</span>
                        <h4>Technology Stack Selection</h4>
                    </div>
                    <p>
                        Choosing the right tools for our ecosystem was overwhelming. We evaluated Eureka
                        vs. Consul for service discovery, Zuul vs. Spring Cloud Gateway, and various
                        communication patterns. Each choice had trade-offs we had to understand before
                        committing. We eventually chose Spring Cloud ecosystem for its maturity and
                        documentation.
                    </p>
                </div>

                <div className="challenge-item">
                    <div className="challenge-header">
                        <span className="challenge-number">02</span>
                        <h4>Server Setup & Hosting</h4>
                    </div>
                    <p>
                        Converting our physical machines into production servers required understanding
                        networking, port forwarding, firewall rules, and DNS configuration. We had to
                        ensure reliable connectivity and proper security measures before hosting our backend.
                    </p>
                </div>

                <div className="challenge-item">
                    <div className="challenge-header">
                        <span className="challenge-number">03</span>
                        <h4>Service Distribution Across Machines</h4>
                    </div>
                    <p>
                        Distributing microservices across multiple physical machines introduced complexity
                        in service discovery, network latency, and ensuring consistent deployments. We had
                        to carefully plan which services should run where based on resource requirements.
                    </p>
                </div>

                <div className="challenge-item">
                    <div className="challenge-header">
                        <span className="challenge-number">04</span>
                        <h4>Defining Service Boundaries</h4>
                    </div>
                    <p>
                        Determining the right scope for each microservice was difficult. Should Profile
                        be separate from User? How much should Content Management handle? We learned that
                        too granular leads to excessive network calls, while too broad defeats the purpose.
                        Finding the balance required multiple iterations.
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
        .challenge-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }
        .challenge-number {
          font-size: var(--font-xl);
          font-weight: 700;
          color: var(--netflix-red);
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

export default ChallengesSlide1;
