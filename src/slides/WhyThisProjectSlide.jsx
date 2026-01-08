import Slide from '../components/Slide';

const WhyThisProjectSlide = () => {
  return (
    <Slide>
      <h2>Why This Project?</h2>

      <div className="why-content">
        <div className="goal-section">
          <h3>The Goal</h3>
          <p className="goal-main">
            Our primary objective was to deeply understand the differences between
            <strong> monolithic</strong> and <strong>microservices</strong> architectures
            — not just in theory, but through hands-on implementation.
          </p>
          <p className="goal-secondary">
            We wanted to experience firsthand the challenges and benefits of building
            a distributed system, and create a foundation for future research in
            SDN, security, and AI optimization.
          </p>
        </div>

        <div className="netflix-section">
          <h3>Why Netflix as a Reference?</h3>
          <div className="netflix-reasons">
            <div className="reason">
              <span className="reason-number">01</span>
              <div>
                <strong>Pioneer of Microservices</strong>
                <p>Netflix was one of the first companies to successfully migrate from a monolithic architecture to microservices at massive scale.</p>
              </div>
            </div>
            <div className="reason">
              <span className="reason-number">02</span>
              <div>
                <strong>Open Source Contributions</strong>
                <p>They open-sourced many tools: Eureka, Zuul, Hystrix, Ribbon — the Spring Cloud ecosystem is built on Netflix OSS.</p>
              </div>
            </div>
            <div className="reason">
              <span className="reason-number">03</span>
              <div>
                <strong>Real-World Complexity</strong>
                <p>A streaming platform involves authentication, profiles, subscriptions, content management, and video delivery.</p>
              </div>
            </div>
            <div className="reason">
              <span className="reason-number">04</span>
              <div>
                <strong>Documented Architecture</strong>
                <p>Netflix extensively documents their engineering decisions, providing valuable learning resources.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: start;
        }
        .goal-section h3,
        .netflix-section h3 {
          font-size: var(--font-xl);
          color: var(--netflix-red);
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-xs);
          border-bottom: 2px solid var(--bg-tertiary);
        }
        .goal-main {
          font-size: var(--font-lg);
          color: var(--text-primary);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }
        .goal-main strong {
          color: var(--netflix-red);
        }
        .goal-secondary {
          font-size: var(--font-md);
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .netflix-reasons {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .reason {
          display: flex;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
        }
        .reason-number {
          font-size: var(--font-lg);
          font-weight: 700;
          color: var(--netflix-red);
          flex-shrink: 0;
        }
        .reason strong {
          display: block;
          font-size: var(--font-md);
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        .reason p {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.4;
          margin: 0;
        }
      `}</style>
    </Slide>
  );
};

export default WhyThisProjectSlide;
