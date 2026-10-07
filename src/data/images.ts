const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=${w}`;

export const homeHeroImage = img('1759463191632-90844233c9ea', 1920);

// Representative Kumartuli workshop photos. Replace with each karigor's own
// photo by setting `imageUrl` on the artist in artists.ts.
const heroPool = [
  '1761410403735-108d974d9a76',
  '1761410379143-f8276f48b1a1',
  '1694438058376-f7af2f661ac2',
  '1694438058339-f31008a152e2',
  '1694877708759-b40b017d2e54',
  '1761410388288-a1e48d396adb',
  '1738854929076-9c8d5a7a1611',
  '1743404025742-e06ba4a7ad19',
].map((id) => img(id));

export const artistFallbackImage = (index: number) => heroPool[index % heroPool.length];

export const styleImages: Record<string, string> = {
  'ek-chala': img('1781102025100-b9b650478074'),
  'do-chala': img('1699027611141-bd57b5f0c88e'),
  shabeki: img('1781102024884-fe4197c2f92d'),
  'daker-saaj': img('1781102025083-afff7260c9d7'),
  'sholar-saaj': img('1759463191632-90844233c9ea'),
  chalchitra: img('1759486786590-75f4d62917c0'),
  'theme-based': img('1766899922647-745614815030'),
  experimental: img('1728754178092-43f15566fdb6'),
  'miniature-portable': img('1694438057948-8a33606e1df3'),
  international: img('1766678527158-d88bd8825d27'),
};

export const stepImages: Record<number, string> = {
  1: img('1761410363029-a380c2f19e88'),
  2: img('1743404025748-31f5d74a8702'),
  3: img('1761410388288-a1e48d396adb'),
  4: img('1731113724114-566b6eb36335'),
  5: img('1761410379143-f8276f48b1a1'),
  6: img('1738854929076-9c8d5a7a1611'),
  7: img('1694438058376-f7af2f661ac2'),
  8: img('1781102025083-afff7260c9d7'),
  9: img('1759486786590-75f4d62917c0'),
  10: img('1766678527175-2774779c2027'),
};
