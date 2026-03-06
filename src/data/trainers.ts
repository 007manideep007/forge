import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

export interface Trainer {
  slug: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  yearsExperience: number;
  achievements: string[];
  certifications: string[];
  specializations: string[];
}

export const trainers: Trainer[] = [
  {
    slug: "marcus-reid",
    image: trainer1,
    name: "Marcus Reid",
    role: "Head Strength Coach",
    bio: "12+ years of coaching experience. CSCS certified. Specializes in powerlifting and athletic performance.",
    email: "marcus@forgegym.com",
    yearsExperience: 12,
    achievements: [
      "National Powerlifting Championship – Silver Medalist (2018)",
      "Coached 40+ athletes to regional and national competitions",
      "Developed FORGE's signature 12-week strength protocol",
      "Published in Strength & Conditioning Journal",
    ],
    certifications: [
      "NSCA Certified Strength & Conditioning Specialist (CSCS)",
      "USA Weightlifting Level 2 Coach",
      "Precision Nutrition Level 1",
      "CPR/AED Certified",
    ],
    specializations: [
      "Powerlifting & Barbell Training",
      "Athletic Performance Enhancement",
      "Progressive Overload Programming",
      "Competition Prep & Peaking",
    ],
  },
  {
    slug: "sarah-chen",
    image: trainer2,
    name: "Sarah Chen",
    role: "Nutrition & Conditioning",
    bio: "Certified nutritionist and conditioning specialist. Focuses on sustainable body composition changes.",
    email: "sarah@forgegym.com",
    yearsExperience: 9,
    achievements: [
      "Helped 200+ clients achieve sustainable body composition goals",
      "Developed FORGE's integrated nutrition coaching framework",
      "Former Division I track & field athlete",
      "Guest speaker at National Nutrition Conference (2022, 2023)",
    ],
    certifications: [
      "Certified Sports Nutritionist (CISSN)",
      "ACE Certified Personal Trainer",
      "Precision Nutrition Level 2 Master Coach",
      "Functional Movement Screen (FMS) Level 1",
    ],
    specializations: [
      "Sports Nutrition & Meal Planning",
      "Metabolic Conditioning",
      "Body Recomposition",
      "Sustainable Fat Loss Strategies",
    ],
  },
  {
    slug: "jake-morales",
    image: trainer3,
    name: "Jake Morales",
    role: "Functional Fitness Coach",
    bio: "CrossFit L3 trainer and movement specialist. Builds programs for real-world athletic performance.",
    email: "jake@forgegym.com",
    yearsExperience: 8,
    achievements: [
      "CrossFit Games Regional Qualifier (2019, 2020)",
      "Built FORGE's functional fitness curriculum from the ground up",
      "Trained professional MMA fighters and military personnel",
      "Led community fitness workshops across 15 cities",
    ],
    certifications: [
      "CrossFit Level 3 Trainer (CF-L3)",
      "NASM Corrective Exercise Specialist (CES)",
      "Certified Kettlebell Instructor (RKC)",
      "TRX Suspension Training Certified",
    ],
    specializations: [
      "Functional Movement Patterns",
      "High-Intensity Interval Training",
      "Mobility & Injury Prevention",
      "Kettlebell & Bodyweight Programming",
    ],
  },
];
