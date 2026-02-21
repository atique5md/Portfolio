import React from 'react';
import profileImg from '../assets/profile.png'

const About = () => {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '6rem',
      alignItems: 'center',
      padding: '6rem 5%',
      background: '#0f0f0f'
    }}
      className="about-section"
    >
      
      <div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 4vw, 4rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }}>
          ABOUT
        </h2>

        <p style={{
          fontSize: '0.95rem',
          color: '#666',
          marginBottom: '2.5rem',
          letterSpacing: '0.02em'
        }}>
          atiquem550@gmail.com
        </p>

        <p style={{
          fontSize: '1.05rem',
          lineHeight: '1.9',
          color: '#aaa',
          marginBottom: '1.5rem',
          fontWeight: '300'
        }}>
          I am an MCA graduate and SDE aspirant with a background in building full-stack applications like Codeify (AI-powered web app) and ShareWheels (Android app) using Java, React, and Node.js. My past work emphasizes clean code, Data Structures & Algorithms, and delivering user-centric solutions in Agile environments.
        </p>

        <p style={{
          fontSize: '1.05rem',
          lineHeight: '1.9',
          color: '#aaa',
          fontWeight: '300'
        }}>
          I am now pivoting my expertise toward Cloud Architecture and DevOps to bridge the gap between development and operations. Leveraging my AWS Cloud Essentials certification, I am currently focused on mastering CI/CD pipelines, containerization, and Infrastructure as Code (IaC). My goal is to automate deployment lifecycles and build resilient, scalable cloud environments.
        </p>

        <div style={{
          marginTop: '3rem',
          padding: '2rem 0',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            textAlign: 'center',
            letterSpacing: '0.1em'
          }}>
            Noida, India
          </p>
          <p style={{
            fontSize: '0.85rem',
            color: '#666',
            textAlign: 'center',
            marginTop: '0.5rem'
          }}>
            Open for opportunities worldwide
          </p>
        </div>
      </div>

      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
        className="about-image"
      >
        <div style={{
          width: '100%',
          maxWidth: '500px',
          aspectRatio: '3/4',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #222',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Placeholder for profile image - Replace with your image */}
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
