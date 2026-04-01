import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";

const collections = [
  {
    name: "Noir Éternel",
    season: "Autumn/Winter 2025",
    image: collection1,
    description: "A celebration of darkness and opulence",
  },
  {
    name: "Velours Rouge",
    season: "Spring/Summer 2025",
    image: collection2,
    description: "Deep burgundy dreams woven in velvet",
  },
  {
    name: "Lumière d'Argent",
    season: "Autumn/Winter 2024",
    image: collection3,
    description: "Futuristic metallics meet timeless form",
  },
  {
    name: "Fil d'Or",
    season: "Couture 2024",
    image: collection4,
    description: "Golden threads of artistry and heritage",
  },
];

const CollectionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="collections" className="py-32 lg:py-44 bg-charcoal-deep" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
            Signature
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-foreground">
            Collections
          </h2>
          <div className="editorial-line mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <motion.img
                src={collection.image}
                alt={collection.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000"
                animate={{
                  scale: hoveredIndex === i ? 1.08 : 1,
                }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
                  {collection.season}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wider text-foreground mb-2">
                  {collection.name}
                </h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    y: hoveredIndex === i ? 0 : 10,
                  }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-xs tracking-wider text-muted-foreground"
                >
                  {collection.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
