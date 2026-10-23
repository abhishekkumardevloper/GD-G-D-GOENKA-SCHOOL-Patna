import { CareerVacancy } from '../types';

export const CAREER_VACANCIES: CareerVacancy[] = [
  {
    id: 'prt-teachers',
    title: 'Primary Teachers (PRT) - English, EVS & Mathematics',
    department: 'Primary Wing',
    type: 'Full-time',
    location: 'Campus, Saguna More, Patna, Bihar',
    experience: '2–5 years in a reputed CBSE / ICSE institution',
    qualification: 'Graduation in relevant discipline with B.Ed. or D.El.Ed.; CTET/STET preferred',
    rolesResponsibilities: [
      'Deliver engaging, concept-driven classroom instruction aligned with NEP/CBSE guidelines',
      'Integrate multi-sensory activities, smart-panel teaching tools, and continuous assessments',
      'Maintain proactive, empathetic communication with parents on student progress and welfare',
      'Actively participate in inter-house co-curricular initiatives, assemblies, and school events'
    ],
    description: 'We are seeking passionate primary educators who understand child psychology, possess exceptional spoken English communication, and can bring joyful learning to foundational classrooms.',
    isOpen: true
  },
  {
    id: 'tgt-science-maths',
    title: 'Trained Graduate Teachers (TGT) - Science & Mathematics',
    department: 'Middle School',
    type: 'Full-time',
    location: 'Campus, Saguna More, Patna, Bihar',
    experience: '3–6 years teaching middle school students in CBSE schools',
    qualification: 'B.Sc. / M.Sc. in Physics, Chemistry, Biology, or Mathematics with B.Ed.',
    rolesResponsibilities: [
      'Foster high conceptual rigour in core STEM disciplines through practical laboratory demonstrations',
      'Guide students in science exhibitions, Aerobay projects, and Olympiad problem-solving',
      'Design diagnostic assessments that target conceptual comprehension over rote memorization',
      'Contribute to curriculum planning and interdisciplinary project modules'
    ],
    description: 'Looking for dynamic middle school mentors who can demystify complex scientific and mathematical principles and inspire analytical curiosity.',
    isOpen: true
  },
  {
    id: 'pre-primary-facilitator',
    title: 'Pre-Primary / Nursery Facilitators (ECCE)',
    department: 'Early Childhood Wing',
    type: 'Full-time',
    location: 'Campus, Saguna More, Patna, Bihar',
    experience: '1–4 years of experience working with toddler & kindergarten groups',
    qualification: 'NTT / ECCE / Montessori certification with graduation',
    rolesResponsibilities: [
      'Create a warm, secure, and stimulating classroom environment using play-way pedagogy',
      'Implement Jolly Phonics, sensory discovery stations, and circle time storytelling',
      'Observe developmental milestones and maintain detailed observational portfolios',
      'Ensure compassionate care, hygiene, and emotional comfort for early learners'
    ],
    description: 'Warm, patient, and creative individuals dedicated to making a child’s very first school experience safe, loving, and magical.',
    isOpen: true
  },
  {
    id: 'aerobay-stem-instructor',
    title: 'Aerobay & STEM Lab Coordinator / Robotics Trainer',
    department: 'Innovation & Technology',
    type: 'Full-time',
    location: 'Campus, Saguna More, Patna, Bihar',
    experience: '2+ years hands-on experience in robotics, aero-modelling, Arduino, or STEM training',
    qualification: 'B.Tech / B.E. in Mechanical, Aeronautical, Electronics, or Computer Science',
    rolesResponsibilities: [
      'Manage and maintain the Aerobay lab hardware, drone simulators, and 3D printing equipment',
      'Conduct weekly practical aerospace, robotics, and coding sessions for classes III to VIII',
      'Mentor student teams for regional and national robotics competitions and science showcases',
      'Introduce intuitive coding concepts using Scratch, Python, and micro-controllers'
    ],
    description: 'An enthusiastic technologist passionate about inspiring the next generation of engineers, pilots, and roboticists right here in Patna.',
    isOpen: true
  },
  {
    id: 'swimming-sports-coach',
    title: 'Physical Education & Swimming Coach (Aquatics Specialist)',
    department: 'Sports & Athletics',
    type: 'Full-time',
    location: 'Campus, Saguna More, Patna, Bihar',
    experience: '2–5 years of certified sports coaching and pool safety management',
    qualification: 'B.P.Ed. or M.P.Ed. with certified Lifeguard / Swimming Instructor credentials',
    rolesResponsibilities: [
      'Conduct structured swimming lessons and water safety instruction for all age groups',
      'Maintain rigorous pool hygiene, depth monitoring, and safety protocols',
      'Coach school athletic teams in basketball, track, and field for inter-school meets',
      'Supervise daily fitness routines, morning drill conditioning, and annual sports events'
    ],
    description: 'Dedicated sports professionals committed to physical fitness, water safety, discipline, and healthy sportsmanship.',
    isOpen: true
  }
];
