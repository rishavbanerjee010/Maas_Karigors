export interface MakingStep {
  step: number;
  name: string;
  bengaliName?: string;
  icon: string;
  duration: string;
  description: string;
  details: string;
  materials?: string[];
  ritual?: string;
}

export const makingSteps: MakingStep[] = [
  {
    step: 1,
    name: 'Kathamo',
    bengaliName: 'কাঠামো',
    icon: '🎋',
    duration: '2–3 days',
    description: 'Building the inner skeleton from bamboo and wood',
    details: 'The kathamo is the structural backbone of the idol — a framework of bamboo poles, wooden sticks, and wire tied together to form the rough silhouette of the goddess and her family. Karigors begin by selecting properly dried bamboo that will not split or warp. The framework must accurately represent the proportions of the finished figure: arms extending at the right angles for holding the weapons, the torso at the right height, the supporting leg positioned to take weight. A poorly made kathamo cannot be corrected once the clay layers are applied; it is the foundation on which everything rests.',
    materials: ['Dried bamboo poles', 'Wood planks and sticks', 'Iron wire', 'Rope and jute binding'],
  },
  {
    step: 2,
    name: 'Khor Baandhano',
    bengaliName: 'খড় বাঁধানো',
    icon: '🌾',
    duration: '2–4 days',
    description: 'Wrapping the framework in straw to create body mass',
    details: 'Over the bamboo kathamo, the karigor tightly wraps and binds straw (khor) to build up the volume and mass of the figure. The straw creates the basic body shape — the roundness of the torso, the thickness of the arms and legs. This is physically demanding work: the straw must be wound tightly enough to hold its shape but not so rigid that the clay applied over it cannot adhere. The straw filling also serves an important function: it keeps the idol light enough to be transportable and, at Bisarjan, biodegradable enough to dissolve in the river.',
    materials: ['Dry paddy straw (khor)', 'Jute rope for binding', 'Wire for securing'],
  },
  {
    step: 3,
    name: 'Prathom Mati',
    bengaliName: 'প্রথম মাটি',
    icon: '🏺',
    duration: '3–5 days',
    description: 'First application of clay — the coarse body coat',
    details: 'The first layer of clay is applied over the straw body. This is not the fine clay used for detailing but a coarser mixture — typically Ganga clay (the sacred silt from the riverbank) mixed with black soil and sometimes fibrous materials to improve adhesion. The karigor works section by section, pressing the clay firmly onto the straw and smoothing it to create the basic body form. This initial coat must be thick enough to support subsequent layers. Traditionally, the clay must include some soil from a specific location: the threshold of a "nishiddo bari" (a sex worker\'s house), representing the recognition of all women\'s labour in the creation of the goddess.',
    materials: ['Ganga clay (Ganges river silt)', 'Black soil', 'Paddy husk', 'Water for working consistency'],
    ritual: 'The clay must traditionally include soil (maati) collected from the threshold of a nishiddo bari (sex worker\'s establishment), a practice that recognises all forms of women\'s labour in society.',
  },
  {
    step: 4,
    name: 'Shukaano',
    bengaliName: 'শুকানো',
    icon: '☀️',
    duration: '5–10 days',
    description: 'Careful drying to prevent cracking',
    details: 'After each layer of clay is applied, the idol must be dried gradually and carefully. Rapid drying causes cracking and warping; too little drying prevents the next layer from adhering. In traditional workshops, idols are placed in well-ventilated spaces out of direct harsh sunlight. Karigors monitor the drying process closely, especially for large sections where internal moisture pockets can cause structural failures. In the rainy months of Shravan and Bhadra (July–September), when Pujo work is in full swing, humidity slows drying and requires adjustments to schedule and technique.',
    materials: ['Ventilated workshop space', 'Fans or natural airflow'],
  },
  {
    step: 5,
    name: 'Meena Kora',
    bengaliName: 'মিনা কোরা',
    icon: '✋',
    duration: '7–14 days',
    description: 'Fine clay modelling and detailing — where the goddess takes her face',
    details: 'This is the stage most karigors consider the heart of the craft. After the rough form has dried, fine-grained clay is applied and sculpted to create the expressive details: the contours of the face, the shape of the eyes, nose, and lips, the flowing lines of the hair, the drape of the saree, the modelled hands holding weapons. For the face — the mukhshree — extreme care is taken. The expression must be simultaneously fierce and compassionate, warrior and mother. Some karigors make the face separately in a mould refined over years, while others model it freehand each time. The hands and weapons are also modelled at this stage.',
    materials: ['Fine-grained alluvial clay', 'Smaller sculpting tools', 'Water for working', 'Molds for repeated forms'],
  },
  {
    step: 6,
    name: 'Rong Deoa',
    bengaliName: 'রং দেওয়া',
    icon: '🎨',
    duration: '5–8 days',
    description: 'Painting — from base coats to the goddess\'s golden glow',
    details: 'Painting begins with the application of a base coat — traditionally a lime and tamarind mixture (chalk and glue base) that creates the white ground from which colours develop. Over this, the karigor applies successive layers of colour. The goddess\'s skin is typically painted in the sindoor complexion — a warm reddish-gold that represents her as "Gauri," the radiant one. Ornaments are painted gold, Mahishasura is given a dark complexion, the lion is painted in naturalistic ochres. Traditional idol painting used natural pigments; most contemporary karigors use chemical colours, though eco-conscious artists like Kakoli Pal are returning to natural pigments.',
    materials: ['Chalk powder and glue (base)', 'Synthetic or natural pigments', 'Brushes of varying sizes', 'Gold and silver metallic paints'],
  },
  {
    step: 7,
    name: 'Chokkhu Daan',
    bengaliName: 'চক্ষু দান',
    icon: '👁️',
    duration: '1 day (ritual)',
    description: 'The most sacred moment — giving the goddess her eyes',
    details: 'Chokkhu Daan (literally "the gift of eyes") is the ritual that transforms the clay figure into a living deity. On a specific auspicious day before Pujo — traditionally Mahalaya or as determined by the Puja priest — the karigor paints the eyes (or applies the glass eyes, in more contemporary practice) while specific mantras are chanted and prayers are offered. Once the eyes are given, the idol is considered "alive" (pranapratishtha-like awakening) and must be treated with full religious respect. This is why half-finished idols with blank eye sockets have a particular eerie quality — the goddess is present but not yet looking.',
    ritual: 'Chokkhu Daan is performed on an auspicious day with the recitation of mantras. After this point, the idol is considered to be inhabited by divine presence and all subsequent interactions are governed by ritual rules.',
    materials: ['Glass eyes or specially prepared paint', 'Ritual materials (flowers, incense)', 'Gold kohl (kajal) for finishing'],
  },
  {
    step: 8,
    name: 'Saaj Sajja',
    bengaliName: 'সাজ সজ্জা',
    icon: '✨',
    duration: '3–7 days',
    description: 'Decoration — jewellery, fabrics, ornaments, the finishing grandeur',
    details: 'After painting and Chokkhu Daan, the final decoration is applied. This may involve attaching shola ornaments, applying German silver foil (Daker Saaj), draping the goddess in silk or zari fabric, attaching the crown (mukut), positioning weapons in the modelled hands, and applying final touches of gold paint. The decoration style determines whether the finished idol follows the Daker Saaj, Sholar Saaj, or another decorative tradition. In community Pujas, the decoration often involves contributions from many people — floral arrangements, fabric draping, and final ornament placement becoming communal acts of love and devotion.',
    materials: ['Shola pith ornaments', 'German silver foil', 'Silk and zari fabrics', 'Metal ornaments and mukut', 'Artificial flowers and natural flowers'],
  },
  {
    step: 9,
    name: 'Pujo',
    bengaliName: 'পুজো',
    icon: '🌸',
    duration: '5 days (Shashti to Dashami)',
    description: 'The days of worship — the goddess is home',
    details: 'The idol\'s purpose is fulfilled over the five days of Puja: Shashti (invocation), Saptami (seventh day), Ashtami (eighth, the main day), Navami (ninth), and Dashami (the tenth, final day). During these days, the idol receives daily ritual offerings (bhog), is fanned with chamara (fly whisks), and is the focus of elaborate community worship. The pandal (temporary structure around the idol) is decorated, lit, and filled with devotees night and day. For the karigor, this is also the time when their work is seen by the maximum number of people — pride, anxiety, and satisfaction mix in equal measure.',
    materials: ['Ritual flowers (hibiscus, lotus)', 'Prasad and bhog offerings', 'Incense and lamps', 'Dhunuchi (camphor lamp)'],
  },
  {
    step: 10,
    name: 'Bisarjan',
    bengaliName: 'বিসর্জন',
    icon: '🌊',
    duration: '1 day (Dashami)',
    description: 'The immersion — the goddess returns to the cosmos, and the karigor begins again',
    details: 'On Dashami, the final day, the idol is carried in procession to the nearest body of water — a river, a pond, the sea — and immersed. This Bisarjan (dissolution) is understood as the goddess returning to her husband Shiva\'s home after her annual visit to her parents. For devotees, it is an intensely emotional moment — the idol they have loved for five days dissolves into the river. For karigors, Bisarjan is simultaneously an ending and a beginning: months of work disappear in minutes, and the workshop must be cleaned, debts settled, and the next year\'s work begun. The ritual return of the idol to earth and water closes a cycle of creation that began with Ganga clay.',
    materials: ['Flowers, petals', 'Vermilion (sindoor)', 'Final offerings of sweets and fruit'],
    ritual: 'Sindoor khela (women applying sindoor to each other and to the goddess\'s feet) precedes Bisarjan. Women bid farewell with ululation (ululu) and sweets, invoking her return next year: "Aashchhe bochhor aabar hobe" — She will come again next year.',
  },
];

