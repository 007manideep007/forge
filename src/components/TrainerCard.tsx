import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TrainerCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  slug: string;
  index: number;
}

const TrainerCard = ({ image, name, role, bio, slug, index }: TrainerCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      onClick={() => navigate(`/trainers/${slug}`)}
      className="group bg-card rounded-xl border border-border p-7 text-center hover:border-primary/40 hover:shadow-[0_0_24px_hsl(22_100%_50%/0.1)] transition-all duration-400 cursor-pointer"
    >
      {/* Avatar */}
      <div className="relative w-28 h-28 mx-auto mb-5">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-400">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {/* Glow ring on hover */}
        <div className="absolute inset-0 rounded-full ring-2 ring-primary/0 group-hover:ring-primary/30 transition-all duration-400" />
      </div>

      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{name}</h3>
      <p className="text-primary text-sm font-semibold mb-3">{role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{bio}</p>
      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
        Learn More <ArrowRight size={14} />
      </span>
    </motion.div>
  );
};

export default TrainerCard;
