import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import ProgramCard from "@/components/ProgramCard";
import TrainerCard from "@/components/TrainerCard";
import TestimonialCard from "@/components/TestimonialCard";
import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/Footer";

import heroImg from "@/assets/hero-gym.jpg";
import gym4 from "@/assets/gym-4.jpg";
import gym3 from "@/assets/gym-3.jpg";
import gym2 from "@/assets/gym-2.jpg";
import gym1 from "@/assets/gym-1.jpg";
import foodImg from "@/assets/food-1.jpg";
import supplementImg from "@/assets/supplement.jpg";
import enduranceImg from "@/assets/program-endurance.jpg";
import { trainers } from "@/data/trainers";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  const { scrollYProgress: ctaScroll } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const ctaY = useTransform(ctaScroll, [0, 1], ["-10%", "10%"]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={heroImg}
            alt="Athlete performing a heavy deadlift"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Now accepting new members
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground leading-tight tracking-tight"
          >
            Build Strength. Build Discipline.{" "}
            <span className="text-primary">Build Your Best Self.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Expert coaching, proven programs, and science-backed nutrition guidance. Your transformation starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground px-9 py-4 text-sm font-bold rounded-lg hover:shadow-[0_0_24px_hsl(22_100%_50%/0.45)] transition-all duration-300 uppercase tracking-wider"
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("programs")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="border border-border text-foreground px-9 py-4 text-sm font-semibold rounded-lg hover:border-primary/50 transition-all duration-300 uppercase tracking-wider"
            >
              View Programs
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 z-10 cursor-pointer"
          onClick={() => scrollToSection("approach")}
        >
          <ChevronDown className="text-muted-foreground" size={28} />
        </motion.div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "10K+", label: "Members Trained" },
              { value: "50+", label: "Certified Coaches" },
              { value: "12", label: "Global Locations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="py-8 px-6 text-center border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <p className="text-3xl font-black text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ──────────────────────────────────────── */}
      <section className="py-24 md:py-32" id="approach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Our Approach</p>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Proven Systems.<br />Real Results.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don't sell quick fixes. We build strength through structured programming, personalized coaching, and accountability. Every session is designed to push you forward.
              </p>
              <button
                onClick={() => scrollToSection("programs")}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all duration-300"
              >
                Learn Our Method →
              </button>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-xl overflow-hidden relative">
                <img
                  src={gym4}
                  alt="Close-up of barbell plates"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                {/* Orange accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Programs ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-secondary" id="programs">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Training Programs</p>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
              Programs Built for Your Goals
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're building strength, size, or endurance — we have a structured path for you.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <ProgramCard image={gym3} title="Strength Training" description="Progressive overload programs designed to build raw strength. Focused on compound lifts with periodized programming." index={0} />
            <ProgramCard image={gym2} title="Functional Fitness" description="Bodyweight and functional movement training to build athletic performance, mobility, and real-world strength." index={1} />
            <ProgramCard image={enduranceImg} title="Conditioning" description="High-intensity conditioning work to build endurance, burn fat, and improve cardiovascular capacity." index={2} />
          </div>
        </div>
      </section>

      {/* ── Nutrition ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32" id="nutrition">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <div className="rounded-xl overflow-hidden relative">
                <img src={foodImg} alt="Colorful nutrition bowl" className="w-full h-[420px] object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Nutrition</p>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Fuel Your<br />Performance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Training is only half the equation. We provide personalized nutrition coaching to optimize recovery, energy, and results — without restrictive diets.
              </p>
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-primary-foreground px-7 py-3.5 text-sm font-bold rounded-lg hover:shadow-[0_0_20px_hsl(22_100%_50%/0.4)] transition-all duration-300 uppercase tracking-wider"
              >
                Get Nutrition Support
              </motion.button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Supplements ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-secondary" id="supplements">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Supplements</p>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Science-Backed<br />Supplement Guidance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We cut through the noise. Learn what supplements actually work, how to use them, and why most aren't necessary. Evidence over marketing — always.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all duration-300">
                Read Our Guide →
              </button>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="flex justify-center">
                <motion.img
                  src={supplementImg}
                  alt="Supplement shaker at the gym"
                  className="w-72 md:w-80 rounded-xl shadow-2xl"
                  loading="lazy"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Trainers ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32" id="trainers">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
              Coached by Experts<br />Who've Been There
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our trainers are certified, experienced, and personally invested in your progress.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {trainers.map((t, i) => (
              <TrainerCard key={t.slug} image={t.image} name={t.name} role={t.role} bio={t.bio} slug={t.slug} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Real People. Real Progress.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard quote="I came in unable to do a pull-up. Six months later, I'm doing weighted sets. The programming here is world-class." name="David K." result="First pull-up in 8 weeks" index={0} />
            <TestimonialCard quote="The nutrition coaching changed everything. I finally understand how to eat for my goals, not just follow a generic plan." name="Emma R." result="Lost 15kg in 12 weeks" index={1} />
            <TestimonialCard quote="Best gym I've ever trained at. The coaches actually care, the programming is smart, and the community is unmatched." name="James T." result="Deadlift increased by 60kg" index={2} />
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section ref={ctaRef} className="relative py-32 md:py-44 overflow-hidden" id="contact">
        <motion.div className="absolute inset-0" style={{ y: ctaY }}>
          <img src={gym1} alt="Gym interior" className="w-full h-[140%] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-3xl md:text-6xl font-black text-foreground mb-6">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Book your free consultation. Meet your trainer. Build your plan. No commitment required.
            </p>
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground px-12 py-5 text-sm font-black rounded-lg hover:shadow-[0_0_32px_hsl(22_100%_50%/0.5)] transition-all duration-300 uppercase tracking-widest"
            >
              Book Free Consultation
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
