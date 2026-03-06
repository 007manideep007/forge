import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const scrollLinks = ["Programs", "Nutrition", "Supplements", "Trainers"];
  const pageLinks = [
    { label: "About", path: "/about" },
    { label: "Find a Gym", path: "/find-gym" },
  ];

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const goToPage = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <motion.span
          onClick={() => navigate("/")}
          className="text-xl font-extrabold tracking-tight text-foreground cursor-pointer select-none"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          FORGE<span className="text-primary">.</span>
        </motion.span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {pageLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => goToPage(link.path)}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
          {scrollLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.03, brightness: 1.1 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold rounded-md transition-all duration-200 hover:shadow-[0_0_16px_hsl(22_100%_50%/0.4)] uppercase tracking-wider"
          >
            Start Your Journey
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="flex flex-col items-center gap-5 py-8">
              {pageLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => goToPage(link.path)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              {scrollLinks.map((link, i) => (
                <motion.button
                  key={link}
                  onClick={() => scrollTo(link)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + pageLinks.length) * 0.05 }}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo("contact")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary text-primary-foreground px-10 py-3.5 text-sm font-bold rounded-md uppercase tracking-wider mt-2"
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
