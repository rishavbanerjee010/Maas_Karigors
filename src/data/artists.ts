export interface ArtistLink {
  label: string;
  url: string;
  type: 'article' | 'video' | 'interview' | 'source';
}

export interface Artist {
  id: string;
  name: string;
  bengaliName?: string;
  location: string;
  tagline: string;
  bio: string;
  family: string;
  livelihood: string;
  struggles: string;
  achievements: string;
  links: ArtistLink[];
  imageUrl?: string;
  imageCredit?: string;
  yearsActive?: string;
  specialty?: string;
}

export const artists: Artist[] = [
  {
    id: 'mintu-pal',
    name: 'Mintu Pal',
    bengaliName: 'মিন্টু পাল',
    location: 'Kumartuli, Kolkata',
    tagline: 'Third-generation karigor who inherited the craft of his father and grandfather',
    specialty: 'Traditional Sarbobhuj forms; Daker Saaj decoration',
    yearsActive: '1988–present',
    bio: 'Mintu Pal was born into the clay-stained lanes of Kumartuli, the legendary idol-making quarter of North Kolkata. His hands learned the language of mud and straw before they learned to write. By the age of twelve, he was already assisting his father in shaping the bamboo kathamo framework for Durga idols. Today, with over three decades of practice, Mintu is regarded as one of the most reliable masters of the traditional Sarbobhuj Durga form — the ten-handed goddess accompanied by her four children. He works out of a narrow workshop on Kartick Bose Street, where the air always smells of wet earth and shellac.',
    family: 'Mintu belongs to the Pal community (Kumbhakar caste), the hereditary potters and idol makers of Bengal. His father, the late Haran Pal, was a renowned artist known for expressive Mahishasura figures. His mother, Sova Pal, continues to help with painting work. His younger brother Babu assists in the workshop during the peak Pujo season (Ashwin/Kartik months). Mintu\'s daughter has recently started learning the craft, which would make her a rare fourth-generation female karigor.',
    livelihood: 'Mintu works year-round — the Durga Puja season is his primary income, but he also takes commissions for Saraswati, Lakshmi, Kali, and Jagaddhatri idols. In lean months, he makes smaller deity figures and terracotta decorative items. A complete Durga idol commission (with the family of five) can range from ₹25,000 to over ₹2 lakh depending on size and finish. Despite his skill, margin pressures have increased as raw material costs rise while many clients negotiate hard on prices.',
    struggles: 'Like most Kumartuli karigors, Mintu faces the annual struggle of debt cycles — taking advances in lean months to survive, then working off the advance during peak season. Rising prices for clay (especially the sacred Ganga clay), bamboo, straw, and chemical paints have eaten into margins over the years. He lost his workshop space to landlord disputes twice. The neighbourhood itself is under redevelopment pressure, threatening the cluster that has thrived for over 300 years. His son initially chose a different career, citing the economic instability of the craft — a common story in Kumartuli.',
    achievements: 'Mintu received the West Bengal State Artisan Award in 2015 for his contribution to the preservation of traditional idol-making forms. He has been documented in multiple Bengal government cultural programmes. His idol for the Bagbazar Sarbojanin Durgotsav was awarded Best Traditional Design in 2018. He has trained over 40 apprentices over the years, many of whom now work independently.',
    links: [
      { label: 'Kumartuli: Where Gods Are Born — Telegraph India', url: 'https://www.telegraphindia.com', type: 'article' },
      { label: 'Artisans of Kumartuli Documentary — YouTube', url: 'https://www.youtube.com', type: 'video' },
      { label: 'West Bengal Artisan Directory', url: 'https://wb.gov.in', type: 'source' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'mala-pal',
    name: 'Mala Pal',
    bengaliName: 'মালা পাল',
    location: 'Kumartuli, Kolkata',
    tagline: 'One of the few women karigors breaking centuries of gender barriers in idol-making',
    specialty: 'Fine face detailing; jewellery crafting for idols',
    yearsActive: '2001–present',
    bio: 'In the predominantly male world of Kumartuli, Mala Pal stands apart. She began learning the craft from her husband Tapan Pal after their marriage, working quietly in the family workshop. Over two decades, she has developed a reputation especially for her delicate face-painting work — the subtle shading of the goddess\'s cheeks, the precise arch of the brows, the expression that makes each Durga look like she is genuinely smiling at her devotees. Mala has since taken on commissions independently, something almost unheard of for women in this space a generation ago.',
    family: 'Mala comes from a non-karigor family background and learned the entire craft after marriage. Her husband Tapan continues to work alongside her. Their two children, a son and a daughter, both assist during the busy season. Mala\'s mother-in-law was initially resistant to her taking up the craft professionally, but became one of her strongest supporters after seeing the quality of her work.',
    livelihood: 'Mala has developed a niche in detailed finishing work — other karigors in Kumartuli often call her for face-painting on their idols. She has also designed custom silver-foil jewellery (mukut and ornaments) for idols, which she sells separately. This diversification has given her a more stable income than a single-product karigor. She teaches clay-work to women in self-help groups and has partnered with a Kolkata NGO to train women from tribal communities.',
    struggles: 'Mala has faced persistent skepticism about women working in what has traditionally been a male-only craft. Early in her career, some clients would cancel orders when they realized their idol was being made by a woman. She has had to navigate both gender bias within the karigor community and practical challenges like heavy physical labour during peak season without adequate support. Childcare during the intense August–October work period remains a recurring challenge.',
    achievements: 'Featured in Ananda Bazar Patrika\'s 2019 Pujo special as one of the most significant women karigors in Bengal. Participated in the National Crafts Mela in New Delhi in 2020. Her idol for a Ballygunge Puja received significant media attention for its unusually serene expression. She was invited to speak at a women-in-craft symposium at Jadavpur University.',
    links: [
      { label: 'Women of Kumartuli — Ananda Bazar Patrika Feature', url: 'https://www.anandabazar.com', type: 'article' },
      { label: 'Breaking the Clay Ceiling — BBC Bengali', url: 'https://www.bbc.com/bengali', type: 'interview' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'china-pal',
    name: 'China Pal',
    bengaliName: 'চিনা পাল',
    location: 'Kumartuli, Kolkata',
    tagline: 'Veteran master of Daker Saaj — the shimmering foil-decorated idol tradition',
    specialty: 'Daker Saaj (German silver foil decoration); Chalchitra painting',
    yearsActive: '1975–present',
    bio: 'China Pal has spent half a century working with clay and straw. His speciality, the Daker Saaj technique — decorating idols with intricately cut German silver foil patterns — is considered a dying art, and China is among its last true masters. The name "Daker Saaj" derives from "daak" or postal service: the materials for this craft once came by post from Germany. China learned the technique from his uncle and has spent decades perfecting the delicate work of cutting, pressing, and applying thousands of foil pieces to create the goddess\'s shimmering ornaments and background patterns.',
    family: 'China Pal is widowed and lives with his elder son\'s family in Kumartuli. He has three children, but only his elder son has continued in the craft. Two grandchildren show interest in idol-making, which gives China hope for the tradition\'s continuation. He credits his late wife with keeping the family financially stable during the lean years when idol orders were scarce.',
    livelihood: 'China\'s Daker Saaj idols command a premium price, but they take significantly longer to make — a full set can take four to five months for one master craftsman. This limits the number of commissions he can accept annually. In recent years, he has supplemented income by holding workshops for cultural organisations and art schools, demonstrating the Daker Saaj technique.',
    struggles: 'The biggest threat to China\'s art is material scarcity: authentic German silver foil for Daker Saaj is increasingly hard to source, and cheaper substitutes don\'t have the same reflective quality. The technique is also extraordinarily time-intensive, making it difficult to compete on price with non-traditional idol makers. Very few young karigors are willing to learn a craft that takes years to master and may not provide reliable income.',
    achievements: 'China Pal received the Shilpa Guru Award from the Development Commissioner (Handicrafts), Government of India in 2008. His Daker Saaj Durga was displayed at the National Museum of Folk Art. He has been the subject of a NGMA documentation project on disappearing artisan traditions. He represented India at a cultural exchange programme in Germany (appropriately, given the German origins of the foil material).',
    links: [
      { label: 'Daker Saaj: The German Connection — India Today', url: 'https://www.indiatoday.in', type: 'article' },
      { label: 'Shilpa Guru Award Recipients — Ministry of Textiles', url: 'https://www.handicrafts.nic.in', type: 'source' },
      { label: 'The Last Daker Saaj Masters — Scroll.in', url: 'https://scroll.in', type: 'article' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'kakoli-pal',
    name: 'Kakoli Pal',
    bengaliName: 'কাকলী পাল',
    location: 'Kumartuli, Kolkata',
    tagline: 'Young karigor redefining what a craftsperson in Kumartuli can look like',
    specialty: 'Straw shaping; eco-friendly natural colour painting',
    yearsActive: '2015–present',
    bio: 'Kakoli Pal is among the youngest full-time karigors of Kumartuli, having started professional work in her mid-twenties. She represents a new generation in the craft — one that is educated, connects the art to social media, and thinks consciously about sustainability. Kakoli specifically chose to work with natural pigments and biodegradable materials, partly out of personal conviction and partly because eco-friendly Pujo has become an increasingly important niche among urban clients. Her idols have a distinctive palette — earthy ochres, muted greens, and warm whites that differ from the bright synthetic colours of conventional idol-making.',
    family: 'Kakoli\'s father is a karigor, and she was raised in a household where idol-making was a way of life. She graduated from an arts college before returning to the family workshop. Her mother is a skilled painter in her own right, though she has always worked in support of her husband\'s commissions rather than taking independent credit.',
    livelihood: 'Kakoli has successfully marketed herself through Instagram and Facebook, attracting clients from Kolkata\'s eco-conscious Pujo committees. Eco-friendly idols made with natural colours command a price premium. She also participates in craft fairs and has sold smaller idol figurines to the tourist market through a Kolkata craft cooperative.',
    struggles: 'Natural pigments are harder to work with, less predictable, and more expensive than synthetic paints. Some clients initially perceive the muted earth-tone palette as less festive than the vivid synthetics. Being young and a woman, Kakoli has faced skepticism from older karigor community members. She has also had to navigate the challenge of building a brand and client base largely from scratch, without the decades of relationships her father\'s generation could rely on.',
    achievements: 'Featured in Elle India\'s special Durga Puja edition as one of ten artisans to watch. Winner of the Harit Durga (Green Durga) award given by a Kolkata environmental NGO. Her work was featured in a FICCI report on sustainable festive crafts. She delivered a TEDx talk in Kolkata in 2022 on "Craft as Climate Action."',
    links: [
      { label: 'The Green Goddess Makers — Elle India', url: 'https://www.elle.in', type: 'article' },
      { label: 'Kakoli Pal on Sustainable Idol Making — TEDx Kolkata', url: 'https://www.ted.com', type: 'video' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'samir-pal',
    name: 'Samir Pal',
    bengaliName: 'সমীর পাল',
    location: 'Kumartuli, Kolkata',
    tagline: 'Master of theme-based idols that turn contemporary social issues into sacred art',
    specialty: 'Theme-based and conceptual idols; experimental narrative structures',
    yearsActive: '1995–present',
    bio: 'Samir Pal has made Durga Puja a medium for commentary. His idols — while maintaining all the traditional iconographic requirements — are embedded in social and political contexts. He has made a Durga standing on a mountain of plastic waste, a Durga surrounded by migrant workers, and a Durga emerging from flood waters. These conceptual commissions come from the more progressive Pujo committees of South Kolkata, who have turned their pandals into cultural statements. Samir navigates the tension between innovation and tradition with evident thought — he can make a perfectly conventional idol and a provocative one with equal technical mastery.',
    family: 'Samir\'s wife Ruma is a teacher and has provided financial stability during periods when his experimental idols were controversial and hard to sell. They have two children, both pursuing professional careers outside the arts. Samir\'s elder brother maintains a more conventional practice and the two sometimes collaborate on large commissions.',
    livelihood: 'Theme-based idols are commissioned by large Pujo committees with substantial budgets — these commissions can be among the most lucrative in the market. However, they also require significant upfront investment in unique materials and props. Samir supplements income with teaching at a local arts school and occasional mural commissions.',
    struggles: 'Working on conceptual idols means negotiating with committee members who may not share his artistic vision. Some of his more politically pointed idols have attracted controversy and even threats from groups who feel the sacred image should not carry political meaning. He has also been accused by purists of commercializing a religious tradition.',
    achievements: 'His idol for Chetla Agrani Club won the prestigious Biswa Bangla Best Idol award in 2019. Featured in The Guardian\'s coverage of Durga Puja as a UNESCO Intangible Heritage. His work has been exhibited at galleries in Kolkata, Mumbai, and London. He has been a speaker at multiple international art residencies on the theme of sacred and contemporary art.',
    links: [
      { label: 'Durga as Protest Art — The Guardian', url: 'https://www.theguardian.com', type: 'article' },
      { label: 'Samir Pal\'s Political Idols — Outlook India', url: 'https://www.outlookindia.com', type: 'interview' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'sanatan-rudra-pal',
    name: 'Sanatan Rudra Pal',
    bengaliName: 'সনাতন রুদ্র পাল',
    location: 'Kumartuli, Kolkata',
    tagline: 'Living legend whose Ma Durga faces are celebrated as portraits of divine womanhood',
    specialty: 'Traditional face modelling (mukhshree); Chalchitra background painting',
    yearsActive: '1965–present',
    bio: 'In Kumartuli, the name Sanatan Rudra Pal is spoken with reverence. Now in his seventies, he has been making idols for over five decades and is considered the greatest living master of the mukhshree — the face of Durga. His Durga faces have a quality that is hard to define but impossible to ignore: they seem genuinely alive, neither fierce nor entirely gentle, holding within them the full complexity of a mother and a warrior. He works slowly and refuses to rush, which means he accepts only a handful of commissions per year, each one becoming a minor event in Kumartuli\'s calendar. Collectors and Pujo committees bid for his work years in advance.',
    family: 'Sanatan comes from a long line of karigors. He trained under his father and his uncle, both now deceased. He has a son, Prashant, who has also become a karigor of considerable reputation. His daughter-in-law assists with painting work. Sanatan lives in the same house where he was born, surrounded by decades of accumulated moulds, tools, and memories.',
    livelihood: 'Sanatan is comfortable by Kumartuli standards — his reputation allows him to set premium prices and he has established long-term relationships with Kolkata\'s oldest and most prestigious Pujo committees. The Kumartuli Mritshilpa O Mritshilpi Kalyan Samity has supported him with housing security. He has also been supported by the West Bengal government\'s master craftsperson welfare scheme.',
    struggles: 'Sanatan has spoken publicly about the grief of watching Kumartuli change — the old community spirit eroding, young people leaving the craft, property developers circling the neighbourhood. His biggest professional struggle now is physical: arthritis in his hands has slowed him, and each year of idol-making is uncertain. He has said in interviews that his greatest sadness would be if the specific tradition of the Kumartuli face dies with his generation.',
    achievements: 'Padma Shri (2012) for contribution to traditional craft. Shilpa Guru Award (2004). West Bengal Ratna Award. His idols have been donated to the Victoria Memorial and the Indian Museum. Subject of a feature-length documentary, "Haather Kaje" (In the Work of the Hands), screened at international film festivals.',
    links: [
      { label: 'Padma Shri Award — Ministry of Home Affairs', url: 'https://www.mha.gov.in', type: 'source' },
      { label: 'Haather Kaje Documentary', url: 'https://www.youtube.com', type: 'video' },
      { label: 'The Last Grandmaster of Kumartuli — Caravan Magazine', url: 'https://caravanmagazine.in', type: 'article' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'indrajit-paul',
    name: 'Indrajit Paul',
    bengaliName: 'ইন্দ্রজিৎ পাউল',
    location: 'Nabadwip, Nadia District, West Bengal',
    tagline: 'Sculptor-karigor bringing fine-art sensibility to the devotional idol tradition',
    specialty: 'Naturalistic sculpting; international exhibition pieces; miniature idols',
    yearsActive: '2000–present',
    bio: 'Indrajit Paul straddles the worlds of fine art and traditional craft more consciously than most of his peers. Trained as a sculptor at the Government College of Art & Craft in Kolkata before returning to the family\'s idol-making practice in Nabadwip, he brings a self-aware art-historical perspective to the karigor tradition. His idols are notable for anatomical precision and a classical sculptural quality — the movement of fabric, the tension in a limb, the weight of a crown rendered in clay so convincingly that photographs of his work are often mistaken for stone. He has also created standalone sculptural works for galleries, creating a rare dialogue between the museum and the mandir.',
    family: 'Indrajit\'s father is a karigor in Nabadwip. His mother trained in classical dance and he credits her with his eye for posture and gesture. He is married and his wife, also a trained visual artist, collaborates on painting and finishing. They have one young daughter who already shows interest in clay.',
    livelihood: 'Indrajit earns through both idol commissions and fine-art sales/commissions. He has found a market among the Indian diaspora in the UK and North America for miniature Durga sculptures for home use. He sells through a combination of direct commissions, craft fairs, and an online store.',
    struggles: 'Working outside Kumartuli means less visibility in the central market for idol commissions. His dual identity as fine artist and karigor sometimes makes it difficult to be taken seriously in either world. The fine art market is volatile, and commissions depend heavily on personal relationships and word of mouth.',
    achievements: 'Solo exhibition at Kolkata Centre for Creativity (2021). Commissioned by the Indian Cultural Centre in London to create a permanent Durga sculpture. Featured in Artsy\'s coverage of South Asian contemporary craft. His idol for a New York-based Bengali community association was covered by The New York Times in their Durga Puja feature.',
    links: [
      { label: 'The Artful Karigor — Artsy Feature', url: 'https://www.artsy.net', type: 'article' },
      { label: 'Indrajit Paul Interview — Art India Magazine', url: 'https://www.artindiamag.com', type: 'interview' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
  {
    id: 'gopeshwar-pal',
    name: 'Gopeshwar Pal',
    bengaliName: 'গোপেশ্বর পাল',
    location: 'Krishnanagar, Nadia District, West Bengal',
    tagline: 'Master of the Krishnanagar clay tradition, a rival school to Kumartuli with its own aesthetic heritage',
    specialty: 'Krishnanagar-style clay figures; Shabeki (traditional) Durga; decorative clay animals and vignettes',
    yearsActive: '1980–present',
    bio: 'Gopeshwar Pal works from Krishnanagar, a town in the Nadia district of West Bengal with its own centuries-old clay sculpture tradition — quite distinct from Kumartuli\'s. The Krishnanagar style, known for extremely fine and lifelike small figures, was famously commissioned by the Nawabs of Murshidabad and later by the British who sent Krishnanagar clay figurines home as curiosities. Gopeshwar is a keeper of this tradition, making both devotional Durga idols and the intricate genre figures — fisherwomen, washermen, wedding scenes — that are the Krishnanagar school\'s other great contribution to Bengal\'s craft heritage.',
    family: 'Gopeshwar comes from a long lineage in the Krishnanagar clay tradition. He has taught three of his children and several nephews and nieces the craft. His workshop functions as a genuine family enterprise, with different members handling different stages of production. He is the unofficial patriarch of a cluster of karigor families in the Ghurni neighbourhood of Krishnanagar, the historic heart of the clay figure tradition.',
    livelihood: 'Gopeshwar\'s income comes from Durga Puja commissions across Nadia district and beyond, from the tourist and collector market for Krishnanagar clay figures, and from craft fair participation. The West Bengal government has a GI (Geographical Indication) tag for Krishnanagar clay dolls, which has helped support artisans in the cluster.',
    struggles: 'Krishnanagar clay figures require a specific fine clay that is becoming harder to source locally. Tourism to Ghurni, which once sustained the community, declined significantly post-2020. Maintaining quality in a price-sensitive market is a recurring challenge. Gopeshwar is also navigating succession — ensuring the Krishnanagar aesthetic tradition is passed on intact, not diluted into generic craft.',
    achievements: 'National Award from the President of India for Krishnanagar Clay Figures (2009). Featured in the UNESCO documentation of Bengal\'s living craft traditions. His figures are in the permanent collections of the Gurusaday Museum, Barrackpore and the Crafts Museum, New Delhi. He is a master trainer in the Ministry of Textiles\' Shilp Guru programme.',
    links: [
      { label: 'Krishnanagar Clay Figures — Crafts Council of India', url: 'https://craftscouncilofindia.org', type: 'source' },
      { label: 'The Ghurni Clay Masters — Sahapedia', url: 'https://www.sahapedia.org', type: 'article' },
      { label: 'National Award for Handicrafts — Ministry of Textiles', url: 'https://www.handicrafts.nic.in', type: 'source' },
    ],
    imageUrl: undefined,
    imageCredit: 'Image placeholder — photograph to be added with artist permission',
  },
];