export const sustainabilityContent = {
  title: 'Sustainability & The Goddess of Clay',
  intro: 'The traditional Durga idol, made with Ganga clay, bamboo, straw, and natural pigments, was inherently ecological — at Bisarjan, it dissolved harmlessly into the river, returning the earth to itself. But decades of synthetic materials, chemical paints, non-biodegradable decorations, and POP (Plaster of Paris) idols have created significant environmental challenges.',
  sections: [
    {
      heading: 'The Traditional Ecological Logic',
      content: 'The traditional idol-making process embodies a closed ecological loop. Ganga clay returns to the Ganga. Bamboo decomposes. Straw dissolves. Natural pigments are benign. The idol lives for five days and then, in its dissolution, demonstrates the teaching of impermanence. This is not accidental — it is theology in material form.',
    },
    {
      heading: 'The Problem with POP and Synthetic Materials',
      content: 'From the 1970s onward, Plaster of Paris (POP) began replacing clay for many idol forms because it was cheaper, lighter, and took paint better. But POP does not dissolve in water — it accumulates on riverbeds and releases harmful chemicals. Similarly, synthetic chemical paints release heavy metals and other pollutants into water bodies during Bisarjan. Studies of Kolkata\'s river water after immersion have documented significant spikes in arsenic, mercury, and chromium from these materials.',
    },
    {
      heading: 'The Karigor Response',
      content: 'A growing number of karigors — including artists like Kakoli Pal — have committed to returning to traditional materials: Ganga or local clay, bamboo, straw, and natural pigments made from turmeric, indigo, ochre, and organic dyes. These \'eco-idols\' command a premium price and have found a receptive market among urban environmental activists. Government agencies including the West Bengal Pollution Control Board have promoted eco-friendly Puja guidelines.',
    },
    {
      heading: 'Challenges of Sustainable Transition',
      content: 'Natural materials cost more and are harder to work with. The sourcing of Ganga clay itself is complicated — the West Bengal government regulates riverbank clay extraction to prevent erosion. Many karigors face real economic pressure to use cheaper synthetic materials. For sustainability to take hold, the price premium for eco-friendly idols must filter down reliably to the karigors themselves, not just the Puja committees.',
    },
    {
      heading: 'Looking Forward',
      content: 'The most hopeful sign is that the push for sustainable idol-making comes from within the karigor community itself, not just from outside regulators. When karigors like Kakoli Pal speak at TEDx events about craft as climate action, they are reclaiming an ancient ecological wisdom and presenting it as relevant to the present crisis. The Durga idol — made of earth, animated by ritual, dissolved in water — was always a teaching about impermanence and return. Its sustainable practice is not a new idea. It is memory.',
    },
  ],
};
