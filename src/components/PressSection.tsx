import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pressItems = [
  {
    publication: "Vogue",
    quote: "Rimsha doesn't design clothes!  she architects emotion.",
    year: "2025",
  },
  {
    publication: "Harper's Bazaar",
    quote: "A rare talent who bridges the chasm between tradition and tomorrow.",
    year: "2024",
  },
  {
    publication: "Elle",
    quote: "The most exciting voice in Parisian couture this decade.",
    year: "2024",
  },
  {
    publication: "W Magazine",
    quote: "Each piece is a love letter to the art of making.",
    year: "2023",
  },
];

const collaborations = [
  "Swarovski Crystal Collection",
  "Musée des Arts Décoratifs Exhibition",
  "Cannes Film Festival  Red Carpet Partner",
  "Royal Opera House  Costume Design",
  "Biennale di Venezia  Fashion Installation",
];

const PressSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="press" className="py-32 lg:py-44 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
            Recognition
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-foreground">
            Press & Collaborations
          </h2>
          <div className="editorial-line mx-auto mt-8" />
        </motion.div>

        {/* Press Quotes */}
        <div className="grid md:grid-cols-2 gap-px bg-border mb-24">
          {pressItems.map((item, i) => (
            <motion.div
              key={item.publication}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background p-10 lg:p-14 group hover:bg-secondary/30 transition-colors duration-700"
            >
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-primary mb-6">
                {item.publication} · {item.year}
              </p>
              <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-foreground italic">
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-12">
            Notable Collaborations
          </p>
          <div className="flex flex-col gap-4">
            {collaborations.map((collab, i) => (
              <motion.div
                key={collab}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="font-serif text-lg lg:text-xl font-light tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-500 py-3 border-b border-border"
              >
                {collab}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;
