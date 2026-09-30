/**
 * Centralised, editable site content for SAMRAJ PRE SCHOOL.
 * Facts here are taken from the supplied reference artwork.
 * Anything marked EDITABLE PLACEHOLDER is filler copy — replace with real info.
 */

import heroChild from "@/assets/hero-child.jpg";
import campus from "@/assets/campus.jpg";
import classroomPlay from "@/assets/classroom-play.jpg";
import playground from "@/assets/playground.jpg";
import celebration from "@/assets/celebration.jpg";
import library from "@/assets/library.jpg";
import artActivity from "@/assets/art-activity.jpg";
import transport from "@/assets/transport.jpg";

export const images = {
  heroChild,
  campus,
  classroomPlay,
  playground,
  celebration,
  library,
  artActivity,
  transport,
};

export const school = {
  name: "Samraj Pre School",
  tagline: "Play • Learn • Grow • Shine",
  phones: [
    { label: "Primary", number: "+91 95972 60444" },
    { label: "Office", number: "+91 94432 60444" },
    { label: "Admissions", number: "+91 95002 60444" },
  ],
  email: "samrajpreschool@gmail.com",
  address: [
    "Sri Balaji Nagar, Kottamedu Road,",
    "Vandimedu, Jalakandapuram,",
    "Salem, Tamil Nadu – 636501.",
  ],
  mapsQuery: "Samraj Pre School, Jalakandapuram, Salem, Tamil Nadu 636501",
  /* EDITABLE PLACEHOLDER: replace with the school's real social profile URLs */
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const primaryPhone = school.phones[0]!.number;
export const whatsappHref = `https://wa.me/${primaryPhone.replace(/[^0-9]/g, "")}`;
export const telHref = `tel:${primaryPhone.replace(/\s/g, "")}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  school.mapsQuery,
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Learning", to: "/learning" },
  { label: "Moments", to: "/moments" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
] as const;

export const highlights = [
  { title: "Play-Based Learning", icon: "heart", tone: "coral" },
  { title: "Experienced Educators", icon: "users", tone: "mint" },
  { title: "Safe & Caring Environment", icon: "shield", tone: "sky" },
  { title: "Holistic Development", icon: "sparkles", tone: "sun" },
] as const;

export const programs = [
  {
    slug: "play-group",
    name: "Play Group",
    age: "2 – 3 Years",
    tone: "sky",
    image: classroomPlay,
    description:
      "A warm and playful introduction to school with focus on social, emotional and motor skills.",
    highlights: ["Sensory play", "Rhymes & stories", "Free exploration"],
  },
  {
    slug: "nursery",
    name: "Nursery",
    age: "3 – 4 Years",
    tone: "mint",
    image: artActivity,
    description:
      "Building curiosity, confidence and early learning skills through guided play and exploration.",
    highlights: ["Phonics basics", "Creative art", "Group activities"],
  },
  {
    slug: "lkg",
    name: "LKG",
    age: "4 – 5 Years",
    tone: "sun",
    image: playground,
    description:
      "A strong foundation for future academic success with focus on social and life skills.",
    highlights: ["Reading readiness", "Early numeracy", "Show & tell"],
  },
  {
    slug: "ukg",
    name: "UKG",
    age: "5 – 6 Years",
    tone: "blossom",
    image: library,
    description:
      "Confident school-readiness with independent thinking, language fluency and problem solving.",
    highlights: ["Writing skills", "Logical thinking", "Presentation"],
  },
] as const;

export const developmentAreas = [
  { title: "Cognitive Development", tone: "sky", icon: "brain" },
  { title: "Emotional Development", tone: "blossom", icon: "smile" },
  { title: "Social Development", tone: "mint", icon: "users" },
  { title: "Physical Development", tone: "sun", icon: "activity" },
  { title: "Creative Expression", tone: "coral", icon: "palette" },
  { title: "Values and Life Skills", tone: "lilac", icon: "heart" },
] as const;

export const facilities = [
  {
    title: "Bright & Spacious Classrooms",
    image: classroomPlay,
    text: "Airy, colourful rooms designed for small groups and hands-on learning.",
  },
  {
    title: "Outdoor Play Area",
    image: playground,
    text: "Safe play equipment that builds strength, balance and confidence.",
  },
  {
    title: "Library & Learning Resources",
    image: library,
    text: "A cosy reading corner filled with picture books and story sessions.",
  },
  {
    title: "Activity Zones",
    image: artActivity,
    text: "Dedicated corners for art, music, role play and building blocks.",
  },
  {
    title: "Safe & Hygienic Environment",
    image: campus,
    text: "Clean, supervised and child-friendly spaces throughout the campus.",
  },
  {
    title: "Transport Facility",
    image: transport,
    text: "Supervised school transport with trained staff on every route.",
  },
] as const;

export const values = [
  { title: "Care", tone: "coral" },
  { title: "Creativity", tone: "sun" },
  { title: "Respect", tone: "mint" },
  { title: "Confidence", tone: "sky" },
  { title: "Respect for Educators", tone: "blossom" },
  { title: "Holistic Development", tone: "lilac" },
] as const;

export const leadership = [
  {
    name: "Dr. V. Rajeswari",
    qualification: "M.Sc., M.Phil., ADME, Ph.D.",
    role: "Director of Administration",
    initials: "VR",
    tone: "blossom",
  },
  {
    name: "Dr. V. Poornimadevi",
    qualification: "MBA, M.Phil., ADME, Ph.D.",
    role: "Director of Academics",
    initials: "VP",
    tone: "sky",
  },
] as const;

export const journey = [
  {
    title: "Early Beginnings",
    text: "Started with a vision to provide quality early childhood education in Jalakandapuram.",
  },
  {
    title: "Growing Together",
    text: "With the trust and support of parents, we expanded our programs and facilities.",
  },
  {
    title: "A New Home",
    text: "Moved to our new and enhanced campus at Sri Balaji Nagar, Kottamedu Road, Vandimedu.",
  },
  {
    title: "Today & Beyond",
    text: "Continuing to nurture young minds and create brighter futures for generations to come.",
  },
] as const;

export const galleryCategories = [
  "All",
  "Classroom",
  "Celebrations",
  "Activities",
  "Outdoor",
  "Events",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const gallery = [
  { src: classroomPlay, alt: "Children playing with stacking rings in class", category: "Classroom" },
  { src: celebration, alt: "Annual day stage performance", category: "Celebrations" },
  { src: artActivity, alt: "Child painting during an art activity", category: "Activities" },
  { src: playground, alt: "Colourful outdoor play area", category: "Outdoor" },
  { src: library, alt: "Reading corner in the school library", category: "Classroom" },
  { src: campus, alt: "Samraj Pre School campus building", category: "Events" },
  { src: transport, alt: "School transport bus at the campus", category: "Outdoor" },
  { src: heroChild, alt: "Smiling preschool student", category: "Events" },
  { src: celebration, alt: "Children in costume for a festival programme", category: "Events" },
] as const;

export const events = [
  {
    title: "Annual Day Celebrations",
    text: "A stage of their own — music, dance and proud little performers.",
    image: celebration,
  },
  {
    title: "Festivals & Traditions",
    text: "Pongal, Diwali and more, celebrated together with colour and joy.",
    image: artActivity,
  },
  {
    title: "Sports & Outdoor Fun",
    text: "Races, games and team play that build strength and spirit.",
    image: playground,
  },
  {
    title: "Field Trips & Nature Learning",
    text: "Learning beyond the classroom through guided visits and nature walks.",
    image: transport,
  },
  {
    title: "Life Skills Activities",
    text: "Everyday skills, good habits and kindness practised in fun ways.",
    image: classroomPlay,
  },
] as const;

export const admissionHighlights = [
  "Limited Seats Available",
  "Age 2 – 6 Years",
  "Play-Based Curriculum",
  "Safe & Caring Environment",
  "Experienced Educators",
] as const;

export const admissionSteps = [
  { title: "Enquire", text: "Contact our admission team or fill the enquiry form." },
  { title: "Visit", text: "Explore our campus and meet our team." },
  { title: "Interact", text: "Let your child experience a trial session." },
  { title: "Confirm", text: "Complete the enrollment and begin the journey." },
] as const;

export const importantDates = [
  { label: "Admissions Start", value: "1st November 2025" },
  { label: "Campus Visit", value: "Open All Days" },
  { label: "Last Date to Apply", value: "March 2026" },
] as const;

export const requiredDocuments = [
  "Duly filled application form",
  "Child's birth certificate (copy)",
  "Aadhaar card (child & parent copy)",
  "Passport size photographs",
  "Previous school record (if applicable)",
  "Parent/Guardian ID proof",
  "Address proof",
] as const;

export const ageGroups = [
  "Play Group (2 – 3 Years)",
  "Nursery (3 – 4 Years)",
  "LKG (4 – 5 Years)",
  "UKG (5 – 6 Years)",
] as const;
