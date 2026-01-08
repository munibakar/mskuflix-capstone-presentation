import Slide from '../components/Slide';

const ChallengesSlide = () => {
    const challenges = [
        {
            icon: '🖥️',
            title: 'Server Setup',
            desc: 'Converting physical machines to servers and hosting our backend'
        },
        {
            icon: '🔄',
            title: 'Service Distribution',
            desc: 'Distributing services across multiple physical machines'
        },
        {
            icon: '🌐',
            title: 'Docker Swarm Network',
            desc: 'Setting up overlay network between physical machines'
        },
        {
            icon: '🧰',
            title: 'Technology Selection',
            desc: 'Choosing the right tools (Eureka, Spring Cloud) for our ecosystem'
        },
        {
            icon: '🔗',
            title: 'Service Communication',
            desc: 'Inter-service communication and UUID synchronization challenges'
        },
        {
            icon: '📏',
            title: 'System Scope',
            desc: 'Defining and managing the scope of microservices'
        },
        {
            icon: '⚡',
            title: 'Response Time',
            desc: 'Still optimizing request-response times between services'
        },
        {
            icon: '🎯',
            title: 'Kubernetes vs Simple',
            desc: 'Started with Kubernetes, had to step back to simpler Docker setup first'
        }
    ];

    return (
        <Slide>
            <h2>Challenges We Faced</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                Key obstacles during development
            </p>

            <div className="challenges-grid">
                {challenges.map((c, idx) => (
                    <div key={idx} className="challenge-card">
                        <span className="challenge-icon">{c.icon}</span>
                        <div>
                            <h4>{c.title}</h4>
                            <p>{c.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lesson-learned">
                <span>💡</span>
                <p>
                    <strong>Key Lesson:</strong> Start simple, then scale. We learned that trying to implement
                    Kubernetes before mastering Docker basics led to conflicts and wasted time.
                </p>
            </div>

            <style>{`
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        .challenge-card {
          display: flex;
          gap: var(--spacing-md);
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          transition: transform var(--transition-fast);
        }
        .challenge-card:hover {
          transform: translateX(4px);
        }
        .challenge-icon {
          font-size: var(--font-2xl);
          flex-shrink: 0;
        }
        .challenge-card h4 {
          font-size: var(--font-md);
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .challenge-card p {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.4;
        }
        .lesson-learned {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
          background: #FFF3CD;
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          border-left: 4px solid #FFC107;
        }
        .lesson-learned span {
          font-size: var(--font-2xl);
        }
        .lesson-learned p {
          font-size: var(--font-md);
          color: var(--text-primary);
        }
        .lesson-learned strong {
          color: #856404;
        }
      `}</style>
        </Slide>
    );
};

export default ChallengesSlide;
