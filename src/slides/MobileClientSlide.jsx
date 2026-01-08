import Slide from '../components/Slide';

const MobileClientSlide = () => {
    return (
        <Slide>
            <h2>Mobile & Web Client</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                Flutter-based cross-platform application
            </p>

            <div className="two-columns">
                <div className="client-info">
                    <div className="platform-support">
                        <h4>📱 Supported Platforms</h4>
                        <div className="platforms">
                            <span className="platform">iOS</span>
                            <span className="platform">Android</span>
                            <span className="platform">Web</span>
                            <span className="platform dim">Windows</span>
                            <span className="platform dim">macOS</span>
                            <span className="platform dim">Linux</span>
                        </div>
                    </div>

                    <div className="tech-used">
                        <h4>🛠️ Technologies</h4>
                        <ul>
                            <li><strong>Riverpod</strong> - State Management</li>
                            <li><strong>Dio</strong> - HTTP Client with interceptors</li>
                            <li><strong>GetIt</strong> - Dependency Injection</li>
                            <li><strong>Video Player</strong> - Video streaming support</li>
                        </ul>
                    </div>

                    <div className="arch-structure">
                        <h4>📁 Project Structure</h4>
                        <div className="folder-tree">
                            <div className="folder">lib/</div>
                            <div className="folder indent">core/ <span>DI, Network, Theme, Widgets</span></div>
                            <div className="folder indent">features/ <span>Feature-first modules</span></div>
                            <div className="folder indent2">auth/</div>
                            <div className="folder indent2">content/</div>
                            <div className="folder indent2">profile/</div>
                            <div className="folder indent2">subscription/</div>
                        </div>
                    </div>
                </div>

                <div className="features-list">
                    <h4>✨ Implemented Features</h4>
                    <div className="feature-checks">
                        <div className="check-item">✓ Onboarding screens</div>
                        <div className="check-item">✓ Login / Register (Email & Google)</div>
                        <div className="check-item">✓ Subscription plan selection</div>
                        <div className="check-item">✓ Payment page</div>
                        <div className="check-item">✓ Profile selection (Netflix-style)</div>
                        <div className="check-item">✓ Home page with content</div>
                        <div className="check-item">✓ Video streaming</div>
                        <div className="check-item">✓ Dark theme (Netflix)</div>
                        <div className="check-item">✓ Turkish & English localization</div>
                    </div>
                </div>
            </div>

            <style>{`
        .client-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .client-info h4 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }
        .platforms {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }
        .platform {
          background: var(--netflix-red);
          color: white;
          padding: 6px 16px;
          border-radius: var(--radius-sm);
          font-size: var(--font-sm);
          font-weight: 500;
        }
        .platform.dim {
          background: var(--bg-tertiary);
          color: var(--text-muted);
        }
        .tech-used ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        .tech-used li {
          font-size: var(--font-md);
          color: var(--text-secondary);
        }
        .folder-tree {
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          font-family: monospace;
          font-size: var(--font-sm);
        }
        .folder {
          padding: 4px 0;
          color: var(--text-primary);
        }
        .folder span {
          color: var(--text-muted);
          font-style: italic;
        }
        .indent { padding-left: 20px; }
        .indent2 { padding-left: 40px; color: var(--text-muted); }
        .features-list {
          background: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .features-list h4 {
          font-size: var(--font-lg);
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }
        .feature-checks {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .check-item {
          font-size: var(--font-md);
          color: var(--text-secondary);
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid var(--bg-tertiary);
        }
        .check-item::first-letter {
          color: var(--accent-success);
          font-weight: bold;
        }
      `}</style>
        </Slide>
    );
};

export default MobileClientSlide;
