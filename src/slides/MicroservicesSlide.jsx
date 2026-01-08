import Slide from '../components/Slide';

const MicroservicesSlide = () => {
  const services = [
    {
      name: 'API Gateway',
      port: '8765',
      desc: 'Single entry point. Routes requests, validates JWT tokens, handles load balancing.',
      color: '#E50914'
    },
    {
      name: 'Authentication',
      port: '8000',
      desc: 'User registration, login (email & Google OAuth), JWT token management.',
      color: '#E50914'
    },
    {
      name: 'User Service',
      port: '9000',
      desc: 'Manages user profile information. Separated from auth for security.',
      color: '#E50914'
    },
    {
      name: 'Profile Service',
      port: '9001',
      desc: 'Multiple profiles per account. Kids mode, language preferences.',
      color: '#E50914'
    },
    {
      name: 'Subscription',
      port: '9100',
      desc: 'Subscription plans (Basic/Standard/Premium), billing, payment methods.',
      color: '#E50914'
    },
    {
      name: 'Content Management',
      port: '9200',
      desc: 'Movie/TV series catalog. Genres, cast, seasons, episodes.',
      color: '#E50914'
    },
    {
      name: 'Video Streaming',
      port: '9300',
      desc: 'HTTP Range streaming for video playback with seeking support.',
      color: '#E50914'
    },
    {
      name: 'Config Server',
      port: '8888',
      desc: 'Centralized configuration management for all services.',
      color: '#757575'
    }
  ];

  return (
    <Slide>
      <h2>Microservices Overview</h2>
      <p style={{ marginBottom: 'var(--spacing-lg)' }}>
        8 independent services, each with a single responsibility
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.name} className="service-card" style={{ borderTopColor: service.color }}>
            <div className="service-header">
              <h4>{service.name}</h4>
              <span className="port">:{service.port}</span>
            </div>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-md);
        }
        .service-card {
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          border-top: 3px solid;
          transition: transform var(--transition-fast);
        }
        .service-card:hover {
          transform: translateY(-2px);
        }
        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: var(--spacing-xs);
        }
        .service-card h4 {
          font-size: var(--font-md);
          color: var(--text-primary);
          margin: 0;
        }
        .service-card .port {
          font-size: var(--font-xs);
          color: var(--netflix-red);
          font-weight: 600;
        }
        .service-card p {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.4;
          margin: 0;
          text-align: left;
        }
      `}</style>
    </Slide>
  );
};

export default MicroservicesSlide;
