import { useState } from 'react';

interface InterviewQuestion {
  id: string;
  question: string;
  theme: string;
  color: string;
  hasAudio: boolean;
  hasTranscript: boolean;
  hasPhoto: boolean;
  artistProfile?: string;
  placeholder: string;
}

const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'q01',
    question: 'When did you first know that making idols was what you were meant to do?',
    theme: 'Calling & Vocation',
    color: '#C41E2E',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    artistProfile: undefined,
    placeholder: 'This question explores the moment of recognition — the karigor\'s personal relationship with their calling. Responses often involve childhood memories of watching a parent work, or a specific moment of completion that felt different from everything before it.',
  },
  {
    id: 'q02',
    question: 'Can you describe what your hands feel when you are working the clay to make her face?',
    theme: 'The Craft & the Senses',
    color: '#E8921A',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'A phenomenological question about embodied knowledge and haptic skill. Karigors often describe a felt knowledge in the hands — the clay communicating its readiness or resistance — that cannot be fully articulated.',
  },
  {
    id: 'q03',
    question: 'What does the moment of Chokkhu Daan feel like, from the inside?',
    theme: 'Ritual & the Sacred',
    color: '#7B2338',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'A spiritual and phenomenological question. This is often the most quietly intense response — karigors describe concentration, vulnerability, and sometimes a sense of presence that defies easy description.',
  },
  {
    id: 'q04',
    question: 'What is the hardest part of the year — the month or the moment that tests you most?',
    theme: 'Struggle & Resilience',
    color: '#3D7873',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'This question opens the economic and emotional realities of the karigor life. Responses range from financial stress in lean months to the emotional exhaustion of the weeks immediately after Bisarjan.',
  },
  {
    id: 'q05',
    question: 'Have you ever made an idol that felt like it was looking back at you?',
    theme: 'The Divine Gaze',
    color: '#B8860B',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'This question probes the boundary between maker and made, between craft and devotion. Some karigors answer practically; others describe moments of uncanny recognition that changed their understanding of the work.',
  },
  {
    id: 'q06',
    question: 'Do you watch Bisarjan every year? Where do you stand?',
    theme: 'Letting Go',
    color: '#4A2E1A',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'Bisarjan is both an ending and a beginning for the karigor. The question of where they stand — watching the idol enter the water, or turning away, or beginning the workshop cleanup — reveals different relationships with impermanence.',
  },
  {
    id: 'q07',
    question: 'What do you want people to know about this work that they don\'t currently know?',
    theme: 'Recognition & Visibility',
    color: '#C41E2E',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'An advocacy question. Karigors speak about the invisibility of craft labour, the economic precarity, the misunderstanding of their work as purely commercial, and the lack of recognition for what they contribute to Bengal\'s culture.',
  },
  {
    id: 'q08',
    question: 'If you could teach one young person — your own child, or someone else\'s — what is the single most important thing they must learn?',
    theme: 'Transmission & Legacy',
    color: '#3D7873',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'A question about pedagogical wisdom and the transmission of craft knowledge. Responses often distinguish between technical skills and something harder to name — patience, devotion, relationship with the material.',
  },
  {
    id: 'q09',
    question: 'What does it mean to you that Durga Puja is now a UNESCO heritage?',
    theme: 'Recognition & Globalisation',
    color: '#7B2338',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'The UNESCO recognition in 2021 was widely covered, but karigor responses are often more nuanced than celebratory — gratitude mixed with uncertainty about whether recognition translates into economic security.',
  },
  {
    id: 'q10',
    question: 'Tell me about one idol that you will never forget making.',
    theme: 'Memory & Meaning',
    color: '#E8921A',
    hasAudio: false,
    hasTranscript: false,
    hasPhoto: false,
    placeholder: 'This open prompt invites personal narrative. The most memorable idols are rarely the most acclaimed — they are often the ones that were made under unusual circumstances, or that carried personal meaning, or that taught the karigor something unexpected.',
  },
];

