import { AcademicStage } from '../types';
import { ASSET_IMAGES } from './schoolConfig';

export const ACADEMIC_STAGES: Record<string, AcademicStage> = {
  'pre-primary': {
    id: 'pre-primary',
    slug: 'pre-primary',
    title: 'Pre-Primary Wing',
    subtitle: 'Nurturing Wonder, Play & Joyful Discovery',
    grades: 'Playgroup, Nursery, Lower KG & Upper KG',
    ageGroup: '2.5 to 5.5 Years',
    heroImage: ASSET_IMAGES.prePrimaryKids,
    overview: 'The early years lay the neurological and emotional bedrock for lifelong learning. Our pre-primary wing embraces a child-centric, play-based, and inquiry-led methodology inspired by contemporary early childhood neuroscience, ensuring that every toddler steps into school with excitement and confidence.',
    pedagogy: [
      'Multi-sensory thematic learning corners',
      'Phonics-based linguistic immersion and storytelling',
      'Montessori-inspired manipulatives for fine motor and spatial mastery',
      'Music, rhythmic movement, and physical body awareness',
      'Social-emotional bonding and cooperative play protocols'
    ],
    keyHighlights: [
      'Spacious, child-safe rubberized play areas and indoor activity arena',
      'Low student-to-teacher ratio (15:1) ensuring individual affection and care',
      'Daily circle time building expressive vocabulary and listening patience',
      'Splash pool, sand play station, and gardening sensory zones',
      'Periodic developmental milestone portfolios shared transparently with parents'
    ],
    curriculumFocus: [
      {
        area: 'Literacy & Communication',
        description: 'Jolly Phonics, conversational role-play, rich picture-book reading, and early expressive mark-making.'
      },
      {
        area: 'Mathematical Thinking',
        description: 'Counting through tangible objects, pattern recognition, spatial shapes, sorting, and measurement intuition.'
      },
      {
        area: 'Environmental Understanding',
        description: 'Exploring flora, fauna, weather, community helpers, and eco-friendly habits through guided sensory discovery.'
      },
      {
        area: 'Creative & Physical Expression',
        description: 'Finger painting, clay modeling, rhythmic rhymes, balancing games, and gross-motor coordination drills.'
      }
    ],
    coCurricular: [
      'Weekly Little Chef (Fireless Cooking) sessions',
      'Puppet theatre and dramatization time',
      'Color days and cultural festival pageants',
      'Sensory garden exploration walks'
    ]
  },
  'primary': {
    id: 'primary',
    slug: 'primary',
    title: 'Primary & Middle Wing',
    subtitle: 'Building Conceptual Rigour, Inquiry & Ethical Confidence',
    grades: 'Classes I to VIII (CBSE Aligned)',
    ageGroup: '6 to 14 Years',
    heroImage: ASSET_IMAGES.primaryStudents,
    overview: 'As students advance into formal schooling, our curriculum seamlessly transitions from guided play to structured intellectual inquiry. Guided by the National Curriculum Framework (NCF) and CBSE guidelines, we foster critical analysis, numerical mastery, scientific experimentation, and multi-lingual fluency.',
    pedagogy: [
      'Experiential, project-based inquiry learning (PBL)',
      'Interdisciplinary STEM integration utilizing Aerobay and science labs',
      'Collaborative problem solving and debate-led humanities seminars',
      'Differentiated instruction tailored to varied cognitive paces',
      'Continuous and Comprehensive Evaluation (CCE) assessing holistic growth'
    ],
    keyHighlights: [
      'Daily hands-on laboratory periods for sciences, mathematics, and computers',
      'Aerobay aerospace, robotics, and coding embedded directly into the weekly timetable',
      'Compulsory sports participation in swimming, basketball, skating, or football',
      'Comprehensive library reading programs with scheduled author spotlights',
      'Active leadership opportunities through the student Prefectorial Council and House System'
    ],
    curriculumFocus: [
      {
        area: 'Languages (English & Hindi)',
        description: 'Advanced reading comprehension, analytical essay composition, public elocution, grammar mechanics, and appreciation of classical and modern literature.'
      },
      {
        area: 'Mathematics',
        description: 'Rigorous conceptual clarity in arithmetic, algebra, geometry, data interpretation, and practical applications in the dedicated Maths Lab.'
      },
      {
        area: 'Sciences (EVS / Physics, Chemistry, Biology)',
        description: 'Observation-based inquiry, empirical experimentation in specialized labs, environmental conservation ethics, and scientific method reporting.'
      },
      {
        area: 'Social Sciences & Humanities',
        description: 'Indian history, world geography, civic responsibility, constitutional values, and cultural heritage analysis.'
      },
      {
        area: 'Digital Technologies & Coding',
        description: 'Typing fluency, computational thinking, Scratch programming, foundational Python, cyber safety ethics, and office suite productivity.'
      }
    ],
    coCurricular: [
      'Inter-House Debates, Quiz Bowls, and Spell Bees',
      'Model United Nations (MUN) simulation preparatory club',
      'Robotics, Aero-modeling & Drone exhibitions',
      'Indian classical & contemporary choral singing and instrumental bands',
      'Annual cultural fest, theatrical productions, and athletic meets'
    ]
  }
};

export const ACADEMIC_PILLARS = [
  {
    title: "Inquiry-Led Pedagogy",
    description: "Students do not passively memorize; they hypothesize, experiment, evaluate evidence, and draw reasoned conclusions.",
    icon: "Compass"
  },
  {
    title: "Experiential & STEM Learning",
    description: "Every theoretical concept is linked to laboratory experimentation, real-world case studies, or Aerobay engineering builds.",
    icon: "Cpu"
  },
  {
    title: "Holistic Character & Values",
    description: "Integrity, civic respect, empathy, and environmental stewardship are consciously woven into daily assemblies and classroom ethos.",
    icon: "HeartHandshake"
  },
  {
    title: "Continuous Assessment",
    description: "Formative diagnostic assessments identify individual learning gaps early, replacing high-stress exam anxiety with supportive mastery.",
    icon: "CheckCircle2"
  }
];
