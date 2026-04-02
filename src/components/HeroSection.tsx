import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Haute couture runway"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-24 lg:pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-primary mb-6">
            Saddar, Punjab, Pakistan
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground uppercase leading-none">
           Rimsha Malick
          </h1>
          <div className="editorial-line mx-auto mt-8 animate-line-expand" />
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Where Art Meets Elegance
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-primary/40"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
