import MemoryParticles from "@/components/memoryparticles";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black">
      <MemoryParticles />

      <div className="grain" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <p className="animate-pulse text-neutral-500 text-sm tracking-[0.3em] uppercase">
          Every story begins with a memory.
        </p>
      </div>
    </main>
  );
}