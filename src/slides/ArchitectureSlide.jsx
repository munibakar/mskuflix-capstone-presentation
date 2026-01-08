import Slide from '../components/Slide';

const ArchitectureSlide = () => {
  return (
    <Slide variant="centered">
      <h2>System Architecture</h2>

      <img
        src="/architecture.png"
        alt="System Architecture Diagram"
        className="architecture-image"
      />

      <style>{`
        .architecture-image {
          max-width: 100%;
          max-height: 580px;
          object-fit: contain;
          margin-top: var(--spacing-sm);
        }
      `}</style>
    </Slide>
  );
};

export default ArchitectureSlide;
