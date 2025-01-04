import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="glow-divider"></div>
      <div className="social-links">
        <div className="social-group">
          <h3>Stay Updated</h3>
          <div className="social-buttons">
            <Link href="https://twitter.com/Rate_Caster" target="_blank" className="social-link">
              Twitter
            </Link>
            <Link href="https://discord.gg/gzP64gEpTM" target="_blank" className="social-link">
              Discord
            </Link>
            <Link href="https://t.me/BBB_inc" target="_blank" className="social-link">
              Telegram
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 4rem 2rem 2rem;
          text-align: center;
          position: relative;
        }

        .glow-divider {
          height: 2px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto 3rem;
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff,
            #ff8a00
          );
          opacity: 0.5;
          border-radius: 4px;
        }

        .social-group {
          margin-bottom: 2rem;
        }

        .social-group h3 {
          color: #B794F4;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .social-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .social-link {
          color: #ffffff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(183, 148, 244, 0.3);
          border-radius: 8px;
          transition: all 0.3s ease;
          background: rgba(183, 148, 244, 0.05);
        }

        .social-link:hover {
          border-color: rgba(183, 148, 244, 0.5);
          box-shadow: 0 0 20px rgba(183, 148, 244, 0.2);
          background: rgba(183, 148, 244, 0.1);
        }

        @media (max-width: 640px) {
          .social-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .social-link {
            width: 200px;
          }
        }
      `}</style>
    </footer>
  )
} 