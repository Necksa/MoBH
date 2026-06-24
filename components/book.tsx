"use client";

export default function Book() {
  return (
    <div className="bg-black text-white">

      <section className="sticky top-0 h-screen z-10 bg-black">
        <div className="flex h-screen items-center justify-center">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-zinc-500">
              2013
            </p>

            <h1 className="text-6xl tracking-[0.2em]">
              helsinki
            </h1>
          </div>
        </div>
      </section>

      <section className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center bg-black">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-zinc-500">
              collection
            </p>

            <h1 className="max-w-4xl text-5xl">
              a drawing of us made by a stranger
            </h1>
          </div>
        </div>
      </section>

    </div>
  );
}