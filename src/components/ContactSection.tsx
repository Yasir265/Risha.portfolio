import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-32 lg:py-44 bg-charcoal-deep px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
            Inquiries
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-foreground">
            Get in Touch
          </h2>
          <div className="editorial-line mx-auto mt-8 mb-8" />
          <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto">
            For press inquiries, private viewings, or bespoke commissions,
            please reach out through the form below.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-3">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500 placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-3">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500 placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-3">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500 placeholder:text-muted-foreground/50"
              placeholder="Inquiry subject"
            />
          </div>

          <div>
            <label className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-3">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500 placeholder:text-muted-foreground/50 resize-none"
              placeholder="Your message..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 px-12 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-700"
            >
              Send Inquiry
              <span className="w-6 h-px bg-current" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
