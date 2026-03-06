import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ConsultationModal from "@/components/ConsultationModal";
import gym1 from "@/assets/gym-1.jpg";
import gym4 from "@/assets/gym-4.jpg";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={gym1} alt="FORGE gym interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              25 Years of Building <span className="text-primary">Greatness</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What started as a single room with iron and ambition has grown into a legacy of strength, discipline, and transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Built on Iron.<br />Forged by Time.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FORGE was founded in 2001 with a simple conviction: real results come from real work. No shortcuts. No gimmicks. Just structured programming, expert coaching, and an unwavering commitment to every person who walks through our doors.
                </p>
                <p>
                  Over 25 years, we've grown from a single facility into a trusted name in strength and conditioning. Thousands of members — from first-time lifters to competitive athletes — have built their foundations here.
                </p>
                <p>
                  Our approach hasn't changed. We still believe in progressive overload, personalized coaching, and the kind of consistency that compounds into life-changing results. The equipment has evolved. The science has advanced. But the principles remain the same.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-xl overflow-hidden relative">
                <img src={gym4} alt="Barbell close-up at FORGE gym" className="w-full h-[420px] object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Legacy Numbers */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Our Impact</p>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Numbers That Speak for Themselves
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "10,000+", label: "Members Trained" },
              { value: "50+", label: "Certified Coaches" },
              { value: "12", label: "Locations Worldwide" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-8 text-center hover:border-primary/40 hover:shadow-[0_0_24px_hsl(22_100%_50%/0.08)] transition-all duration-400">
                  <p className="text-4xl font-black text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Principles Over Trends
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Integrity", description: "We coach what works — not what sells. Every recommendation is backed by science and tested through experience." },
              { title: "Consistency", description: "Results are earned daily. We build systems that make discipline sustainable, not just achievable for a week." },
              { title: "Community", description: "You're not just a member. You train alongside people who push each other, respect the process, and show up." },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/40 hover:shadow-[0_0_24px_hsl(22_100%_50%/0.08)] transition-all duration-400 h-full">
                  <div className="w-10 h-0.5 bg-primary mb-5" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Ready to Join the FORGE Family?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Book a free consultation and take the first step toward your transformation.</p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary text-primary-foreground px-10 py-4 text-sm font-bold rounded-lg hover:shadow-[0_0_24px_hsl(22_100%_50%/0.45)] transition-all duration-300 uppercase tracking-wider"
            >
              Book Free Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
