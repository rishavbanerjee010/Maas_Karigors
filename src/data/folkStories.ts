export type StoryCategory = 'folklore' | 'documented' | 'tradition' | 'ritual';

export interface FolkStory {
  id: string;
  title: string;
  bengaliTitle?: string;
  category: StoryCategory;
  tagline: string;
  content: string[];
  note: string;
  relatedCustoms?: string[];
}

export const folkStories: FolkStory[] = [
  {
    id: 'bodhon',
    title: 'Bodhon — The Awakening',
    bengaliTitle: 'বোধন',
    category: 'ritual',
    tagline: 'Why Durga is awakened in autumn, the time when gods are asleep',
    content: [
      'The Sharad (autumn) Puja of Durga is known as the Akal Bodhon — the awakening at the wrong time. According to the Ramayana, when Rama needed Durga\'s blessing before his battle with Ravana, he called upon her in the month of Ashwin (October), which is Uttarayan — when the sun moves northward and the gods are traditionally sleeping. This was the "wrong" time (akal) for her worship.',
      'Despite the inauspicious timing, Brahma assisted Rama in the ritual awakening of the goddess, and she gave her blessings for his victory over Ravana. This is why the Puja is called Akal Bodhon — the out-of-season awakening — and why the specific tree chosen for Bodhon, the Bel (wood apple) tree, plays a central role.',
      'On the evening of Shashti (the sixth day of the lunar fortnight of Ashwin), the priest performs Bodhon — the ritual awakening of the goddess within a branch of the Bel tree. This is the official moment when the Puja begins. The clay idol, already installed in the pandal, has been present but not yet the active focus of worship. With Bodhon, the divine presence is invited in.',
      'In traditional household Pujas, a banana tree and a specific arrangement of vessels (Nabapatrika, the Nine Plants, representing the nine forms of the goddess) are installed and bathed on Saptami morning — this is the other form of the goddess\'s installation. These two forms — the clay idol and the Nabapatrika — represent two streams of the tradition that merged over centuries.',
    ],
    note: 'The narrative of Akal Bodhon and Rama\'s worship is documented in the Uttarakanda section of Valmiki\'s Ramayana and in the Krittivasi Ramayana (15th century Bengali version). The ritual procedures for Bodhon are documented in the Durga Puja puja paddhati (ritual manuals) compiled by priests.',
    relatedCustoms: ['Installation of Bel tree branch', 'Nabapatrika ritual on Saptami morning', 'Invocation of Brahma for the awakening'],
  },
  {
    id: 'chokkhu-daan',
    title: 'Chokkhu Daan — The Gift of Eyes',
    bengaliTitle: 'চক্ষু দান',
    category: 'ritual',
    tagline: 'The moment clay becomes divine — the mystery of the painted eye',
    content: [
      'Of all the moments in Durga Puja, Chokkhu Daan — the ritual painting of the goddess\'s eyes — is the most charged with mystery and reverence. A clay figure, no matter how beautifully modelled, is just an artwork until its eyes are given. At the moment of Chokkhu Daan, something changes.',
      'Traditionally, Chokkhu Daan is performed by the karigor — not the priest — on the morning of Mahalaya or on the specific day determined by the Puja\'s calendar. The karigor first bathes and purifies themselves, then, in a state of concentration that participants describe as meditative, paints or places the eyes on the goddess\'s face. Specific mantras are chanted simultaneously by the priest or family elders. The karigor is considered the vehicle through which the goddess receives her sight.',
      'There is a well-documented tradition of the karigor imagining or dreaming of the goddess\'s face before Chokkhu Daan — allowing the expression to come through, not imposing one. Master karigors like Sanatan Rudra Pal have spoken about this in interviews: the face is not invented but remembered, as if the goddess\'s face already exists and the karigor\'s task is to recognise and reveal it.',
      'Once the eyes are given, all incomplete or workshop relationships with the idol end. The workshop curtain is drawn. The deity cannot be touched without ritual purity. The karigor who made her must now approach her as a devotee.',
    ],
    note: 'The ritual of Chokkhu Daan is documented in Puja paddhati texts and in ethnographic studies of Kumartuli. The practice of karigor as the agent of the ritual (rather than a brahmin priest) is unusual in Hindu practice and has been studied by scholars including Pika Ghosh and Tapati Guha-Thakurta in their work on Kumartuli. The spiritual testimonies of individual karigors are oral histories that fall into a folk/personal tradition rather than codified scripture.',
    relatedCustoms: ['Karigor\'s purification ritual', 'Concurrent mantra recitation', 'Drawing of workshop curtain after completion'],
  },
  {
    id: 'maa-homecoming',
    title: 'Maa Returning Home',
    bengaliTitle: 'মায়ের আগমন',
    category: 'folklore',
    tagline: 'How Bengalis reimagined the warrior goddess as a daughter coming home',
    content: [
      'The most emotionally distinctive aspect of the Bengali Durga Puja is the way the festival is experienced as a family homecoming rather than a war commemoration. In most of India, Navratri — the nine nights of the goddess — culminates in a celebration of her victory over Mahishasura (the demon king). In Bengal, Durga is understood primarily as Uma, the daughter of the mountains — the child of Himavat (the Himalayas) and Menaka — who has been living far away with her husband Shiva at Mount Kailash.',
      'In Bengali folk imagination, Durga comes home every autumn, not to wage war but to visit her parents. She brings her children: Lakshmi, Saraswati, Ganesh, and Kartik. The five days of Pujo are the days of her visit. Bisarjan — the immersion — is her return to her husband\'s home. The lamentation at Bisarjan is the grief of a family sending their daughter back.',
      'This reimagining is embedded in the devotional literature of Bengal, most notably in the genre of Agamanir Gaan — songs welcoming the coming of Uma. These songs, sung by women particularly in the weeks before Pujo, are addressed to Menaka (Durga\'s mother) and describe her joy at hearing that her daughter is coming home. The imagery is entirely domestic and human: the mother worrying whether her daughter has been eating well, whether Shiva treats her well.',
      'This folk tradition has no single authoritative text — it developed organically through sung poetry, women\'s oral traditions, and popular religious culture. Its emotional power is undeniable. Intellectuals and poets from Rabindranath Tagore onward have written about how this feminine folk reimagining of Durga is one of Bengal\'s most original contributions to Hindu devotional culture.',
    ],
    note: 'The tradition of Durga as homecoming daughter is a documented and studied dimension of Bengali folk religiosity, distinct from the warrior goddess narrative of pan-Indian Shaivism. The Agamanir Gaan genre is documented by musicologists and cultural historians. The precise origins of when this tradition crystallised are debated; most scholars place it in the late medieval/early colonial period.',
    relatedCustoms: ['Agamanir Gaan (songs of the goddess\'s arrival)', 'Women\'s welcoming rituals', 'Bisarjan lamentation', 'Dhaak drum announcement of her coming'],
  },
  {
    id: 'nishiddo-palli-soil',
    title: 'The Soil at the Threshold',
    bengaliTitle: 'নিষিদ্ধ পল্লীর মাটি',
    category: 'tradition',
    tagline: 'A gram of sacred earth from the most marginalised threshold — and what it means',
    content: [
      'In traditional Durga idol-making, the clay used to model the goddess must contain a small amount of soil (mati) collected from the threshold (debar) of a nishiddo palli — a sex workers\' quarter. This is not optional, not decorative, not symbolic in a distant sense. It is a required material component of the sacred object.',
      'The tradition is explained in several ways. One interpretation is that the goddess, who represents all women and all forms of female power, must be made with earth from the space where women\'s labour is most exploited and least valued. By incorporating this soil, the idol-maker acknowledges that the goddess\'s power includes and encompasses the most marginalised women in society.',
      'Another interpretation connects to the purification logic of Hindu practice: the threshold of the sex worker\'s establishment is considered to hold the virtue of the men who enter and leave their righteousness behind. The soil thus carries a concentrated form of that surrendered virtue, which makes it powerful material for a divine figure.',
      'A third interpretation — more sociologically framed — is that the tradition represents a forced acknowledgement by the upper-caste, landholding families who commissioned these Pujas that their wealth and their women\'s protected domestic position was built on the labour of all women, including those in the most precarious positions.',
      'Karigors in Kumartuli report that this tradition is maintained, though the logistics have changed as red-light districts have shifted and as some karigors work in contexts far from such areas. The requirement remains symbolically important even where its literal fulfilment is approximated.',
    ],
    note: 'This tradition is documented in ethnographic accounts of Kumartuli and has been discussed in feminist and Dalit studies scholarship as an example of subaltern inclusion in mainstream Hindu ritual. The tradition is real and practised; the interpretive frameworks described above represent a range of scholarly and oral traditions. No single interpretation is definitive.',
    relatedCustoms: ['Clay collection ritual', 'The karigor\'s responsibility for sacred material sourcing', 'Ganga clay (river silt) as primary material'],
  },
  {
    id: 'do-chala-folk',
    title: 'The Do Chala Folk Account',
    bengaliTitle: 'দোচালার লোককথা',
    category: 'folklore',
    tagline: 'The family disagreement that supposedly gave rise to the two-canopy form — a story marked as legend',
    content: [
      'There is a folk story — circulated warmly and without claims of religious authority — about why the Do Chala form of the Durga idol exists with two separate canopies rather than one unified one.',
      'The story goes: during Durga\'s annual visit home, a quarrel broke out in the family. The precise cause varies with the telling — sometimes it is Ganesh and Kartik arguing over who gets to ride which vehicle, sometimes it is Lakshmi objecting to Saraswati\'s manner, sometimes it is the lion making a scene. In the heat of the disagreement, the family physically separated — some gathering under one part of the verandah, others moving to another corner.',
      'Durga, in her mother\'s exasperation, could not reunite the quarrelsome children under one roof. She stood between them, mediating, her arms reaching toward both sides. The two chalaa (canopies) of the Do Chala form are said to represent this divided arrangement, with Durga standing between and above the family\'s disagreement.',
      'This story is told with humour and warmth. It is not a theological claim. It does not appear in any canonical text. Most people who tell it know it is a story invented to make a structural archival form feel like a family narrative. It succeeds in doing exactly that — it makes the Do Chala feel like something that happened, not something that was designed.',
    ],
    note: 'This is explicitly a folk story with no documented historical or scriptural basis. It is classified here as folklore/legend. The structural history of the Do Chala form as an older, pre-Ek Chala arrangement is documented separately. Folk stories like this one are valuable as cultural expressions even when they are not historical accounts.',
    relatedCustoms: ['Do Chala idol arrangement', 'Folk accounts told during Pujo preparations'],
  },
  {
    id: 'bisarjan',
    title: 'Bisarjan — The Farewell',
    bengaliTitle: 'বিসর্জন',
    category: 'ritual',
    tagline: 'The immersion, the grief, and "Aashchhe bochhor aabar hobe" — she will come again',
    content: [
      'Bisarjan — the immersion of the Durga idol on Dashami, the tenth day — is the emotional climax of the entire Puja. The days leading up to it carry a particular emotional weight. On Navami evening, there is a palpable pre-grief. People visit pandals one last time, making offerings, sitting in the goddess\'s presence as if memorising her face.',
      'On Dashami morning, women perform sindoor khela — married women apply sindoor (vermilion) to the goddess\'s feet, to each other\'s hair partings, and to each other\'s faces. This is a ritual of feminine solidarity: a gathering of women around the figure of the divine mother, marked with the sindoor that signifies marriage and therefore the continuation of life.',
      'Then the procession begins. The idol is carried — or in larger Pujas, transported on a truck or decorated vehicle — to the water. Dhaak drums play. People follow in their thousands. Devotees touch the goddess\'s feet a final time. Some wail openly.',
      'At the water\'s edge, the priests perform final rituals. Then the idol enters the river. It is not dropped but placed gently, lovingly. Families watch until the water takes the image. The clay that was Ganga clay returns to the Ganga. The bamboo floats away. The straw dissolves.',
      'The last words spoken are the promise: "Aashchhe bochhor aabar hobe" — Next year, it will happen again. She will come again. The grief of parting is held within the certainty of return. This is the Puja\'s deepest teaching: impermanence held within cycles, loss held within love.',
    ],
    note: 'Bisarjan is fully documented ritual practice with roots in Shakta worship. The social dimensions — sindoor khela as a women\'s ritual, the emotional character of the farewell — are documented in ethnographic and anthropological studies. The environmental dimension of immersion is a contemporary concern discussed in academic and policy contexts.',
    relatedCustoms: ['Sindoor khela', 'Final dhaak procession', 'Narayon seva (feeding the poor) on Navami or Dashami', 'Bijoya Dashami visits and exchange of sweets'],
  },
];
