import { LeadershipMember } from '../types';
import { ASSET_IMAGES } from './schoolConfig';

export const LEADERSHIP_PROFILES: Record<string, LeadershipMember> = {
  principal: {
    id: "meeta-sharma",
    name: "Mrs. Meeta Sharma",
    designation: "Principal",
    title: "Principal's Welcome Address",
    bioSummary: "An experienced educationist dedicated to fostering curiosity, discipline, and compassionate citizenship in young minds through progressive, child-centric pedagogy.",
    quote: "True education transcends textbooks; it is the ignition of intellectual curiosity, ethical character, and the inner resilience needed to navigate an evolving world.",
    image: ASSET_IMAGES.principalPortrait,
    credentials: "M.A., M.Ed., Over 20 Years of Educational Leadership Experience",
    fullMessage: [
      "Welcome to G D Goenka Public School, Patna. As educators, we understand that every child enters our corridors with distinct talents, boundless curiosity, and unique potential. Our solemn commitment is to build a vibrant learning ecosystem where intellectual rigour, moral grounding, and joyful discovery coexist.",
      "At GD Goenka Public School Patna, education is not a mere process of knowledge absorption, but an active voyage of inquiry. We encourage our students to ask 'why', explore through tangible experimentation, and develop empathy alongside excellence.",
      "Through modern smart classrooms, specialized laboratories including the revolutionary Aerobay aerospace and robotics lab, alongside expansive sports facilities and creative arts studios, our learners are empowered to think independently, collaborate constructively, and lead with kindness.",
      "We invite parents to walk hand-in-hand with us as active partners in this noble endeavor. Together, we shall ensure that our students grow with strong roots and broad wings, ready to conquer the challenges of tomorrow."
    ]
  },
  chairman: {
    id: "gopal-krishna-gupta",
    name: "Shri Gopal Krishna Gupta",
    designation: "Founder & Chairman",
    title: "Message from the Founder & Chairman",
    bioSummary: "A visionary philanthropist and educationist dedicated to transforming educational opportunities in Bihar, bringing national benchmark schooling to Patna.",
    quote: "Patna's children deserve world-class learning right here in our state capital, alongside their parents, without leaving their cultural roots.",
    image: ASSET_IMAGES.chairmanPortrait,
    credentials: "Founder, GD Goenka School",
    fullMessage: [
      "The inception of G D Goenka Public School, Patna was born out of a deeply personal realization. When the time came for our next generation to seek quality modern school education, we experienced the deep emotional wrench of sending them far away from Bihar to distant metropolitan centers.",
      "I asked myself: Why should our bright children in Patna and across Bihar have to leave their families, their home soil, and their communities just to access modern, global-standard schooling? Why shouldn't Patna have an institution that matches the finest academies in Delhi, Mumbai, or Bengaluru?",
      "With that resolve, we brought the prestigious legacy of the G D Goenka Group to Patna. We invested without compromise in state-of-the-art infrastructure—from the Aerobay lab and smart learning spaces to Olympic-dimension swimming and dedicated sports academies.",
      "Our mission is to nurture children into confident, ethical, and intellectually fearless leaders who bring pride to Bihar and glory to our nation."
    ]
  },
  viceChairman: {
    id: "akash-deep",
    name: "Mr. Akash Deep",
    designation: "Vice Chairman",
    title: "Vice Chairman's Vision",
    bioSummary: "A forward-thinking administrator steering modern operational excellence, technology integration, and student safety protocols.",
    quote: "We combine technological innovation with personal mentorship to create a safe, dynamic sanctuary for academic achievement.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
    credentials: "B.Tech, MBA",
    fullMessage: [
      "Education in the 21st century demands an agile balance between foundational academic mastery and next-generation skills like coding, artificial intelligence, and creative problem solving.",
      "At G D Goenka Public School Patna, we have built infrastructure that anticipates future workforce demands while preserving our deep-rooted cultural values and discipline.",
      "Every facility on our campus—from digital laboratories to secure campus transport—is maintained to the highest benchmarks of safety and pedagogical effectiveness."
    ]
  },
  managingDirector: {
    id: "sandeep-anand",
    name: "Mr. Sandeep Anand",
    designation: "Managing Director",
    title: "Managing Director's Commitment",
    bioSummary: "Committed to delivering holistic student development, world-class faculty talent, and transparent institutional governance.",
    quote: "Excellence is not an act, but a habit cultivated in every classroom, sports field, and laboratory.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
    credentials: "B.E., PGDM",
    fullMessage: [
      "Our institutional promise to every parent is transparency, continuous improvement, and the relentless pursuit of educational quality.",
      "We recruit passionate, qualified educators who treat teaching as a calling. Through continuous professional development workshops and progressive evaluation metrics, our faculty ensures no child is left behind.",
      "We take pride in building a campus culture where curiosity is celebrated and character is championed every single day."
    ]
  }
};
