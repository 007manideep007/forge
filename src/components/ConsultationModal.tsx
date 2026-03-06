import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
              to_name: data.name,
              to_email: data.email,
              name: data.name,
              email: data.email,
              title: "Consultation Request",
              from_name: "FORGE Gym",
              message: `New consultation request from ${data.name} (${data.email})`,
            },
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        const errorText = await response.text();
        console.error("EmailJS error:", errorText);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus("idle"), 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-card border border-border rounded-xl w-full max-w-md shadow-2xl pointer-events-auto relative overflow-hidden">
              {/* Orange accent top bar */}
              <div className="h-1 bg-primary w-full absolute top-0 left-0" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-10">
                <AnimatePresence mode="wait">
                  {status !== "success" ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Free Consultation</p>
                      <h2 className="text-2xl font-black text-foreground mb-2">Book Your Session</h2>
                      <p className="text-muted-foreground text-sm mb-7 leading-relaxed">
                        Meet your trainer. Build your plan. No commitment required. One of our experts will contact you within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                          <label className="text-foreground text-sm font-semibold mb-2 block">
                            Full Name
                          </label>
                          <input
                            {...register("name", { required: "Name is required" })}
                            placeholder="John Smith"
                            className="w-full h-12 rounded-lg border border-border bg-secondary text-foreground px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          />
                          {errors.name && (
                            <p className="text-destructive text-xs mt-1.5">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="text-foreground text-sm font-semibold mb-2 block">
                            Email Address
                          </label>
                          <input
                            {...register("email", {
                              required: "Email is required",
                              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                            })}
                            type="email"
                            placeholder="john@example.com"
                            className="w-full h-12 rounded-lg border border-border bg-secondary text-foreground px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          />
                          {errors.email && (
                            <p className="text-destructive text-xs mt-1.5">{errors.email.message}</p>
                          )}
                        </div>

                        {status === "error" && (
                          <p className="text-destructive text-sm bg-destructive/10 rounded-lg px-4 py-3">
                            Something went wrong. Please check your EmailJS setup and try again.
                          </p>
                        )}

                        <motion.button
                          type="submit"
                          disabled={status === "loading"}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full h-12 bg-primary text-primary-foreground text-sm font-bold rounded-lg uppercase tracking-wider hover:shadow-[0_0_20px_hsl(22_100%_50%/0.4)] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Book Free Consultation"
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        className="inline-flex mb-6"
                      >
                        <CheckCircle className="text-primary" size={56} strokeWidth={1.5} />
                      </motion.div>
                      <h2 className="text-2xl font-black text-foreground mb-3">You're All Set!</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                        Thank you. Our expert will contact you soon. Check your inbox for a confirmation.
                      </p>
                      <motion.button
                        onClick={handleClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-primary text-primary-foreground px-8 py-3 text-sm font-bold rounded-lg uppercase tracking-wider"
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
