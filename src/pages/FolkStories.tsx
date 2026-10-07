import { useState } from 'react';
import { folkStories, type StoryCategory } from '../data/folkStories';

const categoryConfig: Record<StoryCategory, { label: string; color: string; bg: string; tagClass: string }> = {
  ritual: { label: 'Documented Ritual', color: '#1B5E20', bg: '#E8F5E9', tagClass: 'tag-documented' },
  documented: { label: 'Documented History', color: '#1B5E20', bg: '#E8F5E9', tagClass: 'tag-documented' },
  folklore: { label: 'Folklore / Legend', color: '#BF360C', bg: '#FFF3E0', tagClass: 'tag-folklore' },
  tradition: { label: 'Living Tradition', color: '#4A148C', bg: '#F3E5F5', tagClass: 'tag-tradition' },
};

export default function FolkStories() {
  const [expandedId, setExpandedId] = useState<string>('bodhon');

  return (
    <div className="page-transition">
      {/* Page hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #3D7873 0%, #2D5A56 100%)',
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
              color: 'rgba(253,248,239,0.8)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            Traditions & Legends
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FDF8EF',
              marginBottom: '1rem',
            }}
          >
            Folk Stories
          </h1>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(253,248,239,0.85)',
              maxWidth: '600px',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            The stories, rituals, and traditions surrounding Durga Puja — clearly labelled as documented history or folk legend.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="tag-documented">Documented</span>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.78rem', color: 'rgba(253,248,239,0.7)' }}>
                — recorded in historical/religious texts
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="tag-folklore">Folklore</span>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.78rem', color: 'rgba(253,248,239,0.7)' }}>
                — oral tradition, legend, not canonical
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="tag-tradition">Tradition</span>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.78rem', color: 'rgba(253,248,239,0.7)' }}>
                — living practice, documented but living
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section style={{ padding: '4rem 1.5rem', background: '#FDF8EF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {folkStories.map((story) => {
              const config = categoryConfig[story.category];
              const isOpen = expandedId === story.id;

              return (
                <div
                  key={story.id}
                  style={{
                    background: '#FFFDF7',
                    border: '1px solid #D4C5A9',
                    borderRadius: '0.875rem',
                    overflow: 'hidden',
                  }}
                >
                  {/* Story header — always visible */}
                  <button
                    onClick={() => setExpandedId(isOpen ? '' : story.id)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '1.75rem',
                      display: 'block',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '4px',
                          background: config.color,
                          borderRadius: '2px',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.625rem' }}>
                          <span className={config.tagClass}>{config.label}</span>
                          {story.bengaliTitle && (
                            <span
                              style={{
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: '0.8rem',
                                color: '#7A5A3E',
                              }}
                            >
                              {story.bengaliTitle}
                            </span>
                          )}
                        </div>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                            color: '#2C1810',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {story.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontStyle: 'italic',
                            fontSize: '0.9rem',
                            color: '#4A2E1A',
                            lineHeight: 1.55,
                          }}
                        >
                          {story.tagline}
                        </p>
                      </div>
                      <span
                        style={{
                          color: '#C41E2E',
                          fontSize: '1.25rem',
                          flexShrink: 0,
                          transition: 'transform 0.2s',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      >
                        ↓
                      </span>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div
                      style={{
                        borderTop: '1px solid #EDE3CF',
                        padding: '1.75rem',
                        background: '#FDF8EF',
                        animation: 'pageFade 0.25s ease-out',
                      }}
                    >
                      {/* Story paragraphs */}
                      <div style={{ marginBottom: '1.75rem' }}>
                        {story.content.map((para, i) => (
                          <p
                            key={i}
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: '0.95rem',
                              color: '#3A1E0A',
                              lineHeight: 1.8,
                              marginBottom: i < story.content.length - 1 ? '1rem' : 0,
                            }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Scholarly note */}
                      <div
                        style={{
                          background: config.bg,
                          border: `1px solid ${config.color}30`,
                          borderRadius: '0.5rem',
                          padding: '1rem 1.25rem',
                          marginBottom: story.relatedCustoms ? '1.25rem' : 0,
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: '0.82rem',
                            color: '#3A1E0A',
                            lineHeight: 1.65,
                          }}
                        >
                          <strong
                            style={{
                              color: config.color,
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: '0.75rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              display: 'block',
                              marginBottom: '0.35rem',
                            }}
                          >
                            📌 Scholarly Note
                          </strong>
                          {story.note}
                        </p>
                      </div>

                      {/* Related customs */}
                      {story.relatedCustoms && (
                        <div>
                          <h4
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: '0.75rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: '#7A5A3E',
                              fontWeight: 700,
                              marginBottom: '0.625rem',
                            }}
                          >
                            Related Customs & Practices
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {story.relatedCustoms.map((custom, i) => (
                              <span
                                key={i}
                                style={{
                                  background: '#EDE3CF',
                                  borderRadius: '0.375rem',
                                  padding: '0.25rem 0.625rem',
                                  fontFamily: "'Source Sans 3', sans-serif",
                                  fontSize: '0.82rem',
                                  color: '#4A2E1A',
                                }}
                              >
                                {custom}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section style={{ background: '#F5EDD8', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.88rem',
              color: '#7A5A3E',
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: '#4A2E1A' }}>A note on categorisation:</strong> The distinction between "documented" and "folklore" in religious and cultural traditions is never perfectly clean. What is labelled folklore here may have deep emotional and social truth. These labels reflect the state of scholarly documentation, not a hierarchy of importance or authenticity.
          </p>
        </div>
      </section>
    </div>
  );
}
