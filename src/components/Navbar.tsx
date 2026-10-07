import { useState } from 'react';

export type PageId = 'home' | 'heroes' | 'styles' | 'making' | 'folk' | 'oral' | 'archive';

interface NavItem {
  id: PageId;
  label: string;
  shortLabel: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home' },
  { id: 'heroes', label: 'Heroes of Clay', shortLabel: 'Heroes' },
  { id: 'styles', label: 'Idol Styles', shortLabel: 'Styles' },
  { id: 'making', label: 'Making the Goddess', shortLabel: 'Making' },
  { id: 'folk', label: 'Folk Stories', shortLabel: 'Folk' },
  { id: 'oral', label: 'Stories to Remember', shortLabel: 'Stories' },
  { id: 'archive', label: 'Artist Archive', shortLabel: 'Archive' },
];

interface NavbarProps {
  currentPage: PageId;
  navigate: (page: PageId) => void;
}

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: PageId) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'rgba(253, 248, 239, 0.95)',
        borderBottom: '1px solid #D4C5A9',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textAlign: 'left',
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#C41E2E',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
            }}
          >
            MAA'S Karigors
          </span>
          <span
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.65rem',
              color: '#7A5A3E',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            hands & heroes behind the idol
          </span>
        </button>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            gap: '0.25rem',
            alignItems: 'center',
          }}
          className="hide-mobile"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.4rem 0.65rem',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.82rem',
                fontWeight: currentPage === item.id ? 600 : 400,
                color: currentPage === item.id ? '#C41E2E' : '#4A2E1A',
                borderRadius: '0.375rem',
                transition: 'all 0.18s ease',
                position: 'relative',
                letterSpacing: '0.01em',
                borderBottom: currentPage === item.id ? '2px solid #C41E2E' : '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.color = '#C41E2E';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(196, 30, 46, 0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.color = '#4A2E1A';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.shortLabel}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#4A2E1A',
            fontSize: '1.25rem',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: '#FDF8EF',
            borderTop: '1px solid #D4C5A9',
            padding: '0.5rem 1rem 1rem',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.75rem 0.5rem',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.95rem',
                fontWeight: currentPage === item.id ? 600 : 400,
                color: currentPage === item.id ? '#C41E2E' : '#4A2E1A',
                borderBottom: '1px solid #EDE3CF',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
