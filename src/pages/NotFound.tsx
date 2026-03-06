import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Error 404</p>
          <h1 className="text-8xl font-black text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-sm mx-auto">
            This page doesn't exist. Maybe it's still in the gym.
          </p>
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold rounded-lg uppercase tracking-wider hover:shadow-[0_0_24px_hsl(22_100%_50%/0.45)] transition-all duration-300"
          >
            <Home size={16} /> Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
