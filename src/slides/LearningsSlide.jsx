import Slide from '../components/Slide';

const LearningsSlide = () => {
    const learnings = [
        { icon: '☕', title: 'Spring Boot Framework', desc: 'Building production-ready Java applications' },
        { icon: '🐳', title: 'Docker Swarm', desc: 'Container orchestration and service management' },
        { icon: '☸️', title: 'Kubernetes Basics', desc: 'Ingress, scaling, and cluster management' },
        { icon: '🏗️', title: 'Monolithic vs Microservices', desc: 'When to use each architecture' },
        { icon: '📡', title: 'Communication Protocols', desc: 'REST, gRPC, and when to use each' },
        { icon: '🔧', title: 'DevOps Skills', desc: 'Server setup, networking, deployment' },
        { icon: '🆔', title: 'ID Sharing Strategies', desc: 'UUID vs sequential IDs across services' },
        { icon: '📈', title: 'Replica Scaling', desc: 'Horizontal scaling of microservices' },
        { icon: '🎬', title: 'Netflix OSS', desc: 'Understanding Netflix\'s pioneering tools and patterns' }
    ];

    return (
        <Slide>
            <h2>What We Learned</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                Key takeaways from this project
            </p>

            <div className="learnings-grid">
                {learnings.map((l, idx) => (
                    <div key={idx} className="learning-card">
                        <span className="learning-icon">{l.icon}</span>
                        <div>
                            <h4>{l.title}</h4>
                            <p>{l.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .learnings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-md);
        }
        .learning-card {
          display: flex;
          gap: var(--spacing-sm);
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          border: 2px solid transparent;
        }
        .learning-card:hover {
          border-color: var(--netflix-red);
          transform: scale(1.02);
        }
        .learning-icon {
          font-size: var(--font-2xl);
          flex-shrink: 0;
        }
        .learning-card h4 {
          font-size: var(--font-md);
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .learning-card p {
          font-size: var(--font-sm);
          color: var(--text-muted);
        }
      `}</style>
        </Slide>
    );
};

export default LearningsSlide;
