import Slide from '../components/Slide';

const TechStackSlide = () => {
    const techCategories = [
        {
            title: 'Backend',
            items: [
                'Spring Boot 3',
                'Spring Cloud Gateway',
                'Spring Security + JWT',
                'Spring Data JPA',
                'OpenFeign (Service Communication)',
                'PostgreSQL 16'
            ]
        },
        {
            title: 'Frontend',
            items: [
                'Flutter 3.8+',
                'Riverpod (State Management)',
                'Dio (HTTP Client)',
                'GetIt (Dependency Injection)',
                'Multi-platform (iOS, Android, Web)'
            ]
        },
        {
            title: 'DevOps & Infrastructure',
            items: [
                'Docker & Docker Compose',
                'Docker Swarm (Orchestration)',
                'Overlay Network',
                'Health Checks',
                'GitHub (Version Control)'
            ]
        }
    ];

    const principles = [
        { icon: '🗄️', title: 'Database per Service', desc: 'Each service has its own PostgreSQL database' },
        { icon: '🚪', title: 'API Gateway Pattern', desc: 'Single entry point for all client requests' },
        { icon: '⚙️', title: 'Externalized Config', desc: 'Centralized configuration with Config Server' },
        { icon: '🔗', title: 'Docker DNS', desc: 'Service discovery via container names' }
    ];

    return (
        <Slide>
            <h2>Technology Stack</h2>

            <div className="tech-grid">
                {techCategories.map((category) => (
                    <div key={category.title} className="tech-category">
                        <h4>{category.title}</h4>
                        <ul>
                            {category.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="principles-section">
                <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
                    Architecture Principles
                </h3>
                <div className="principles-grid">
                    {principles.map((p) => (
                        <div key={p.title} className="principle-card">
                            <span className="principle-icon">{p.icon}</span>
                            <div>
                                <strong>{p.title}</strong>
                                <p>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }
        .tech-category h4 {
          font-size: var(--font-lg);
          color: var(--netflix-red);
          margin-bottom: var(--spacing-sm);
          padding-bottom: var(--spacing-xs);
          border-bottom: 2px solid var(--bg-tertiary);
        }
        .tech-category ul {
          list-style: none;
        }
        .tech-category li {
          padding: var(--spacing-xs) 0;
          font-size: var(--font-md);
          color: var(--text-secondary);
          border-bottom: 1px solid var(--bg-secondary);
        }
        .tech-category li:last-child {
          border-bottom: none;
        }
        .principles-section {
          background: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-md);
        }
        .principle-card {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
        }
        .principle-icon {
          font-size: var(--font-xl);
        }
        .principle-card strong {
          display: block;
          font-size: var(--font-md);
          color: var(--text-primary);
        }
        .principle-card p {
          font-size: var(--font-sm);
          color: var(--text-muted);
          margin-top: 2px;
        }
      `}</style>
        </Slide>
    );
};

export default TechStackSlide;
