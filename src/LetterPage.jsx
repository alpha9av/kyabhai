import React from 'react';

export default function LetterPage() {
  return (
    <>
      <style>{`
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #111;
          color: #e6e6e6;
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Tech-style grid background overlay */
        .grid-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          /* Main grid lines every 64px, sub-grid lines every 16px */
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px,
              transparent 16px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px,
              transparent 16px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px,
              transparent 64px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px,
              transparent 64px
            );
          /* Adjust grid spacing or opacity here if needed:
             - Change 16px to adjust sub-grid spacing
             - Change 64px to adjust main grid spacing
             - Change rgba opacity values (0.02 and 0.05) to adjust visibility
          */
        }

        /* Skip link for accessibility */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 100;
        }

        .skip-link:focus {
          top: 0;
        }

        /* Main container */
        .letter-container {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          padding: 48px 24px 64px;
          text-align: left;
        }

        /* Logo section */
        .logo-section {
          text-align: center;
          margin-bottom: 64px;
        }

        .logo-section img {
          max-width: 200px;
          height: auto;
          display: inline-block;
        }

        /* Content sections */
        .content-section {
          margin-bottom: 32px;
        }

        .content-section p {
          margin-bottom: 20px;
        }

        .content-section p:last-child {
          margin-bottom: 0;
        }

        /* Headings */
        h1, h2, h3 {
          font-weight: 600;
          margin-bottom: 16px;
          color: #f5f5f5;
        }

        h1 {
          font-size: 28px;
          line-height: 1.3;
        }

        h2 {
          font-size: 22px;
          line-height: 1.4;
        }

        h3 {
          font-size: 18px;
          line-height: 1.4;
        }

        /* Links */
        a {
          color: #9fc3ff;
          text-decoration: underline;
          transition: color 0.2s ease;
        }

        a:hover {
          color: #c5daff;
        }

        a:focus {
          outline: 2px solid #9fc3ff;
          outline-offset: 2px;
        }

        /* Divider */
        .divider {
          color: #444;
          font-family: monospace;
          margin: 48px 0;
          letter-spacing: 2px;
        }

        /* Hiring section */
        .hiring-section {
          margin-top: 48px;
          padding-top: 32px;
        }

        /* Signature */
        .signature {
          margin-top: 40px;
          font-style: italic;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          body {
            font-size: 15px;
          }

          .letter-container {
            padding: 24px 20px 48px;
          }

          .logo-section {
            margin-bottom: 48px;
          }

          .logo-section img {
            max-width: 160px;
          }

          h1 {
            font-size: 24px;
          }

          h2 {
            font-size: 20px;
          }

          h3 {
            font-size: 17px;
          }

          .divider {
            margin: 32px 0;
          }

          .hiring-section {
            margin-top: 32px;
            padding-top: 24px;
          }
        }

        /* Slight offset on large screens */
        @media (min-width: 1200px) {
          .letter-container {
            margin-left: calc(50% - 300px);
            margin-right: auto;
          }
        }
      `}</style>

      {/* Tech-style grid background */}
      <div className="grid-background" aria-hidden="true"></div>

      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Main content */}
      <div className="letter-container">
        {/* Logo section */}
        <header className="logo-section">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            loading="eager"
          />
        </header>

        {/* Main content area */}
        <main id="main-content">
          <article className="content-section">
            <p>
              Dear Reader,
            </p>
            <p>
              We are writing to share our vision for the future and invite you to be part of something extraordinary.
              Our mission is to build technology that empowers people and transforms industries through innovation,
              collaboration, and unwavering commitment to excellence.
            </p>
            <p>
              Over the past few years, we have grown from a small team with a bold idea into a thriving organization
              that serves thousands of users worldwide. This journey has been marked by challenges, breakthroughs,
              and the relentless pursuit of creating products that matter.
            </p>
            <p>
              What sets us apart is not just our technology, but our people. We believe that the best solutions
              emerge when diverse minds come together to solve complex problems. Every member of our team brings
              unique perspectives, skills, and passion to the table, creating an environment where innovation thrives.
            </p>
            <p>
              Looking ahead, we see tremendous opportunities to expand our impact. We are investing heavily in
              research and development, exploring new technologies, and building partnerships that will enable us
              to reach new heights. Our roadmap is ambitious, but we have never been more confident in our ability
              to execute.
            </p>
            <p>
              We invite you to join us on this journey. Whether as a user, partner, or team member, there are
              countless ways to get involved and make a difference. Together, we can build the future we all
              want to see.
            </p>
          </article>

          {/* Dashed divider */}
          <div className="divider" aria-hidden="true">
            --------
          </div>

          {/* Hiring section */}
          <section className="hiring-section">
            <h2>We are hiring</h2>
            <p>
              We are always looking for talented individuals who share our passion for innovation and excellence.
              If you are excited about working on challenging problems with a world-class team, we would love to
              hear from you.
            </p>
            <p>
              Check out our <a href="/careers">open positions</a> or reach out directly at{' '}
              <a href="mailto:careers@company.com">careers@company.com</a>.
            </p>
          </section>

          {/* Signature */}
          <div className="signature">
            <p>
              With gratitude,
            </p>
            <p>
              The Team
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
