import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-stone-800 via-stone-900 to-amber-900 text-stone-100"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Handcrafted <span className="text-amber-400">Wood</span> Work &amp; Craft
          </h1>
          <p className="mt-4 text-lg text-stone-300">
            Beautiful furniture, kitchen cabinets, doors and custom woodwork —
            built to last and made with love.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <AnimatedButton href="#contact">Get a Free Quote</AnimatedButton>
            <AnimatedButton href="#gallery" variant="secondary">
              View Our Work
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="floaty text-center"
        >
          <div className="text-[9rem] sm:text-[12rem] leading-none">🪑</div>
        </motion.div>
      </div>
    </section>
  );
}