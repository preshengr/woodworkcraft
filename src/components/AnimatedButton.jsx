import { motion } from "framer-motion";

export default function AnimatedButton({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full font-semibold text-lg transition-colors";
  const cls =
    variant === "primary"
      ? "text-white animated-gradient-btn shadow-lg"
      : "text-amber-900 bg-amber-100 hover:bg-amber-200";

  const Tag = href ? motion.a : motion.button;
  const props = href ? { href } : { type, onClick };

  return (
    <Tag
      {...props}
      className={`${base} ${cls}`}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Tag>
  );
}