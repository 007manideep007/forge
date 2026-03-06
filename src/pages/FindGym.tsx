import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { gymLocations } from "@/data/gym-locations";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FindGym = () => {
  const [country, setCountry] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");

  const countries = Object.keys(gymLocations);
  const neighbourhoods = country ? Object.keys(gymLocations[country]) : [];
  const locations = country && neighbourhood ? gymLocations[country][neighbourhood] : [];

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setNeighbourhood("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Locations</p>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">
              Find Your Nearest <span className="text-primary">FORGE</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select your country and area to discover FORGE locations near you.
            </p>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1}>
            <div className="max-w-2xl mx-auto mb-14">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-foreground text-sm font-semibold mb-2 block">Country</label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full h-12 rounded-lg border border-border bg-card text-foreground px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer transition-all duration-200 hover:border-primary/50"
                    >
                      <option value="">Select a country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-foreground text-sm font-semibold mb-2 block">Neighbourhood / Area</label>
                  <div className="relative">
                    <select
                      value={neighbourhood}
                      onChange={(e) => setNeighbourhood(e.target.value)}
                      disabled={!country}
                      className="w-full h-12 rounded-lg border border-border bg-card text-foreground px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 hover:border-primary/50"
                    >
                      <option value="">Select an area</option>
                      {neighbourhoods.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Results */}
          <AnimatePresence mode="wait">
            {locations.length > 0 && (
              <motion.div
                key={neighbourhood}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl mx-auto space-y-4"
              >
                {locations.map((loc, i) => (
                  <motion.div
                    key={loc.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="bg-card rounded-xl border border-border p-7 hover:border-primary/40 hover:shadow-[0_0_24px_hsl(22_100%_50%/0.08)] transition-all duration-400"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-foreground">{loc.name}</h3>
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">Open</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-muted-foreground text-sm">
                        <MapPin size={15} className="text-primary shrink-0" />
                        {loc.address}
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground text-sm">
                        <Phone size={15} className="text-primary shrink-0" />
                        {loc.phone}
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground text-sm">
                        <Clock size={15} className="text-primary shrink-0" />
                        {loc.hours}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {country && neighbourhood && locations.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground"
              >
                No locations found in this area.
              </motion.p>
            )}

            {!country && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <MapPin size={40} className="text-border mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Select a country to find locations near you.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindGym;
