import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import runwayShow from "@/assets/runway-show.jpg";
import runwayBts from "@/assets/runway-bts.jpg";

const RunwaySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="runway" className="py-32 lg:py-44 bg-charcoal-deep" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
            The Show
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-foreground">
            Runway
          </h2>
          <div className="editorial-line mx-auto mt-8" />
        </motion.div>

        {/* Full-width Runway Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative overflow-hidden mb-8 group"
        >
          <div className="aspect-[21/9]">
            <img
              src={runwayShow}
              alt="Runway show"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
              Paris Fashion Week 2025
            </p>
            <h3 className="font-serif text-2xl lg:text-4xl font-light tracking-wider text-foreground">
              Noir Éternel — The Show
            </h3>
          </div>
        </motion.div>

        {/* Behind the Scenes */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
              Behind the Scenes
            </p>
            <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wider text-foreground mb-6">
              The Making of a Collection
            </h3>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-6 max-w-lg">
              Every collection begins in silence,  a single sketch on parchment,
              a whisper of fabric against skin. From the intimate chaos of the atelier
              to the electric energy of the runway, these moments capture the raw
              artistry that defines Rimsha Malick.
            </p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-lg">
              Over 200 hours of handwork go into each piece. Every bead placed with
              intention, every seam a testament to the enduring craft of haute couture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="overflow-hidden group"
          >
            <div className="aspect-square">
              <img
                src={runwayBts}
                alt="Behind the scenes"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RunwaySection;
