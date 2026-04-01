import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImage from "@/assets/designer-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-44 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={portraitImage}
                alt="Fashion designer portrait"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
              The Designer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-foreground mb-8">
              Rimsha Malick
            </h2>
            <div className="editorial-line mb-8" />
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-6 max-w-lg">
            Rimsha Malick is a rising Pakistani fashion designer based in Pakistan with 3 years of 
            dedicated experience in haute couture.
            She masterfully blends art and fashion through her creations.
            Her designs play with light and shadow.  
            Where every stitch is intentional, and every silhouette tells a powerful, unique story.
            </p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-10 max-w-lg">
            Rimsha Malick trained at a prestigious fashion school in Pakistan and learned from top
             European fashion houses.
            Her collections have been featured on major runways in Pakistan and are praised for their 
            bold elegance and timeless style.
            </p>
            <a
              href="#collections"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] uppercase text-primary hover:text-gold-light transition-colors duration-500"
            >
              View Collections
              <span className="w-8 h-px bg-primary" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
