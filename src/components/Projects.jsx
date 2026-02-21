import React from 'react';

import project1Img from '../assets/MERN.jpg';  // ← Add these
import project2Img from '../assets/ml.jpg';
import project3Img from '../assets/android.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Fixify– AI-Powered Code Review Web Application",
      description: "Fixify is a full-stack web application built with React, Node.js, and Google Gemini API that automates code reviews and bug detection across multiple languages. I designed a high-performance split-view UI with Prism.js for syntax highlighting and React-Markdown for structured AI feedback. A key challenge I overcame was optimizing API response latency and formatting raw LLM data into actionable, developer-friendly suggestions for real-time performance and security fixes.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: project1Img,
      github: "https://github.com/atique5md/Fixify-AI-",
      live: "#"
    },
    {
      title: "ShareWheels– Android Ride-Sharing App",
      description: "ShareWheels is a real-time Android ride-sharing app built with Java and Firebase, featuring secure authentication and live GPS tracking via the Google Maps API. I developed a scalable architecture using Fragments within an Agile team to ensure modular code and streamlined ride flows. A key challenge I overcame was optimizing real-time location updates to ensure precise driver tracking while minimizing battery consumption through efficient Firebase data synchronization.",
      tech: ["Java", "Android Studio", "Firebase", "Room DB", "Google Map API"],
      image: project3Img,
      github: "https://github.com/atique5md/ShareWheels",
      live: "#"
    },
    {
      title: "Book Recommendation System– Machine Learning Project ",
      description: "This Book Recommendation System uses Python and Scikit-learn to deliver personalized suggestions through a Collaborative Filtering engine, achieving 95% test accuracy. I engineered a robust Pandas-based pipeline for data cleaning and feature transformation to ensure high-quality model inputs. A primary challenge I solved was overcoming data sparsity by implementing custom filtering thresholds, ensuring the recommendation logic remained accurate and scalable for real-world e-commerce scenarios.",
      tech: ["Python", "Pandas", "NumPy", "Flask", "Scikit-learn"],
      image: project2Img,
      github: "https://github.com/atique5md/Recommendation-system",
      live: "#"
    }
  ];

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '6rem 5%',
      background: '#0f0f0f'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }}>
          PORTFOLIO
        </h2>

        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '4rem',
          letterSpacing: '0.05em'
        }}>
          FEATURED PROJECTS
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: '#0a0a0a',
                border: '1px solid #222',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#444';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Project Image Placeholder */}

              <div style={{
                height: '250px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid #222',
                position: 'relative'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                
              </div>

              {/* Project Info */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#ffffff',
                  letterSpacing: '-0.01em'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: '#888',
                  marginBottom: '1.5rem',
                  lineHeight: '1.7',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.4rem 0.9rem',
                        background: '#1a1a1a',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: '#888',
                        border: '1px solid #222',
                        fontWeight: '400'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #1a1a1a'
                }}>
                  <a
                    href={project.github}
                    style={{
                      fontSize: '0.85rem',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      letterSpacing: '0.02em',
                      fontWeight: '400'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#888'}
                  >
                    View Code →
                  </a>
                  {/* <a
                    href={project.live}
                    style={{
                      fontSize: '0.85rem',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      letterSpacing: '0.02em',
                      fontWeight: '400'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#888'}
                  >
                    Live Demo →
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
