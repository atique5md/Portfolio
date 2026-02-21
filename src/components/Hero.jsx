import React from 'react';
import { Github, Linkedin, Mail  } from 'lucide-react';
// import{Facebook, Instagram, Twitter} from 'lucide-react';
import heroImg from '../assets/self.jpg';

const Hero = ({ scrollToSection }) => {
  const socialLinks = [
    // { icon: <Instagram size={18} />, url: 'https://instagram.com/yourusername' },
    // { icon: <Facebook size={18} />, url: 'https://facebook.com/yourusername' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/md-55-atique' },
    { icon: <Github size={18} />, url: 'https://github.com/atique5md' },
    
    { icon: <Mail size={18} />, url: 'mailto:atiquem550@gmail.com' }
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: '4rem',
      padding: '0 5%',
      background: '#0f0f0f',
      position: 'relative'
    }}
      className="hero-section"
    >
      <div style={{
        zIndex: 2
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: '300',
          color: '#ffffff',
          marginBottom: '0.5rem',
          letterSpacing: '0.05em',
          lineHeight: '1.2'
        }}>
          Hi I'm <br />MD ATIQUE
        </h1>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: '700',
          color: '#ffffff',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
          lineHeight: '1.1'
        }}>
          DEVELOPER
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#888',
          marginBottom: '2.5rem',
          fontWeight: '300',
          letterSpacing: '0.1em'
        }}>
          Cloud, Full Stack & Android Developer
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => scrollToSection('resume')}
            style={{
              padding: '0.9rem 2.2rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid #444',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#1a1a1a';
              e.target.style.borderColor = '#666';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = '#444';
            }}
          >
            Resume
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            style={{
              padding: '0.9rem 2.2rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid #444',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#1a1a1a';
              e.target.style.borderColor = '#666';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = '#444';
            }}
          >
            Portfolio
          </button>
        </div>

        {/* Social Icons */}
        <div style={{
          display: 'flex',
          gap: '1.2rem',
          alignItems: 'center'
        }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
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
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      {/* righ-side */}
      <div style={{
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
        className="hero-image"
      >
        <div style={{
          width: '100%',
          height: '100%',
          marginTop: '75px',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #222',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/*  Placeholder for workspace image - Replace with your image  */}
          {
            <img
              src={heroImg}
              alt="Workspace"
              style={{
                width: '100%',
                height: '100%',
                mixBlendMode: 'luminosity',
                objectFit: 'cover',

              }}
            />
            }  
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
