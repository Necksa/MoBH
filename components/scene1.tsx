"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Scene1() {
  const { scrollYProgress } = useScroll();

  // 2013
  const yearOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [0, 1, 0]
  );

  const yearY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [40, -100]
  );

  // Helsinki
  const cityOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.65],
    [0, 1, 0]
  );

  const cityScale = useTransform(
    scrollYProgress,
    [0.2, 0.65],
    [0.8, 1.25]
  );

  const cityY = useTransform(
    scrollYProgress,
    [0.2, 0.65],
    [60, -80]
  );

  return (
    <section className="relative h-[300vh] bg-black overflow-hidden">

      {/* 2013 */}
      <motion.div
        style={{
          opacity: yearOpacity,
          y: yearY,
        }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <p className="text-sm tracking-[1em] text-zinc-500">
          2013
        </p>
      </motion.div>

      {/* HELSINKI */}
      <motion.div
        style={{
          opacity: cityOpacity,
          scale: cityScale,
          y: cityY,
        }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-7xl text-white tracking-[0.25em]">
          HELSINKI
        </h1>
      </motion.div>

    </section>
  );
}