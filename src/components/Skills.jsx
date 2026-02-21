import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "FULL STACK DEVELOPMENT",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "ANDROID DEVELOPMENT",
      skills: [
        { name: "Java", level: 75 },
        { name: "API-Keys", level: 80 },
        { name: "Android Studio", level: 85 },
        { name: "XML", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Material Design", level: 85 }
      ]
    },
    {
      title: "CLOUD & DEVOPS",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 65 },
        { name: "Kubernetes", level: 50 },
        { name: "CI/CD", level: 60 },
        { name: "Jenkins", level: 60 },
        { name: "Linux", level: 90 }
      ]
    },
    {
      title: "OTHER TECHNOLOGIES",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "Python", level: 85 },
        { name: "Machine Learning", level: 65 },
        { name: "Postman", level: 65 },
        { name: "Redux", level: 80 }
      ]
    },
    
  ];

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '6rem 5%',
      background: '#0a0a0a'
    }}
    className="skills-section"
    >
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
          RESUME
        </h2>

        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '4rem',
          letterSpacing: '0.05em'
        }}>
          SKILLS & EXPERTISE
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '2rem',
                color: '#ffffff',
                letterSpacing: '0.1em'
              }}>
                {category.title}
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem'
                    }}>
                      <span style={{
                        fontSize: '0.9rem',
                        color: '#aaa',
                        fontWeight: '400'
                      }}>
                        {skill.name}
                      </span>
                    </div>
                    
                    <div style={{
                      width: '100%',
                      height: '2px',
                      background: '#1a1a1a',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${skill.level}%`,
                        background: '#ffffff',
                        borderRadius: '2px',
                        transition: 'width 1s ease-out'
                      }}>
                        <div style={{
                          position: 'absolute',
                          right: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '8px',
                          height: '8px',
                          background: '#ffffff',
                          borderRadius: '50%',
                          boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
                        }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
