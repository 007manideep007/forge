import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary border-t border-border py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold text-foreground tracking-tight">
              FORGE<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-xs">
              Expert coaching, proven programs, and science-backed nutrition. Your transformation starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Programs", id: "programs" },
                { label: "Nutrition", id: "nutrition" },
                { label: "Supplements", id: "supplements" },
                { label: "Trainers", id: "trainers" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.id)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Hours</h4>
            <div className="text-muted-foreground text-sm space-y-2">
              <div className="flex justify-between gap-6 max-w-xs">
                <span>Mon – Fri</span>
                <span>5:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between gap-6 max-w-xs">
                <span>Sat – Sun</span>
                <span>7:00 AM – 8:00 PM</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-foreground font-semibold mb-2 text-sm uppercase tracking-wider">Contact</h4>
              <p className="text-muted-foreground text-sm">info@forgegym.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} FORGE. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">Built for athletes. By athletes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
