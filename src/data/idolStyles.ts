export type StyleCategory = 'structural' | 'decorative' | 'thematic' | 'regional';

export interface IdolStyle {
  id: string;
  name: string;
  bengaliName?: string;
  category: StyleCategory;
  tagline: string;
  description: string;
  historicalContext: string;
  folkSignificance: string;
  isHistoryDocumented: boolean;
  historyNote?: string;
  keyFeatures: string[];
  imageLabel?: string;
}

export const idolStyles: IdolStyle[] = [
  {
    id: 'ek-chala',
    name: 'Ek Chala',
    bengaliName: 'একচালা',
    category: 'structural',
    tagline: 'The goddess and her family united under one canopy — the most iconic form of Durga',
    description: 'In the Ek Chala form, Durga and all her children — Lakshmi, Saraswati, Kartik, Ganesh — along with Mahishasura and the lion, are all housed within a single arched framework (chala). The chala is a decorated backdrop that rises behind and over all the figures, creating a unified tableau. This is the form most associated with Durga Puja in the popular imagination and the form depicted in most traditional Puja pandals.',
    historicalContext: 'The Ek Chala form is closely associated with the baro-bari or zamindari Pujas of Bengal. Historical records suggest the form became standardised during the period of Nawabi and colonial Bengal (18th–19th century), as wealthy families and zamindars patronised increasingly elaborate idol commissions. The unified chala served both aesthetic and logistical purposes: it made transportation and installation easier while creating a dramatic visual impression.',
    folkSignificance: 'The Ek Chala is understood by many devotees to represent the idea of the complete family — Ma Durga returning home with all her children for the annual visit. The encompassing arch is sometimes interpreted as her parents\' home sheltering the entire family. The visual unity of the form reinforces the Pujo\'s central narrative of homecoming.',
    isHistoryDocumented: true,
    keyFeatures: ['Single unified backdrop (chala)', 'Durga at centre flanked by four children', 'Mahishasura below Durga\'s feet', 'Decorated arch typically painted with folk motifs'],
  },
  {
    id: 'do-chala',
    name: 'Do Chala',
    bengaliName: 'দোচালা',
    category: 'structural',
    tagline: 'Two separate canopies — a structural form with a distinctive folk account of its origin',
    description: 'In the Do Chala (two-canopy) form, the idols are arranged under two separate arched frameworks rather than a single unified one. Durga with Lakshmi and Kartik on one side occupy one chala, and Saraswati and Ganesh with the lion occupy the other — or the arrangement varies by tradition. This creates a more dynamic, less enclosed visual composition than the Ek Chala.',
    historicalContext: 'The Do Chala form is older than the Ek Chala by most historical accounts and was associated with older rural and folk Puja traditions before the more unified Ek Chala became the urban standard. Some scholars trace the Do Chala to pre-colonial village worship where a single large chala may have been beyond the resources of a community, and two smaller ones were more practical.',
    folkSignificance: 'There is a well-known folk account (whose origins are debated) that the Do Chala reflects a moment of domestic tension — Durga and Ganesh under one roof, the other children and lion under another, following a family disagreement. This narrative is considered folklore and not documented religious history. However, it has entered popular culture and is retold warmly as part of the human character of the goddess.',
    isHistoryDocumented: false,
    historyNote: 'The origin story of the Do Chala reflecting a family disagreement is classified as folk narrative/legend, not documented religious history. The structural history of the form as an older, pre-Ek Chala tradition is documented.',
    keyFeatures: ['Two separate chalaa frameworks', 'More dynamic open composition', 'Associated with older folk worship traditions', 'Often seen in village Pujas'],
  },
  {
    id: 'shabeki',
    name: 'Shabeki',
    bengaliName: 'শাবেকী',
    category: 'structural',
    tagline: 'The classical form — traditional iconography preserved for centuries',
    description: 'Shabeki (meaning "traditional" or "old way") refers to the classical canon of Durga idol-making that follows strict iconographic rules: ten arms, specific positioning of weapons, precise facial expression, specific arrangement of children and accompanying figures, traditional colour palette (the sindoor complexion of Durga, the specific gold of ornaments). A Shabeki idol is a declaration of continuity with tradition.',
    historicalContext: 'The iconographic rules for the Shabeki Durga form are derived from the Devi Bhagavata Purana and other Shakta texts, as well as centuries of artistic codification by the karigor community itself. The forms were standardised through practice, patronage, and transmission within karigor families and guilds. What counts as "Shabeki" has itself evolved — what was innovative once became traditional later.',
    folkSignificance: 'For many devotees, the Shabeki form is the "real" Durga — the familiar face they grew up with, the form their ancestors worshipped. The very familiarity is devotionally powerful. There is emotional and spiritual security in a face that has not changed. For karigors, mastering the Shabeki form is the foundational requirement before any experimentation is considered legitimate.',
    isHistoryDocumented: true,
    keyFeatures: ['Strict adherence to traditional iconography', 'Ten arms with prescribed weapons', 'Traditional sindoor-red complexion', 'Classical arrangement of the family group'],
  },
  {
    id: 'daker-saaj',
    name: 'Daker Saaj',
    bengaliName: 'ডাকের সাজ',
    category: 'decorative',
    tagline: 'The shimmering foil-decorated tradition — named for materials that once arrived by post from Germany',
    description: 'Daker Saaj is a decorative style in which the goddess and her entourage are adorned with intricate ornaments, jewellery, and background patterns made from German silver foil (or similar reflective metal foil). Thousands of tiny pieces are hand-cut and applied to create patterns of flowers, leaves, and geometric forms. Under festive lighting, a Daker Saaj idol seems to glow from within. It is one of the most time-intensive and technically demanding finishing styles.',
    historicalContext: 'The name "Daker Saaj" comes from "daak" (postal/mail service) — the German silver foil used in the decoration was historically imported from Germany and arrived by post in Kumartuli. This trade connection dates to the colonial period when Bengal had active trade with Germany. The technique itself likely developed in the 19th century. It became associated with the older, wealthier baro-bari Pujas of North Kolkata.',
    folkSignificance: 'A Daker Saaj Durga is considered among the most "royal" and magnificent of idol presentations. To commission one is to give the goddess the finest ornamentation available — an act of maximum devotion. The labour intensity is visible to the eye, and that visible labour carries its own devotional meaning: every cut foil piece is an act of worship.',
    isHistoryDocumented: true,
    keyFeatures: ['German silver foil ornaments and decoration', 'Extremely labour-intensive hand-cutting', 'Luminous under lighting', 'Associated with old North Kolkata Puja traditions'],
  },
  {
    id: 'sholar-saaj',
    name: 'Sholar Saaj',
    bengaliName: 'শোলার সাজ',
    category: 'decorative',
    tagline: 'Decorations from shola pith — the traditional white organic material of Bengali festive craft',
    description: 'Sholar Saaj uses decorative elements made from shola — the pith of the shola plant (Indian spongewood, Aeschynomene aspera), a white spongy material that can be carved and shaped into delicate three-dimensional ornaments. Shola craft is itself an ancient Bengali tradition, used for wedding decorations, ceremonial objects, and — most famously — for the intricate crown (mukut) and ornaments of the Durga idol in the Sholar Saaj style.',
    historicalContext: 'Shola craft has been used in Bengali festive contexts for at least several centuries. The Malakar community (traditionally flower-sellers and decorators) are the primary craftspeople of shola art. The application of shola decorations to Durga idols represents a convergence of two distinct craft traditions. Shola Saaj was long associated with village Pujas in rural Bengal, where it offered a beautiful decoration using locally available natural materials.',
    folkSignificance: 'Shola, being entirely white and biodegradable, carries strong associations with purity. The material is used in many Bengali rites of passage and religious ceremonies. A shola-decorated Durga has an otherworldly quality — the pure white ornaments on a painted idol create a striking visual contrast. The biodegradability of shola also makes it ecologically favoured for contemporary Pujas.',
    isHistoryDocumented: true,
    keyFeatures: ['Ornaments carved from shola (Indian spongewood)', 'Pure white biodegradable decoration', 'Often combined with other finishing styles', 'Associated with the Malakar artisan community'],
  },
  {
    id: 'chalchitra',
    name: 'Chalchitra',
    bengaliName: 'চালচিত্র',
    category: 'decorative',
    tagline: 'The painted backdrop — a canvas for celestial scenes, folk imagery, and narrative art',
    description: 'Chalchitra refers to the painted background panel (chaal = backdrop) that rises behind the idol. In traditional Chalchitra work, this panel is painted with intricate scenes from mythology: the gods and goddesses of the Hindu pantheon arrayed in celestial order, scenes from the Durga Saptashati, depictions of the cosmos. Chalchitra painting is a specialised art, with its own visual grammar inherited from Pata painting (scroll painting) and other Bengali folk traditions.',
    historicalContext: 'Chalchitra painting has its deepest roots in the Patachitra tradition — the scroll paintings created by the Pat community of Bengal for narrative and devotional purposes. When Durga idols began to be made with elaborate backdrops in the 18th and 19th centuries, many Patuas (scroll painters) transferred their skills to this new medium. The Chalchitra thus represents a confluence of the sculptor\'s craft and the painter\'s tradition.',
    folkSignificance: 'The Chalchitra is the visual world into which the goddess is placed — it contextualises her within the larger cosmological order. Traditional Chalchitra panels tell the story of her battle with Mahishasura, her birth from the combined powers of the gods, and her victory. In this sense, the Chalchitra is a visual scripture — the devotee who stands before the idol can read the entire story in the background.',
    isHistoryDocumented: true,
    keyFeatures: ['Intricately painted background panel', 'Scenes from Hindu mythology', 'Derived from Patachitra tradition', 'Specialised painters often distinct from idol sculptors'],
  },
  {
    id: 'theme-based',
    name: 'Theme-Based',
    bengaliName: 'থিম পুজো',
    category: 'thematic',
    tagline: 'Contemporary Pujas that make Durga a vehicle for social commentary and artistic exploration',
    description: 'The theme-based idol/pandal is a distinctly modern development in Durga Puja, emerging primarily in post-Independence Bengal and reaching its full expression from the 1990s onwards. In this form, the entire Puja — idol, pandal, decoration — is built around a central concept or theme that may be social, environmental, political, or artistic. The idol may be constructed of recycled materials, or presented in a non-traditional medium, or positioned within a specific narrative that reinterprets the mythological story.',
    historicalContext: 'The institutionalisation of theme-based Pujas is associated with the sarbojanin (community) Puja movement that democratised what had been a feudal, zamindari tradition. Community Pujas competed for prestige and footfall, and innovation became a marker of that prestige. Organisations like Chetla Agrani Club and Mohammad Ali Park pioneered the theme concept. Today, competitions run by newspapers and cultural organisations award prizes for the most creative theme interpretations.',
    folkSignificance: 'Theme-based Pujas are sometimes critiqued by traditionalists as departing too far from the devotional core of the festival. Supporters argue that using the goddess\'s image to address contemporary issues — poverty, environmental destruction, gender violence — is itself an act of devotion that updates the myth\'s relevance. This tension is itself part of the living culture of Pujo.',
    isHistoryDocumented: true,
    historyNote: 'The theme-based Puja is a modern development (post-1960s as a structured phenomenon) and its history is well-documented in newspaper archives and cultural studies.',
    keyFeatures: ['Central social or artistic concept', 'Innovative use of materials', 'Often involves collaboration between karigor and designer/architect', 'Evaluated by critics and competitions'],
  },
  {
    id: 'experimental',
    name: 'Experimental',
    bengaliName: 'পরীক্ষামূলক',
    category: 'thematic',
    tagline: 'Idols that push the boundaries of form, material, and meaning',
    description: 'Experimental idols depart significantly from both traditional iconography and contemporary theme conventions. These may involve radical material substitutions (metal, fibre, recycled objects), non-traditional scales (miniature or enormous), non-traditional iconographic poses, or forms that borrow from non-Bengali artistic traditions. The experimental karigor works at the boundary where idol-making becomes fine art.',
    historicalContext: 'Experimental idol-making emerged as a consciously defined category in the 1980s and 1990s, as art-school trained individuals began entering the karigor world and community Pujas gained resources to take creative risks. Institutions like the Birla Academy of Art and Culture have supported experimental Puja commissions. The category remains contested in terms of its religious status.',
    folkSignificance: 'The experimental form generates the most conversation, debate, and media attention. Its supporters argue that the living religion must evolve; its critics worry about the dilution of a sacred tradition into art performance. This creative tension arguably keeps both the traditional and experimental forms vital.',
    isHistoryDocumented: true,
    keyFeatures: ['Non-traditional materials and forms', 'Often by art-school trained artists', 'Generates critical discussion', 'Boundary between religious art and fine art'],
  },
  {
    id: 'miniature-portable',
    name: 'Miniature / Portable',
    bengaliName: 'ছোট / বহনযোগ্য',
    category: 'regional',
    tagline: 'Small-scale idols for home worship, travel, and the diaspora connection to Durga',
    description: 'Miniature Durga idols, typically ranging from a few centimetres to about 30 centimetres in height, serve the devotional needs of households who want to perform home Puja without a full idol installation. They are also bought as gifts, mementos, and cultural objects by the Bengali diaspora living far from Bengal. These small forms require extraordinary delicacy — all the iconographic detail of a full-sized idol, condensed into a tiny frame.',
    historicalContext: 'Small-scale idol production for household worship has a long history in Bengal — the terracotta figurines of rural worship traditions predate the elaborate Kumartuli tradition. The Krishnanagar school (Nadia district) became particularly renowned for small, hyper-realistic clay figures that were sold as curiosities and objects of worship to both Indian and European buyers during the colonial period.',
    folkSignificance: 'For the Bengali diaspora in particular, a miniature Durga idol serves as a powerful cultural and emotional anchor. The practice of Pujo in homes abroad — often with a small idol, some flowers, and incense — maintains the connection to a homeland and a community. The karigor who makes these small forms serves not just a religious function but a deeply human one: helping displaced people feel connected to where they came from.',
    isHistoryDocumented: true,
    keyFeatures: ['High detail at small scale', 'Clay, terracotta, or mixed media', 'Associated with Krishnanagar school', 'Important for diaspora communities'],
  },
  {
    id: 'international',
    name: 'International / Diaspora',
    bengaliName: 'আন্তর্জাতিক',
    category: 'regional',
    tagline: 'Durga Puja beyond Bengal — how the goddess travels with her people',
    description: 'Durga Puja has been exported wherever Bengali communities have settled — London, New York, Toronto, Melbourne, Singapore, Tokyo. International Pujas may commission idols from Kumartuli (transported at considerable expense), commission from local artisans, or work with karigors who have relocated. The forms that travel internationally range from traditional Shabeki to experimental and miniature. International Pujas have also created new forms — Durga made from materials available abroad, idols that incorporate local artistic sensibilities.',
    historicalContext: 'Bengali diaspora Puja has a long history — communities of Bengali civil servants, students, and businesspeople in Delhi and Mumbai have organised Pujas for over a century. The international diaspora Puja grew significantly from the 1960s onward as Bengali emigrants settled in the UK, North America, and Southeast Asia. The London Bengali community\'s Durga Puja, now one of the largest outside Bengal, dates to the early 1970s.',
    folkSignificance: 'International Pujas are among the most emotionally intense — the longing for home is most acute when you are furthest from it. The Puja becomes not just a religious festival but a community reunion, a cultural affirmation, and sometimes the only time diaspora Bengalis speak their native language and eat their native food for days at a time. For karigors, international commissions are prestigious and increasingly important to their livelihoods.',
    isHistoryDocumented: true,
    keyFeatures: ['Idols transported from India or made locally', 'Adaptation to local contexts', 'Strong community-bonding function', 'UNESCO recognition has boosted international visibility'],
  },
];
