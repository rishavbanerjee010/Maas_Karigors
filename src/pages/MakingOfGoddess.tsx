import { useState } from 'react';
import { makingSteps, sustainabilityContent } from '../data/makingSteps';
import { stepImages } from '../data/images';

export default function MakingOfGoddess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="page-transition">
      {/* Page hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4A2E1A 0%, #2C1810 100%)',
          padding: '7rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="alpana-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#E8921A',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            The Process
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FDF8EF',
              marginBottom: '1rem',
            }}
          >
            Making of the Goddess
          </h1>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#C9B08A',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}
          >
            From the first cut of bamboo to the final immersion in the river — ten steps in the creation of a Durga idol.
          </p>
        </div>
      </section>

      {/* Timeline layout */}
      <section style={{ padding: '4rem 1.5rem', background: '#FDF8EF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 3fr',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Step sidebar */}
            <div
              style={{
                position: 'sticky',
                top: '80px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7A5A3E',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}
              >
                Steps
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {makingSteps.map((step) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(step.step)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.6rem 0.75rem',
                      background: activeStep === step.step ? 'rgba(196, 30, 46, 0.08)' : 'transparent',
                      border: 'none',
                      borderLeft: `3px solid ${activeStep === step.step ? '#C41E2E' : 'transparent'}`,
                      borderRadius: '0 0.375rem 0.375rem 0',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.18s',
                    }}
                  >
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: activeStep === step.step ? '#C41E2E' : '#EDE3CF',
                        color: activeStep === step.step ? '#FDF8EF' : '#4A2E1A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        flexShrink: 0,
                        transition: 'all 0.18s',
                      }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: '0.85rem',
                          color: activeStep === step.step ? '#C41E2E' : '#2C1810',
                          fontWeight: activeStep === step.step ? 600 : 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {step.name}
                      </span>
                      {step.bengaliName && (
                        <span style={{ display: 'block', fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.72rem', color: '#A89070' }}>
                          {step.bengaliName}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <style>{`
                @media (max-width: 768px) {
                  .making-sidebar { display: none; }
                }
              `}</style>
            </div>

            {/* Active step detail */}
            <div>
              {makingSteps.map((step) => {
                if (step.step !== activeStep) return null;
                return (
                  <div key={step.step} style={{ animation: 'pageFade 0.3s ease-out' }}>
                    <img
                      src={stepImages[step.step]}
                      alt={`${step.name}: ${step.description}`}
                      style={{
                        width: '100%',
                        height: 'clamp(220px, 40vw, 380px)',
                        objectFit: 'cover',
                        borderRadius: '0.875rem',
                        marginBottom: '1rem',
                        display: 'block',
                      }}
                    />
                    {/* Step header */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #2C1810 0%, #4A2E1A 100%)',
                        borderRadius: '0.875rem',
                        padding: '2rem',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="alpana-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                      <div style={{ position: 'relative', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: '#C41E2E',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.75rem',
                            flexShrink: 0,
                          }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: '0.7rem',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: '#E8921A',
                              fontWeight: 700,
                              marginBottom: '0.25rem',
                            }}
                          >
                            Step {step.step} of {makingSteps.length} · {step.duration}
                          </p>
                          <h2
                            style={{
                              fontFamily: "'Playfair Display', Georgia, serif",
                              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                              color: '#FDF8EF',
                              marginBottom: '0.25rem',
                            }}
                          >
                            {step.name}
                          </h2>
                          {step.bengaliName && (
                            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1rem', color: '#C9B08A' }}>
                              {step.bengaliName}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      style={{
                        background: '#FFFDF7',
                        border: '1px solid #D4C5A9',
                        borderRadius: '0.875rem',
                        padding: '2rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: '1.1rem',
                          fontStyle: 'italic',
                          color: '#4A2E1A',
                          marginBottom: '1.25rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {step.description}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.95rem',
                          color: '#3A1E0A',
                          lineHeight: 1.8,
                        }}
                      >
                        {step.details}
                      </p>
                    </div>

                    {/* Materials */}
                    {step.materials && (
                      <div
                        style={{
                          background: '#FFF8E7',
                          border: '1px solid rgba(232, 146, 26, 0.3)',
                          borderRadius: '0.75rem',
                          padding: '1.25rem',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#B8860B',
                            fontWeight: 700,
                            marginBottom: '0.75rem',
                          }}
                        >
                          Materials Used
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {step.materials.map((mat, i) => (
                            <span
                              key={i}
                              style={{
                                background: '#FFFBF0',
                                border: '1px solid #E8921A40',
                                borderRadius: '0.375rem',
                                padding: '0.25rem 0.625rem',
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: '0.83rem',
                                color: '#7A4010',
                              }}
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Ritual note */}
                    {step.ritual && (
                      <div
                        style={{
                          background: 'rgba(196, 30, 46, 0.04)',
                          border: '1px solid rgba(196, 30, 46, 0.2)',
                          borderLeft: '4px solid #C41E2E',
                          borderRadius: '0 0.75rem 0.75rem 0',
                          padding: '1.25rem',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#C41E2E',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                          }}
                        >
                          🕉 Ritual Significance
                        </h4>
                        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.88rem', color: '#3A1E0A', lineHeight: 1.7 }}>
                          {step.ritual}
                        </p>
                      </div>
                    )}

                    {/* Navigation */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
                      <button
                        onClick={() => setActiveStep(Math.max(1, step.step - 1))}
                        disabled={step.step === 1}
                        style={{
                          padding: '0.6rem 1.25rem',
                          background: step.step === 1 ? '#EDE3CF' : '#FDF8EF',
                          border: '1px solid #D4C5A9',
                          borderRadius: '0.5rem',
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: step.step === 1 ? '#A89070' : '#4A2E1A',
                          cursor: step.step === 1 ? 'not-allowed' : 'pointer',
                          transition: 'all 0.18s',
                        }}
                      >
                        ← Previous Step
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(makingSteps.length, step.step + 1))}
                        disabled={step.step === makingSteps.length}
                        style={{
                          padding: '0.6rem 1.25rem',
                          background: step.step === makingSteps.length ? '#EDE3CF' : '#C41E2E',
                          border: '1px solid transparent',
                          borderRadius: '0.5rem',
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: step.step === makingSteps.length ? '#A89070' : '#FDF8EF',
                          cursor: step.step === makingSteps.length ? 'not-allowed' : 'pointer',
                          transition: 'all 0.18s',
                        }}
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile step pills */}
          <div
            style={{
              display: 'none',
              flexWrap: 'wrap',
              gap: '0.5rem',
              margin: '2rem 0',
            }}
            className="mobile-steps"
          >
            {makingSteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  border: `1.5px solid ${activeStep === step.step ? '#C41E2E' : '#D4C5A9'}`,
                  background: activeStep === step.step ? '#C41E2E' : 'transparent',
                  color: activeStep === step.step ? '#FDF8EF' : '#4A2E1A',
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {step.icon} {step.step}. {step.name}
              </button>
            ))}
          </div>
          <style>{`@media (max-width: 768px) { .mobile-steps { display: flex !important; } }`}</style>
        </div>
      </section>

      {/* Sustainability section */}
      <section style={{ padding: '4rem 1.5rem', background: '#F5EDD8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#3D7873',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              Ecology & Tradition
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#2C1810',
              }}
            >
              {sustainabilityContent.title}
            </h2>
          </div>

          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1rem',
              color: '#3A1E0A',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
            }}
          >
            {sustainabilityContent.intro}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {sustainabilityContent.sections.map((sec, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFDF7',
                  border: '1px solid #D4C5A9',
                  borderLeft: '4px solid #3D7873',
                  borderRadius: '0 0.75rem 0.75rem 0',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    color: '#3D7873',
                    marginBottom: '0.625rem',
                  }}
                >
                  {sec.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: '0.92rem',
                    color: '#3A1E0A',
                    lineHeight: 1.75,
                  }}
                >
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
