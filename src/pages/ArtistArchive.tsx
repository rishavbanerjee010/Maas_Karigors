import { useState, useMemo } from 'react';
import { archiveItems, archiveLink, type ArchiveType } from '../data/archive';

const tabConfig: { id: ArchiveType | 'all'; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '🗂' },
  { id: 'video', label: 'Videos', icon: '▶' },
  { id: 'photo', label: 'Photos', icon: '📷' },
  { id: 'news', label: 'News', icon: '📰' },
  { id: 'interview', label: 'Interviews', icon: '🎙' },
];

const typeConfig: Record<ArchiveType, { color: string; bg: string; label: string }> = {
  video: { color: '#C41E2E', bg: '#FFF3F3', label: 'Video' },
  photo: { color: '#3D7873', bg: '#F0FAF9', label: 'Photo Essay' },
  news: { color: '#B8860B', bg: '#FFFBF0', label: 'News / Article' },
  interview: { color: '#7B2338', bg: '#FFF0F4', label: 'Interview' },
};
// alias 'article' type to 'news'
const getTypeConf = (type: string) =>
  typeConfig[type as ArchiveType] ?? typeConfig.news;

export default function ArtistArchive() {
  const [activeTab, setActiveTab] = useState<ArchiveType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let items = archiveItems;

    if (activeTab !== 'all') {
      items = items.filter((item) => item.type === activeTab || (activeTab === 'news' && (item.type as string) === 'article'));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.artist.toLowerCase().includes(q) ||
          item.creator.toLowerCase().includes(q) ||
          item.publication.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return items;
  }, [activeTab, searchQuery]);

  const counts: Record<string, number> = useMemo(() => {
    const c: Record<string, number> = { all: archiveItems.length };
    archiveItems.forEach((item) => {
      const t = item.type === ('article' as ArchiveType) ? 'news' : item.type;
      c[t] = (c[t] ?? 0) + 1;
    });
    return c;
  }, []);

  return (
    <div className="page-transition">
      {/* Page hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2C1810 0%, #4A2E1A 50%, #7B2338 100%)',
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
            Media & Sources
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FDF8EF',
              marginBottom: '1rem',
            }}
          >
            Artist Archive
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
            Curated articles, films, interviews, and photo essays about the karigors and the tradition of Durga idol-making. All sources link to original publications.
          </p>
        </div>
      </section>

      {/* Tabs + search bar */}
      <section
        style={{
          background: '#FDF8EF',
          padding: '1.5rem',
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
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.4rem 0.875rem',
                  borderRadius: '999px',
                  border: `1.5px solid ${activeTab === tab.id ? '#C41E2E' : '#D4C5A9'}`,
                  background: activeTab === tab.id ? '#C41E2E' : 'transparent',
                  color: activeTab === tab.id ? '#FDF8EF' : '#4A2E1A',
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {counts[tab.id] !== undefined && (
                  <span
                    style={{
                      background: activeTab === tab.id ? 'rgba(253,248,239,0.25)' : '#EDE3CF',
                      borderRadius: '999px',
                      padding: '0.05rem 0.4rem',
                      fontSize: '0.7rem',
                    }}
                  >
                    {counts[tab.id]}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', minWidth: '220px', flex: '1 1 220px', maxWidth: '340px' }}>
            <span
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#A89070',
                fontSize: '0.875rem',
              }}
            >
              🔍
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, artist, tags…"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.25rem',
                border: '1.5px solid #D4C5A9',
                borderRadius: '999px',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.85rem',
                color: '#2C1810',
                background: '#FFFDF7',
                outline: 'none',
                transition: 'border-color 0.18s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#C41E2E')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#D4C5A9')}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '3rem 1.5rem', background: '#FDF8EF', minHeight: '50vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Count */}
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.85rem',
              color: '#7A5A3E',
              marginBottom: '1.5rem',
            }}
          >
            Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'item' : 'items'}
            {searchQuery && ` for "${searchQuery}"`}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔍</span>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.25rem', color: '#4A2E1A', marginBottom: '0.5rem' }}>
                No results found
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.9rem', color: '#7A5A3E' }}>
                Try a different search term or clear the filter.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1.25rem',
                  background: '#C41E2E',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#FDF8EF',
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filtered.map((item) => {
                const tConf = getTypeConf(item.type);
                return (
                  <div
                    key={item.id}
                    className="card-lift"
                    style={{
                      background: '#FFFDF7',
                      border: '1px solid #D4C5A9',
                      borderRadius: '0.875rem',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        height: '140px',
                        background: `linear-gradient(135deg, ${item.thumbnailColor}dd, ${item.thumbnailColor}88)`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="alpana-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
                      <span
                        style={{
                          fontSize: '2.5rem',
                          position: 'relative',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {item.thumbnailIcon}
                      </span>
                      <span
                        style={{
                          position: 'relative',
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.7rem',
                          color: 'rgba(253,248,239,0.75)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {tConf.label}
                      </span>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.625rem' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            background: tConf.bg,
                            border: `1px solid ${tConf.color}40`,
                            borderRadius: '999px',
                            padding: '0.12rem 0.55rem',
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: '0.67rem',
                            color: tConf.color,
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tConf.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: '0.75rem',
                            color: '#A89070',
                            flexShrink: 0,
                          }}
                        >
                          {item.year}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: '1rem',
                          color: '#2C1810',
                          lineHeight: 1.35,
                          marginBottom: '0.4rem',
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.78rem',
                          color: '#7A5A3E',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.creator} · <em>{item.publication}</em>
                      </p>

                      {item.artist && (
                        <p
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: '0.75rem',
                            color: '#C41E2E',
                            fontWeight: 600,
                            marginBottom: '0.75rem',
                          }}
                        >
                          🎨 {item.artist}
                        </p>
                      )}

                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.85rem',
                          color: '#3A1E0A',
                          lineHeight: 1.65,
                          marginBottom: '1rem',
                          flex: 1,
                        }}
                      >
                        {item.summary}
                      </p>

                      {/* Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                        {item.tags.slice(0, 4).map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            style={{
                              background: '#EDE3CF',
                              border: 'none',
                              borderRadius: '0.25rem',
                              padding: '0.15rem 0.5rem',
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: '0.7rem',
                              color: '#4A2E1A',
                              cursor: 'pointer',
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#D4C5A9')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#EDE3CF')}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={archiveLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          padding: '0.55rem 1rem',
                          background: 'transparent',
                          border: `1.5px solid ${tConf.color}`,
                          borderRadius: '0.5rem',
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.83rem',
                          fontWeight: 600,
                          color: tConf.color,
                          textDecoration: 'none',
                          transition: 'all 0.18s',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = tConf.color;
                          (e.currentTarget as HTMLAnchorElement).style.color = '#FDF8EF';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          (e.currentTarget as HTMLAnchorElement).style.color = tConf.color;
                        }}
                      >
                        <span>↗</span> {item.articleUrl ? 'Read the Article' : 'Find the Article'}
                      </a>

                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.68rem',
                          color: '#C9B08A',
                          textAlign: 'center',
                          marginTop: '0.5rem',
                          fontStyle: 'italic',
                        }}
                      >
                        Links are illustrative. Verify before submission.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
