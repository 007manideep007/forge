import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ProgramCard = ({ image, title, description, index }: ProgramCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-400 hover:shadow-[0_0_30px_hsl(22_100%_50%/0.12)] cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
          View Program <ArrowRight size={14} />
        </span>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
