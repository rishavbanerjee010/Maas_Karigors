import { useState } from 'react';
import { idolStyles, type StyleCategory } from '../data/idolStyles';
import { styleImages } from '../data/images';

const categoryLabels: Record<StyleCategory, { label: string; color: string; bg: string }> = {
  structural: { label: 'Structural Form', color: '#C41E2E', bg: '#FFF3F3' },
  decorative: { label: 'Decorative Style', color: '#B8860B', bg: '#FFFBF0' },
  thematic: { label: 'Thematic / Modern', color: '#3D7873', bg: '#F0FAF9' },
  regional: { label: 'Regional / International', color: '#7B2338', bg: '#FFF0F4' },
};

export default function IdolStyles() {
  const [activeCategory, setActiveCategory] = useState<StyleCategory | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string>('');

  const filtered = activeCategory === 'all'
    ? idolStyles
    : idolStyles.filter((s) => s.category === activeCategory);

  return (
    <div className="page-transition">
      {/* Page hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #B8860B 0%, #E8921A 50%, #C41E2E 100%)',
          padding: '7rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="alpana-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
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
            Visual Vocabulary
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FDF8EF',
              marginBottom: '1rem',
            }}
          >
            Idol Styles
          </h1>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(253,248,239,0.85)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}
          >
            Ten distinct forms through which Durga has been imagined across Bengal — from ancient structural traditions to contemporary experiments.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        style={{
          background: '#FDF8EF',
          padding: '2rem 1.5rem 0',
          borderBottom: '1px solid #EDE3CF',
          position: 'sticky',
          top: '60px',
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            paddingBottom: '1rem',
          }}
        >
          {(['all', 'structural', 'decorative', 'thematic', 'regional'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '999px',
                border: `1.5px solid ${activeCategory === cat ? '#C41E2E' : '#D4C5A9'}`,
                background: activeCategory === cat ? '#C41E2E' : 'transparent',
                color: activeCategory === cat ? '#FDF8EF' : '#4A2E1A',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s',
                letterSpacing: '0.02em',
              }}
            >
              {cat === 'all' ? 'All Styles' : categoryLabels[cat].label}
            </button>
          ))}
        </div>
      </section>

      {/* Styles grid */}
      <section style={{ padding: '3rem 1.5rem', background: '#FDF8EF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map((style) => {
              const catMeta = categoryLabels[style.category];
              const isOpen = expandedId === style.id;

              return (
                <div
                  key={style.id}
                  className="card-lift"
                  style={{
                    background: '#FFFDF7',
                    border: '1px solid #D4C5A9',
                    borderRadius: '0.875rem',
                    overflow: 'hidden',
                  }}
                >
                  {styleImages[style.id] && (
                    <img
                      src={styleImages[style.id]}
                      alt={`${style.name} Durga idol style`}
                      loading="lazy"
                      style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                    />
                  )}
                  {/* Colour header */}
                  <div
                    style={{
                      background: catMeta.bg,
                      borderBottom: `3px solid ${catMeta.color}`,
                      padding: '1.25rem 1.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          background: catMeta.bg,
                          border: `1px solid ${catMeta.color}40`,
                          borderRadius: '999px',
                          padding: '0.15rem 0.6rem',
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.68rem',
                          color: catMeta.color,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {catMeta.label}
                      </span>
                      {!style.isHistoryDocumented && (
                        <span className="tag-folklore">Folklore</span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '1.35rem',
                        color: '#2C1810',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {style.name}
                    </h3>
                    {style.bengaliName && (
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.9rem', color: '#7A5A3E' }}>
                        {style.bengaliName}
                      </p>
                    )}
                  </div>

                  {/* Body */}
                  <div style={{ padding: '1.5rem' }}>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        color: '#4A2E1A',
                        lineHeight: 1.55,
                        marginBottom: '1rem',
                      }}
                    >
                      {style.tagline}
                    </p>

                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: '0.88rem',
                        color: '#3A1E0A',
                        lineHeight: 1.7,
                        marginBottom: '1rem',
                      }}
                    >
                      {style.description}
                    </p>

                    {/* Key features */}
                    <div style={{ marginBottom: '1rem' }}>
                      {style.keyFeatures.map((feat, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.4rem',
                            marginBottom: '0.3rem',
                          }}
                        >
                          <span style={{ color: catMeta.color, flexShrink: 0, fontSize: '0.7rem', marginTop: '0.25rem' }}>◆</span>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.82rem', color: '#4A2E1A', lineHeight: 1.5 }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedId(isOpen ? '' : style.id)}
                      style={{
                        background: 'none',
                        border: `1px solid ${catMeta.color}50`,
                        borderRadius: '0.375rem',
                        padding: '0.45rem 0.875rem',
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: catMeta.color,
                        cursor: 'pointer',
                        transition: 'all 0.18s',
                      }}
                    >
                      {isOpen ? 'Less ↑' : 'History & Significance ↓'}
                    </button>
                  </div>

                  {/* Expanded */}
                  {isOpen && (
                    <div
                      style={{
                        borderTop: '1px solid #EDE3CF',
                        padding: '1.5rem',
                        background: '#FDF8EF',
                        animation: 'pageFade 0.25s ease-out',
                      }}
                    >
                      <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', color: '#2C1810' }}>
                            Historical Context
                          </h4>
                          {style.isHistoryDocumented
                            ? <span className="tag-documented">Documented</span>
                            : <span className="tag-folklore">Folklore / Debate</span>
                          }
                        </div>
                        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.87rem', color: '#3A1E0A', lineHeight: 1.7 }}>
                          {style.historicalContext}
                        </p>
                      </div>

                      <div style={{ marginBottom: '1.25rem' }}>
                        <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', color: '#2C1810', marginBottom: '0.5rem' }}>
                          Folk & Cultural Significance
                        </h4>
                        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.87rem', color: '#3A1E0A', lineHeight: 1.7 }}>
                          {style.folkSignificance}
                        </p>
                      </div>

                      {style.historyNote && (
                        <div
                          style={{
                            background: '#FFF8E7',
                            border: '1px solid #E8921A40',
                            borderRadius: '0.5rem',
                            padding: '0.875rem',
                          }}
                        >
                          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.82rem', color: '#7A4010', lineHeight: 1.6 }}>
                            <strong>📌 Note:</strong> {style.historyNote}
                          </p>
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
    </div>
  );
}