export default function StoriesToRemember() {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');

  const themes = ['all', ...Array.from(new Set(interviewQuestions.map((q) => q.theme)))];
  const filtered = selectedTheme === 'all'
    ? interviewQuestions
    : interviewQuestions.filter((q) => q.theme === selectedTheme);

  return (
    <div className="page-transition">
      {/* Page hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4A2E1A 0%, #B8860B 60%, #E8921A 100%)',
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
            Oral Histories
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FDF8EF',
              marginBottom: '1rem',
            }}
          >
            Stories to Remember
          </h1>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(253,248,239,0.85)',
              maxWidth: '600px',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            Ten interview questions designed to elicit the inner life of the karigor. Each card is designed to support audio recordings, transcripts, photos, and linked artist profiles as those materials become available.
          </p>

          {/* Status indicator */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(253,248,239,0.15)',
              border: '1px solid rgba(253,248,239,0.3)',
              borderRadius: '0.5rem',
              padding: '0.5rem 0.875rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F0C040', display: 'inline-block' }} />
            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.8rem', color: 'rgba(253,248,239,0.9)' }}>
              Ready for recordings — audio/transcript slots available
            </span>
          </div>
        </div>
      </section>

      {/* Theme filter */}
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
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              style={{
                padding: '0.4rem 0.875rem',
                borderRadius: '999px',
                border: `1.5px solid ${selectedTheme === theme ? '#B8860B' : '#D4C5A9'}`,
                background: selectedTheme === theme ? '#B8860B' : 'transparent',
                color: selectedTheme === theme ? '#FDF8EF' : '#4A2E1A',
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s',
              }}
            >
              {theme === 'all' ? 'All Questions' : theme}
            </button>
          ))}
        </div>
      </section>

      {/* Question cards */}
      <section style={{ padding: '3rem 1.5rem', background: '#FDF8EF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map((q) => (
              <div
                key={q.id}
                className="card-lift"
                style={{
                  background: '#FFFDF7',
                  border: '1px solid #D4C5A9',
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                }}
              >
                {/* Top bar */}
                <div
                  style={{
                    height: '4px',
                    background: q.color,
                  }}
                />

                <div style={{ padding: '1.5rem' }}>
                  {/* Theme badge */}
                  <span
                    style={{
                      display: 'inline-block',
                      background: `${q.color}15`,
                      border: `1px solid ${q.color}40`,
                      borderRadius: '999px',
                      padding: '0.15rem 0.6rem',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: '0.68rem',
                      color: q.color,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    {q.theme}
                  </span>

                  {/* Question */}
                  <blockquote
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      color: '#2C1810',
                      lineHeight: 1.55,
                      marginBottom: '1rem',
                      paddingLeft: '0.875rem',
                      borderLeft: `3px solid ${q.color}`,
                    }}
                  >
                    "{q.question}"
                  </blockquote>

                  {/* Context/placeholder */}
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: '0.83rem',
                      color: '#7A5A3E',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {q.placeholder}
                  </p>

                  {/* Media placeholders */}
                  <div
                    style={{
                      borderTop: '1px solid #EDE3CF',
                      paddingTop: '1rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {/* Audio */}
                    {q.hasAudio && (                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.625rem',
                        background: q.hasAudio ? '#E8F5E9' : '#F5F5F5',
                        border: `1px solid ${q.hasAudio ? '#81C784' : '#DDD'}`,
                        borderRadius: '0.375rem',
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: '0.75rem',
                        color: q.hasAudio ? '#2E7D32' : '#9E9E9E',
                        fontWeight: 600,
                      }}
                    >
                      <span>🎙</span>
                      <span>Audio Available</span>
                    </div>
                    )}

                    {/* Transcript */}
                    {q.hasTranscript && (                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.625rem',
                        background: q.hasTranscript ? '#E3F2FD' : '#F5F5F5',
                        border: `1px solid ${q.hasTranscript ? '#90CAF9' : '#DDD'}`,
                        borderRadius: '0.375rem',
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: '0.75rem',
                        color: q.hasTranscript ? '#1565C0' : '#9E9E9E',
                        fontWeight: 600,
                      }}
                    >
                      <span>📄</span>
                      <span>Transcript</span>
                    </div>
                    )}

                    {/* Photo */}
                    {q.hasPhoto && (                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.625rem',
                        background: q.hasPhoto ? '#FFF8E1' : '#F5F5F5',
                        border: `1px solid ${q.hasPhoto ? '#FFD54F' : '#DDD'}`,
                        borderRadius: '0.375rem',
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: '0.75rem',
                        color: q.hasPhoto ? '#E65100' : '#9E9E9E',
                        fontWeight: 600,
                      }}
                    >
                      <span>📷</span>
                      <span>Photos</span>
                    </div>
                    )}

                    {/* Artist profile */}
                    {q.artistProfile ? (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.3rem 0.625rem',
                          background: '#F3E5F5',
                          border: '1px solid #CE93D8',
                          borderRadius: '0.375rem',
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '0.75rem',
                          color: '#4A148C',
                          fontWeight: 600,
                        }}
                      >
                        <span>👤</span>
                        <span>{q.artistProfile}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to contribute */}
      <section style={{ background: '#F5EDD8', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.5rem',
              color: '#2C1810',
              marginBottom: '0.875rem',
            }}
          >
            How to Add Recordings
          </h3>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.92rem',
              color: '#4A2E1A',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            Each card is designed to receive: an MP3/audio file, a text transcript, a set of photographs, and a linked karigor profile from the Heroes of Clay section. When you have recorded an interview, the data structure in <code style={{ background: '#EDE3CF', padding: '0.1rem 0.3rem', borderRadius: '0.25rem', fontSize: '0.85rem' }}>src/data/</code> is organised to receive these additions with minimal changes to the interface.
          </p>
          <div
            style={{
              background: '#FFFDF7',
              border: '1px solid #D4C5A9',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              textAlign: 'left',
            }}
          >
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.85rem', color: '#4A2E1A', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              <strong>To add an audio recording:</strong> Set <code style={{ background: '#EDE3CF', padding: '0.1rem 0.3rem', borderRadius: '0.25rem' }}>hasAudio: true</code> and add an <code style={{ background: '#EDE3CF', padding: '0.1rem 0.3rem', borderRadius: '0.25rem' }}>audioUrl</code> field in <code style={{ background: '#EDE3CF', padding: '0.1rem 0.3rem', borderRadius: '0.25rem' }}>StoriesToRemember.tsx</code>.
            </p>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.85rem', color: '#4A2E1A', lineHeight: 1.7 }}>
              This architecture keeps the data layer separate so you can later connect a Node.js/Express backend — just replace the local array with an API call.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
