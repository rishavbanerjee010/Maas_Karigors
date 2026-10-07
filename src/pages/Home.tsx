import { homeHeroImage } from '../data/images';
import type { PageId } from '../components/Navbar';

interface HomeProps {
  navigate: (page: PageId) => void;
}

const navCards = [
  {
    id: 'heroes' as PageId,
    title: 'Heroes of Clay',
    subtitle: '8 karigor profiles',
    desc: 'The artists behind the goddess — their lives, families, struggles, and legacies.',
    color: '#C41E2E',
    icon: '🏺',
  },
  {
    id: 'styles' as PageId,
    title: 'Idol Styles',
    subtitle: '10 distinct forms',
    desc: 'From Ek Chala to Experimental — the visual vocabulary of Durga idol-making.',
    color: '#E8921A',
    icon: '🎨',
  },
  {
    id: 'making' as PageId,
    title: 'Making the Goddess',
    subtitle: '10-step process',
    desc: 'From bamboo framework to Bisarjan — the full journey of creation.',
    color: '#7B2338',
    icon: '✋',
  },
  {
    id: 'folk' as PageId,
    title: 'Folk Stories',
    subtitle: '6 traditions',
    desc: 'Bodhon, Chokkhu Daan, the sacred soil — stories marked folklore or documented.',
    color: '#3D7873',
    icon: '📖',
  },
  {
    id: 'oral' as PageId,
    title: 'Stories to Remember',
    subtitle: 'Oral histories',
    desc: 'Interview cards and recordings from the karigors themselves.',
    color: '#B8860B',
    icon: '🎙',
  },
  {
    id: 'archive' as PageId,
    title: 'Artist Archive',
    subtitle: 'Videos, news & more',
    desc: 'Curated links to articles, films, and interviews about these artists.',
    color: '#4A2E1A',
    icon: '📁',
  },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #2C1810 0%, #4A2010 30%, #7B2338 60%, #C41E2E 85%, #E8921A 100%)',
        }}
      >
        <img
          src={homeHeroImage}
          alt="Maa Durga idol"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(44,24,16,0.92) 0%, rgba(74,32,16,0.6) 45%, rgba(123,35,56,0.35) 100%)',
          }}
        />
        {/* Decorative alpana pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(232, 146, 26, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(196, 30, 46, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(184, 134, 11, 0.08) 0%, transparent 60%)
            `,
            pointerEvents: 'none',
          }}
        />
        {/* Alpana dot pattern */}
        <div
          className="alpana-bg"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8rem 2rem 4rem',
            width: '100%',
          }}
        >
          {/* Overline */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              background: 'rgba(232, 146, 26, 0.15)',
              border: '1px solid rgba(232, 146, 26, 0.4)',
              borderRadius: '999px',
              padding: '0.3rem 0.9rem',
            }}
          >
            <span style={{ color: '#F0C040', fontSize: '0.75rem', fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
              A Cultural Archive Project
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 900,
              color: '#FDF8EF',
              lineHeight: 1.05,
              marginBottom: '0.75rem',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            MAA'S <span style={{ color: '#F0C040' }}>Karigors</span>
          </h1>

          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic',
              color: '#EDE3CF',
              marginBottom: '2.5rem',
              letterSpacing: '0.02em',
            }}
          >
            hands and heroes behind the idol
          </p>

          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#C9B08A',
              maxWidth: '600px',
              lineHeight: 1.7,
              marginBottom: '3rem',
              fontStyle: 'italic',
            }}
          >
            "Before there are lights, beauty and colours that slay, there are just hands covered in mud, bamboo and clay."
          </p>

          <button
            onClick={() => navigate('heroes')}
            style={{
              background: '#C41E2E',
              color: '#FDF8EF',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.875rem 2rem',
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.03em',
              transition: 'all 0.2s',
              boxShadow: '0 4px 20px rgba(196, 30, 46, 0.4)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#9B1520';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#C41E2E';
              (e.currentTarget as HTMLButtonElement).style.transform = 'none';
            }}
          >
            Meet the Karigors →
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'rgba(253, 248, 239, 0.5)',
            fontSize: '0.75rem',
            fontFamily: "'Source Sans 3', sans-serif",
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        >
          <span>Scroll</span>
          <span style={{ fontSize: '1.2rem' }}>↓</span>
        </div>
        <style>{`@keyframes pulse { 0%,100%{opacity:.4}50%{opacity:1} }`}</style>
      </section>

      {/* Article Section */}
      <section
        style={{
          background: '#FDF8EF',
          padding: '5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Article header */}
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div className="ornament-divider" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: '#C41E2E', fontSize: '1.2rem' }}>❧</span>
            </div>
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
              From the Project
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: '#2C1810',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              Behind Every Idol, There Is an Artist
            </h2>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.1rem',
                color: '#7A5A3E',
                fontStyle: 'italic',
              }}
            >
              On the invisible hands that bring the goddess to life
            </p>
          </div>

          {/* Article body */}
          <div className="prose-cultural">
            <p>
              Every autumn, Kolkata becomes a city of goddesses. For five days, millions of people — in the city, across Bengal, and among Bengali communities scattered around the world — gather around elaborately constructed temporary shrines to worship Durga, the ten-armed mother goddess who kills the buffalo-demon Mahishasura and restores the cosmic order. The pandals (temporary structures) range from humble neighbourhood courtyards to architectural spectacles that draw international tourists. The goddess at the centre of each of them is a clay idol.
            </p>

            <blockquote className="pull-quote" style={{ margin: '2rem 0' }}>
              Before there are lights, beauty and colours that slay, there are just hands covered in mud, bamboo and clay.
            </blockquote>

            <p>
              What most of the millions of devotees do not pause to consider — caught up, as they rightly are, in the spectacle and the feeling — is that every one of these idols was made by a human being. A karigor. An artisan who spent months in a workshop, usually a cramped lane in a neighbourhood like Kumartuli in North Kolkata, building the goddess from bamboo and straw and river clay, painting her face, giving her eyes, adorning her with ornaments.
            </p>

            <p>
              The karigors of Bengal are among the most underrecognised artists in Indian cultural life. Their work disappears at the end of every Puja — immersed in a river, dissolved back into the earth. Unlike a painter whose canvas survives, unlike a sculptor whose bronze endures, the karigor works in material that is designed to be temporary. The art lasts five days. Then it is gone, and the artist begins again.
            </p>

            <p>
              This project — <em>MAA'S Karigors</em> — is an attempt to look behind the goddess at the hands that made her. It documents the lives of eight karigors: their biographies, their families, their techniques, their struggles, their achievements. It maps the visual vocabulary of the idol — the ten distinct styles and forms through which Durga has been imagined across Bengal's history. It traces the ten-step process of idol creation from the first bamboo pole to the final immersion. And it archives the stories — the folk traditions, oral histories, and living rituals — that surround the making and worship of the goddess.
            </p>

            <p>
              In recent years, recognition has begun to arrive. Durga Puja was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2021. Individual karigors like Sanatan Rudra Pal and China Pal have received national and international awards. Young karigors like Kakoli Pal are finding new audiences through social media and contemporary craft markets. But the structural vulnerabilities of the karigor community — the debt cycles, the rising material costs, the displacement of Kumartuli by real estate development, the loss of young people from the craft — remain real and pressing.
            </p>

            <p>
              The goddess is made of earth. She returns to earth. The karigor is the point in between — the human hands through which the divine takes temporary form. <em>MAA'S Karigors</em> is, at heart, a record of those hands: what they have built, what they have sacrificed, and what they are still quietly making, year after year, in workshops that smell of wet clay and devotion.
            </p>

            <div
              style={{
                borderTop: '1px solid #D4C5A9',
                marginTop: '2.5rem',
                paddingTop: '1rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #C41E2E, #E8921A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}
              >
                ✍
              </div>
              <div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.85rem', color: '#4A2E1A', fontWeight: 600, marginBottom: 0 }}>
                  MAA'S Karigors Project Team
                </p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.8rem', color: '#7A5A3E', marginBottom: 0 }}>
                  Student Research Project, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section
        style={{
          background: 'linear-gradient(180deg, #F5EDD8 0%, #FDF8EF 100%)',
          padding: '5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E8921A',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              Explore the Archive
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: '#2C1810',
              }}
            >
              Six Paths into the World of Karigors
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {navCards.map((card) => (
              <button
                key={card.id}
                onClick={() => navigate(card.id)}
                className="card-lift"
                style={{
                  background: '#FFFDF7',
                  border: `1px solid #D4C5A9`,
                  borderRadius: '0.875rem',
                  padding: '1.75rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Colour bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: card.color,
                  }}
                />
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '0.875rem',
                    lineHeight: 1,
                  }}
                >
                  {card.icon}
                </div>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: card.color,
                    fontWeight: 700,
                    marginBottom: '0.35rem',
                  }}
                >
                  {card.subtitle}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.3rem',
                    color: '#2C1810',
                    marginBottom: '0.625rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: '0.9rem',
                    color: '#7A5A3E',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {card.desc}
                </p>
                <span
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: card.color,
                  }}
                >
                  Explore →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section
        style={{
          background: '#2C1810',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ color: '#E8921A', fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>❧</span>
          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: '#EDE3CF',
              fontStyle: 'italic',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
            }}
          >
            "Aashchhe bochhor aabar hobe"
          </blockquote>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.9rem',
              color: '#7A5A3E',
              letterSpacing: '0.05em',
            }}
          >
            She will come again next year — the promise that sustains every karigor's work
          </p>
        </div>
      </section>
    </div>
  );
}
