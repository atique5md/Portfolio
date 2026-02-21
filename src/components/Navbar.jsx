import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, menuOpen, setMenuOpen, scrollToSection }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(15, 15, 15, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #222',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#ffffff',
          letterSpacing: '0.05em'
        }}>
          PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '3rem',
        }} className="desktop-menu">
          {['Home', 'About', 'Resume', 'Portfolio'].map((section, index) => {
            const sectionId = section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase();
            return (
              <button
                key={section}
                onClick={() => scrollToSection(sectionId)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === sectionId ? '#ffffff' : '#888',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  fontWeight: '400',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = activeSection === sectionId ? '#ffffff' : '#888'}
              >
                {section}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(15, 15, 15, 0.98)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid #222'
        }} className="mobile-menu">
          {['Home', 'About', 'Resume', 'Portfolio'].map(section => {
            const sectionId = section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase();
            return (
              <button
                key={section}
                onClick={() => scrollToSection(sectionId)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '0.5rem',
                  fontWeight: '400',
                  letterSpacing: '0.05em'
                }}
              >
                {section}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
