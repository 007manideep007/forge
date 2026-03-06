import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ConsultationModal from "@/components/ConsultationModal";
import { trainers } from "@/data/trainers";
import { ArrowLeft, Mail, Award, Clock, Target, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const TrainerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const trainer = trainers.find((t) => t.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!trainer) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-6">
          <h1 className="text-3xl font-black text-foreground mb-4">Trainer Not Found</h1>
          <button onClick={() => navigate("/")} className="text-primary font-semibold text-sm hover:underline">
            ← Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <button
              onClick={() => navigate("/#trainers")}
              className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors mb-10 inline-flex items-center gap-2 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Trainers
            </button>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Sidebar */}
            <AnimatedSection className="md:col-span-1">
              <div className="bg-card rounded-xl border border-border p-8 text-center sticky top-28">
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
                    <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-primary/20" />
                </div>
                <h1 className="text-2xl font-black text-foreground mb-1">{trainer.name}</h1>
                <p className="text-primary text-sm font-semibold mb-4">{trainer.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{trainer.bio}</p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-6 bg-secondary rounded-lg py-2.5 px-4">
                  <Clock size={15} className="text-primary" />
                  <span>{trainer.yearsExperience}+ years experience</span>
                </div>
                <div className="flex flex-col gap-3">
                  <motion.a
                    href={`mailto:${trainer.email}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-bold rounded-lg hover:shadow-[0_0_20px_hsl(22_100%_50%/0.4)] transition-all duration-300 w-full justify-center uppercase tracking-wide"
                  >
                    <Mail size={15} /> Contact {trainer.name.split(" ")[0]}
                  </motion.a>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="border border-primary/40 text-primary px-6 py-3 text-sm font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 w-full"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {[
                {
                  icon: Award,
                  title: "Achievements",
                  delay: 0.1,
                  items: trainer.achievements,
                  type: "list",
                },
                {
                  icon: BadgeCheck,
                  title: "Certifications",
                  delay: 0.2,
                  items: trainer.certifications,
                  type: "list",
                },
              ].map(({ icon: Icon, title, delay, items, type }) => (
                <AnimatedSection key={title} delay={delay}>
                  <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-400">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.3}>
                <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-400">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="text-primary" size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Specializations</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {trainer.specializations.map((s) => (
                      <span
                        key={s}
                        className="bg-secondary text-muted-foreground text-sm px-4 py-2 rounded-lg border border-border hover:border-primary/40 hover:text-foreground transition-all duration-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainerDetail;
