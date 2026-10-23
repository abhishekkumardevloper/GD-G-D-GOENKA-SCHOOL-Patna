import { NewsArticle } from '../types';
import { ASSET_IMAGES } from './schoolConfig';

export const NEWS_EVENTS_DATA: NewsArticle[] = [
  {
    id: "steam-aerobay-carnival",
    slug: "steam-aerobay-carnival-patna",
    title: "Annual Aerobay & STEAM Innovation Carnival Showcases Student Ingenuity",
    date: "November 14, 2025",
    category: "Academics",
    excerpt: "Students from Primary and Middle wings presented working aerodynamic models, robotic rovers, and sensor-based smart agricultural prototypes at our dedicated Aerobay exhibition.",
    featuredImage: ASSET_IMAGES.aerobayLab,
    tags: ["Aerobay", "Robotics", "STEM", "Innovation", "Student Showcase"],
    author: "Academic Coordinator",
    content: [
      "The campus was abuzz with intellectual fervor as G D Goenka Public School, Patna hosted its flagship Aerobay & STEAM Innovation Carnival. Over 250 students from grades III through VIII actively demonstrated innovative scientific working models created under the mentorship of our laboratory faculty.",
      "A key highlight was the aerodynamics wing, where students explained the Bernoulli principle through custom-built glider models and live wind-tunnel demonstrations. Meanwhile, in the robotics enclosure, automated obstacle-avoiding rovers and soil moisture sensor devices drew commendations from visiting dignitaries and parents.",
      "Principal Mrs. Meeta Sharma inaugurated the event, emphasizing that hands-on experimentation transforms children from passive technology consumers into active creative problem solvers. The day concluded with an aerial drone exhibition, leaving parents spellbound by the practical competence demonstrated by their wards."
    ]
  },
  {
    id: "annual-sports-meet",
    slug: "annual-inter-house-sports-meet",
    title: "Spirited Athletic Feats at the Annual Inter-House Sports Championship",
    date: "December 22, 2025",
    category: "Sports",
    excerpt: "Athletes competed in track and field, 50m swimming heats, basketball playoffs, and roller-skating relays, exemplifying camaraderie and true sportsmanship.",
    featuredImage: "/images/real/sports-real.jpg",
    tags: ["Athletics", "Swimming", "Basketball", "House Championship", "Fitness"],
    author: "Department of Physical Education",
    content: [
      "The school grounds reverberated with resonant cheers as the Annual Inter-House Sports Meet commenced with a crisp March Past led by the School Prefects and House Captains. Four vibrant houses competed in high spirits across track, field, court, and aquatic disciplines.",
      "The track events witnessed electrifying 100m and 4x100m relay sprints, while the skating rink saw agile young champions showcase precision and balance. At the semi-Olympic swimming pool, backstroke and freestyle heats saw competitive races with record-breaking personal timings.",
      "Chairman Shri Gopal Krishna Gupta and Vice Chairman Akash Deep awarded trophies to the winning house, reiterating the school's unwavering commitment to balancing rigorous scholarly pursuits with enduring physical grit and team resilience."
    ]
  },
  {
    id: "republic-day-celebrations",
    slug: "76th-republic-day-celebrations-patna",
    title: "Patriotic Reverence & Cultural Harmony at 76th Republic Day Celebrations",
    date: "January 26, 2026",
    category: "Celebrations",
    excerpt: "The Tricolour unfurled with pride followed by patriotic choir harmonies, yoga displays, and cultural dances celebrating India's composite heritage.",
    featuredImage: "/images/real/event-real.jpg",
    tags: ["National Days", "Patriotism", "Cultural Program", "Celebration"],
    author: "Cultural Committee",
    content: [
      "The campus celebrated India's 76th Republic Day with deep reverence and joyful festivities. The ceremonial unfurling of the National Flag was accompanied by the resonant rendering of the National Anthem by the student choir.",
      "Students presented a synchronized Surya Namaskar display, followed by a dramatic tableau commemorating India's freedom movement and constitutional architects. The school band enthralled the audience with crisp marching beats.",
      "In her address, Principal Mrs. Meeta Sharma inspired students to uphold constitutional values of justice, fraternity, and intellectual honesty in their daily conduct."
    ]
  },
  {
    id: "literary-fest-debating-championship",
    slug: "literary-and-debating-championship",
    title: "Wordsmiths at Work: Annual Inter-School Literary & Debating Fest",
    date: "October 12, 2025",
    category: "Events",
    excerpt: "Passionate oratory, extempore presentations, Shakespearean soliloquies, and Hindi poetry recitations celebrated the power of language and critical discourse.",
    featuredImage: "/images/real/classroom-real-3.jpg",
    tags: ["Debating", "Literature", "Public Speaking", "Elocution"],
    author: "Language Faculty",
    content: [
      "The auditorium resonated with articulate eloquence and well-structured arguments during the Annual Literary & Debating Fest. Middle school debaters tackled thought-provoking propositions surrounding artificial intelligence in modern education and environmental accountability.",
      "In parallel sessions, the Hindi Department hosted 'Kavya Sandhya', celebrating classical Hindi and Maithili poetry, where young orators rendered inspiring verses with passionate cadence.",
      "The panel of independent judges lauded the poise, factual substantiation, and respectful rebuttal techniques displayed by all speakers."
    ]
  },
  {
    id: "plantation-drive-green-patna",
    slug: "van-mahotsav-plantation-drive-patna",
    title: "Green Patna: Goenkans Plant 500 Saplings on Campus & Surrounding Khagaul",
    date: "July 28, 2025",
    category: "Campus Life",
    excerpt: "In alignment with environmental stewardship, students and educators planted native neem, gulmohar, and fruit saplings, pledging to nurture clean air and biodiversity.",
    featuredImage: "/images/real/campus-grounds.webp",
    tags: ["Eco Club", "Van Mahotsav", "Sustainability", "Community Outreach"],
    author: "Eco Club Faculty Lead",
    content: [
      "Fostering an early sense of ecological duty, the Eco Club at G D Goenka Public School, Patna spearheaded a grand tree plantation drive titled 'Harit Patna'. Students from Class IV upwards brought saplings and planted them along the campus perimeter and neighboring green corridors in Saguna More and Khagaul.",
      "Each class adopted a designated green cluster, taking collective responsibility for watering, mulching, and monitoring sapling health throughout the academic term. In accompanying classroom workshops, teachers led discussions on groundwater conservation, soil erosion mitigation, and reducing single-use plastics.",
      "Principal Mrs. Meeta Sharma commended the young environmental crusaders, noting that character development is incomplete without a respectful reverence for Mother Nature."
    ]
  }
];
