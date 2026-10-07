import type { PageId } from './Navbar';

interface FooterProps {
  navigate: (page: PageId) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer
      style={{
        background: 'linear-gradient(160deg, #2C1810 0%, #4A2E1A 100%)',
        color: '#EDE3CF',
        padding: '3rem 1.5rem 2rem',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.4rem',
                color: '#F0C040',
                marginBottom: '0.5rem',
              }}
            >
              MAA'S Karigors
            </h3>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.8rem',
                color: '#C9B08A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              hands & heroes behind the idol
            </p>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.9rem',
                color: '#A89070',
                lineHeight: 1.65,
              }}
            >
              A student project documenting the artists, traditions, and living craft of Durga Puja idol-making in Bengal.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1rem',
                color: '#E8921A',
                marginBottom: '1rem',
              }}
            >
              Explore
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { id: 'heroes' as PageId, label: 'Heroes of Clay' },
                { id: 'styles' as PageId, label: 'Idol Styles' },
                { id: 'making' as PageId, label: 'Making the Goddess' },
                { id: 'folk' as PageId, label: 'Folk Stories' },
                { id: 'oral' as PageId, label: 'Stories to Remember' },
                { id: 'archive' as PageId, label: 'Artist Archive' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: '0.9rem',
                    color: '#C9B08A',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#F0C040')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#C9B08A')}
                >
                  → {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1rem',
                color: '#E8921A',
                marginBottom: '1rem',
              }}
            >
              About This Project
            </h4>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.9rem',
                color: '#A89070',
                lineHeight: 1.65,
                marginBottom: '0.75rem',
              }}
            >
              MAA'S Karigors is a cultural archive and digital museum project dedicated to the artisans — the karigors — who create the Durga Puja idols of Bengal.
            </p>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.85rem',
                color: '#7A5A3E',
                lineHeight: 1.65,
              }}
            >
              All artist information is documented with permission. Archive links direct to original sources. Folk traditions are clearly labelled.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid rgba(196, 30, 46, 0.3)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.8rem',
              color: '#7A5A3E',
            }}
          >
            © 2024 MAA'S Karigors — A student research project. All rights to original sources belong to their respective owners.
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '0.85rem',
              color: '#C41E2E',
              fontStyle: 'italic',
            }}
          >
            "Aashchhe bochhor aabar hobe"
          </p>
        </div>
      </div>
    </footer>
  );
}
