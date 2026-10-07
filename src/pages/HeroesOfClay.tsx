import { useState } from 'react';
import { artists, type Artist } from '../data/artists';
import { artistFallbackImage } from '../data/images';

interface ArtistCardProps {
  artist: Artist;
  index: number;
  onExpand: (id: string) => void;
  isExpanded: boolean;
}

function ArtistCard({ artist, index, onExpand, isExpanded }: ArtistCardProps) {
  return (
    <div
      className="card-lift"
      style={{
        background: '#FFFDF7',
        border: '1px solid #D4C5A9',
        borderRadius: '0.875rem',
        overflow: 'hidden',
        transition: 'all 0.25s ease',
      }}
    >
      <div style={{ height: '240px', position: 'relative', overflow: 'hidden', background: '#EDE3CF' }}>
        <img
          src={artist.imageUrl ?? artistFallbackImage(index)}
          alt={artist.imageUrl ? artist.name : `A Kumartuli karigor at work (representative photo for ${artist.name})`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '1.5rem 1rem 0.5rem',
            background: 'linear-gradient(to top, rgba(44,24,16,0.85), transparent)',
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '0.68rem',
            color: '#F5EDD8',
            fontStyle: 'italic',
          }}
        >
          {artist.imageUrl ? artist.imageCredit : 'Representative photo: karigor at work in Kumartuli'}
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#2C1810',
              marginBottom: '0.25rem',
            }}
          >
            {artist.name}
          </h3>
          {artist.bengaliName && (
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.9rem',
                color: '#7A5A3E',
                marginBottom: '0.35rem',
              }}
            >
              {artist.bengaliName}
            </p>
          )}
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.75rem',
              color: '#C41E2E',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            📍 {artist.location}
          </p>
        </div>

        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '0.95rem',
            fontStyle: 'italic',
            color: '#4A2E1A',
            lineHeight: 1.55,
            marginBottom: '0.875rem',
          }}
        >
          {artist.tagline}
        </p>

        {artist.specialty && (
          <div style={{ marginBottom: '1rem' }}>
            <span
              style={{
                display: 'inline-block',
                background: '#FFF3E0',
                border: '1px solid #E8921A40',
                borderRadius: '0.375rem',
                padding: '0.2rem 0.5rem',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.72rem',
                color: '#B8860B',
                fontWeight: 600,
              }}
            >
              🎨 {artist.specialty}
            </span>
          </div>
        )}

        {artist.yearsActive && (
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.78rem', color: '#A89070', marginBottom: '1rem' }}>
            Active: {artist.yearsActive}
          </p>
        )}

        <button
          onClick={() => onExpand(isExpanded ? '' : artist.id)}
          style={{
            width: '100%',
            background: isExpanded ? '#C41E2E' : 'transparent',
            border: `1.5px solid ${isExpanded ? '#C41E2E' : '#D4C5A9'}`,
            borderRadius: '0.5rem',
            padding: '0.6rem 1rem',
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 600,
            color: isExpanded ? '#FDF8EF' : '#C41E2E',
            cursor: 'pointer',
            transition: 'all 0.18s',
          }}
        >
          {isExpanded ? 'Close Profile ↑' : 'Read Full Profile ↓'}
        </button>
      </div>

      {/* Expanded profile */}
      {isExpanded && (
        <div
          style={{
            borderTop: '1px solid #EDE3CF',
            padding: '1.75rem',
            background: '#FDF8EF',
            animation: 'pageFade 0.3s ease-out',
          }}
        >
          {[
            { label: 'Biography', content: artist.bio, icon: '📝' },
            { label: 'Family & Heritage', content: artist.family, icon: '🏡' },
            { label: 'Livelihood', content: artist.livelihood, icon: '💼' },
            { label: 'Struggles', content: artist.struggles, icon: '⚡' },
            { label: 'Achievements', content: artist.achievements, icon: '🏆' },
          ].map((section) => (
            <div key={section.label} style={{ marginBottom: '1.5rem' }}>
              <h4
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1rem',
                  color: '#C41E2E',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>{section.icon}</span>
                {section.label}
              </h4>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.92rem',
                  color: '#3A1E0A',
                  lineHeight: 1.75,
                }}
              >
                {section.content}
              </p>
            </div>
          ))}

          {/* Source links */}
          {artist.links.length > 0 && (
            <div>
              <h4
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1rem',
                  color: '#C41E2E',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>🔗</span> Sources & Further Reading
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {artist.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: '0.85rem',
                      color: '#3D7873',
                      textDecoration: 'underline',
                      textDecorationColor: '#3D787360',
                      padding: '0.3rem 0',
                      transition: 'color 0.15s',
                    }}
                  >
                    <span>↗</span>
                    {link.label}
                    <span
                      style={{
                        fontSize: '0.7rem',
                        background: '#EDE3CF',
                        borderRadius: '0.25rem',
                        padding: '0.05rem 0.35rem',
                        color: '#7A5A3E',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        textDecoration: 'none',
                      }}
                    >
                      {link.type}
                    </span>
                  </a>
                ))}
              </div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.73rem', color: '#A89070', marginTop: '0.75rem', fontStyle: 'italic' }}>
                Note: Verify all links before submission. Links are provided as example sources only.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function HeroesOfClay() {
  const [expandedId, setExpandedId] = useState<string>('');

  return (
    <div className="page-transition">
      {/* Page hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2C1810 0%, #7B2338 100%)',
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
              color: '#E8921A',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            The Artists
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FDF8EF',
              marginBottom: '1rem',
            }}
          >
            Heroes of Clay
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
            Eight karigors — the artists whose hands shape the goddess each year. Their lives, families, craft, and legacy.
          </p>
        </div>
      </section>

      {/* Artist grid */}
      <section style={{ padding: '4rem 1.5rem', background: '#FDF8EF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {artists.map((artist, i) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                index={i}
                onExpand={setExpandedId}
                isExpanded={expandedId === artist.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community note */}
      <section style={{ background: '#F5EDD8', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🏺</span>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              color: '#2C1810',
              marginBottom: '0.75rem',
            }}
          >
            The Karigor Community
          </h3>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.95rem',
              color: '#4A2E1A',
              lineHeight: 1.7,
            }}
          >
            The Pal and Paul communities (Kumbhakar caste) are the hereditary potters and idol-makers of Bengal. Their craft is passed down through families, workshops, and neighbourhoods — particularly in Kumartuli (North Kolkata) and Krishnanagar (Nadia district). The eight karigors profiled here represent a sample of this rich community.
          </p>
        </div>
      </section>
    </div>
  );
}
