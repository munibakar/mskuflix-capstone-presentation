import Slide from '../components/Slide';

const AgendaSlide = () => {
  const agenda = [
    { number: '01', title: 'Why This Project?', desc: 'Our motivation' },
    { number: '02', title: 'The Comparison', desc: 'Monolithic vs Microservices' },
    { number: '03', title: 'Technology Stack', desc: 'Tools and frameworks' },
    { number: '04', title: 'Microservices', desc: '8 independent services' },
    { number: '05', title: 'System Architecture', desc: 'High-level design' },
    { number: '06', title: 'Communication', desc: 'How services interact' },
    { number: '07', title: 'Deployment', desc: 'Docker Swarm setup' },
    { number: '08', title: 'Mobile & Web Client', desc: 'Flutter application' },
    { number: '09', title: 'Challenges & Learnings', desc: 'Our journey' },
    { number: '10', title: 'Future Paths', desc: 'What\'s next' },
  ];

  return (
    <Slide>
      <h2>Agenda</h2>
      <p style={{ marginBottom: 'var(--spacing-xl)' }}>
        What we'll cover in this presentation
      </p>

      <div className="agenda-grid">
        {agenda.map((item) => (
          <div key={item.number} className="agenda-item">
            <span className="agenda-number">{item.number}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .agenda-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
        }
        .agenda-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          transition: transform var(--transition-fast);
        }
        .agenda-item:hover {
          transform: translateX(8px);
        }
        .agenda-number {
          font-size: var(--font-2xl);
          font-weight: 700;
          color: var(--netflix-red);
          line-height: 1;
        }
        .agenda-item h4 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .agenda-item p {
          font-size: var(--font-sm);
          color: var(--text-muted);
        }
      `}</style>
    </Slide>
  );
};

export default AgendaSlide;
