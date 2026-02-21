import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/Md_Resume_Cloud.pdf'; // Update this path to your resume file
    link.download = 'Md_Atique_Resume.pdf'; // Update with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 5%',
      background: '#0f0f0f'
    }}
    className="resume-section"
    >
      <div style={{
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          margin: '0 auto 2rem',
          background: '#1a1a1a',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #222'
        }}>
          <Download size={36} color="#888" />
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }}>
          DOWNLOAD RESUME
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#888',
          marginBottom: '3rem',
          lineHeight: '1.8'
        }}>
          Android Developer | Full Stack & MERN Stack | Cloud & DevOps | Machine Learning
        </p>

        <button
          onClick={handleDownload}
          style={{
            padding: '1rem 3rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid #444',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem'
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
          <Download size={18} />
          Download PDF
        </button>

        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          paddingTop: '3rem',
          borderTop: '1px solid #222'
        }}>
          {[
            { label: 'Format', value: 'PDF' },
            { label: 'Size', value: '1 MB' },
            { label: 'Updated', value: 'Feb 2025' }
          ].map((info, index) => (
            <div key={index}>
              <div style={{
                fontSize: '0.75rem',
                color: '#666',
                marginBottom: '0.5rem',
                letterSpacing: '0.05em'
              }}>
                {info.label}
              </div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#aaa'
              }}>
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
