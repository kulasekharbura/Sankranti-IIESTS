import Image from "next/image";

import Hero from "@/components/bhogi/Hero";
import AboutSection from "@/components/bhogi/About";
import EventsSection from "@/components/bhogi/Event";
import { Gallery } from "@/components/bhogi/Gallery";
import { History } from "@/components/bhogi/History";

export default function Page() {
  return (
    <>
      <div
        className="
        relative
        pt-14 min-h-screen
        bg-gradient-to-t from-[#240000] via-[#5e0a0a] to-[#b88a30]
        overflow-hidden
      "
      >
        <div
          className="
          absolute top-0 md:top-[60px] left-0 w-full z-10
          flex justify-center gap-0 pointer-events-none
        "
        >
          <div className="flex w-full max-w-[1400px] justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`
                flex-shrink justify-center
                ${i >= 3 ? "hidden md:flex" : "flex"}
                basis-1/2 md:basis-[16%]
              `}
              >
                <Image
                  src="/decor/garland3.png"
                  alt="garland"
                  width={250}
                  height={250}
                  className="w-full h-auto max-h-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/decor/confetti.png"
          alt="confetti"
          width={1200}
          height={1200}
          className="
          absolute top-0 left-0 w-full h-full object-cover opacity-20
          pointer-events-none z-0
        "
        />

        <Image
          src="/decor/kite_blue.png"
          alt="kite blue"
          width={300}
          height={300}
          className="
          absolute top-[20%] left-[2%]
          w-[120px] md:w-[180px]
          animate-float-slow
          pointer-events-none z-20
        "
        />

        <Image
          src="/decor/kite_red.png"
          alt="kite red"
          width={300}
          height={300}
          className="
          absolute top-[30%] right-[3%]
          w-[120px] md:w-[180px]
          animate-float
          pointer-events-none z-20
        "
        />

        <Image
          src="/decor/rangoli.png"
          alt="rangoli"
          width={1000}
          height={1000}
          className="
          absolute left-1/2 -translate-x-1/2
          w-[350px] md:w-[470px] opacity-40
          pointer-events-none mt-[120] md:mt-[85px]
        "
        />

        <div className="relative z-30 flex flex-col items-center mt-64 select-none">
          <div className="flex items-center gap-3 md:gap-6">
            <h1
              className="
              text-center font-[var(--font-cinzel)]
              text-yellow-200 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]
              text-3xl md:text-6xl tracking-wide z-5
            "
            >
              Happy Makar Sankranti
            </h1>
          </div>

          <p
            className="
            text-center text-xl md:text-3xl 
            text-orange-200 mt-3 md:mt-4 z-5
            font-[var(--font-cinzel)] tracking-widest drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]
          "
          >
            2026
          </p>
        </div>
      </div>
      <div
  className="w-full"
  style={{
    height: "160px", // adjust height as needed (ex: "96px", "160px", "256px")
    background:
      "linear-gradient(to bottom, " +
        "#240000 5%,"+ 
        "#020102 95%" +
      ")",
  }}
/>

      <main className="bg-black text-white">
        <Hero />
        <div className="bg-gradient-to-b from-black to-gray-950">
          <AboutSection />
          <EventsSection />
          <History />
          <Gallery />
        </div>
      </main>
    </>
  );
}
