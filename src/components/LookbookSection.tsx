import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import collection4 from "@/assets/collection-4.jpg";

const LookbookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lookbook" className="py-32 lg:py-44 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
            Editorial
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-foreground">
            Lookbook
          </h2>
          <div className="editorial-line mx-auto mt-8" />
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative overflow-hidden group"
          >
            <div className="aspect-[4/3] lg:aspect-[16/10]">
              <img
                src={lookbook1}
                alt="Editorial lookbook"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/80 to-transparent">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
                Editorial 01
              </p>
              <h3 className="font-serif text-xl lg:text-2xl font-light tracking-wider text-foreground">
                Twilight Reverie
              </h3>
            </div>
          </motion.div>

          {/* Stacked Images */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative overflow-hidden group flex-1"
            >
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full">
                <img
                  src={lookbook2}
                  alt="Minimalist couture"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
                  Editorial 02
                </p>
                <h3 className="font-serif text-lg font-light tracking-wider text-foreground">
                  Purity in Form
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative overflow-hidden group flex-1"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={collection4}
                  alt="Detail shot"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
                  Detail
                </p>
                <h3 className="font-serif text-lg font-light tracking-wider text-foreground">
                  Fil d'Or — Close Up
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
