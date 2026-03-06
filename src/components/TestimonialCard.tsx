import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  result: string;
  index: number;
}

const TestimonialCard = ({ quote, name, result, index }: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 hover:shadow-[0_0_24px_hsl(22_100%_50%/0.08)] transition-all duration-400 flex flex-col"
    >
      <Quote className="text-primary mb-5 shrink-0" size={26} strokeWidth={1.5} />
      <p className="text-foreground text-sm leading-relaxed mb-6 italic flex-1">"{quote}"</p>
      <div className="border-t border-border pt-4">
        <p className="text-foreground font-bold text-sm">{name}</p>
        <p className="text-primary text-xs font-semibold mt-0.5 uppercase tracking-wide">{result}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
