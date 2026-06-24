import MemoryParticles from "@/components/memoryparticles";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
      <MemoryParticles />

      <div className="grain" />

      <p className="relative z-10 animate-pulse text-neutral-500 text-sm tracking-[0.3em] uppercase">
        Every story begins with a memory.
      </p>
    </main>
  );
}