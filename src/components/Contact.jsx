import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 5%',
      background: '#0a0a0a'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }}>
          GET IN TOUCH
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#888',
          marginBottom: '3rem',
          lineHeight: '1.8'
        }}>
          I'm always open to new opportunities and collaborations.
          <br />
          Feel free to reach out!
        </p>

        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '4rem'
        }}>
          <a
            href="mailto:atiquem550@gmail.com"
            style={{
              color: '#888',
              transition: 'all 0.3s ease',
              display: 'flex'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = '#888'}
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/atique5md"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#888',
              transition: 'all 0.3s ease',
              display: 'flex'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = '#888'}
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/md-55-atique"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#888',
              transition: 'all 0.3s ease',
              display: 'flex'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = '#888'}
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div style={{
          padding: '2rem 0',
          borderTop: '1px solid #1a1a1a',
          fontSize: '0.85rem',
          color: '#666',
          letterSpacing: '0.05em'
        }}>
          © 2026 MdAtique. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
