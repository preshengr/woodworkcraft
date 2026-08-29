import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-stone-900/80 backdrop-blur text-stone-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="#home" className="flex items-center gap-2 font-extrabold text-lg sm:text-xl">
          <span className="text-2xl">🪵</span> Wood Work <span className="text-amber-400">&amp;</span> Craft
        </a>

        <ul className="hidden md:flex items-center gap-6 font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-amber-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-stone-900 overflow-hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-stone-800"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}