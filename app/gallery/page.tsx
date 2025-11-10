"use client";


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./gallery.css";

import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

// --- Types ---
interface PhotoSections {
  [sectionName: string]: string[];
}

interface PhotoGroup {
  year: string;
  photos: string[];
  sections: PhotoSections;
}

// --- Component ---
const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<PhotoGroup | null>(null);

  const photoGroups: PhotoGroup[] = [
    {
      year: "January 15 2025",
      photos: [
        "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg",
        "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
        "https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-beautiful-desktop-images-cool.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg",
      ],
      sections: {
        Sankranthi: [
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        ],
        Bhogi: [
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
          "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg",
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
        ],
        Food: ["https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg"],
        Dance: ["https://images.pexels.com/photos/2080965/pexels-photo-2080965.jpeg"],
      },
    },
    {
      year: "January 14 2024",
      photos: [
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=forest-trees-nature-green-1761279.jpg&fm=jpg",
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=sea-ocean-sunset-3225517.jpg&fm=jpg",
        "https://wallpapershome.com/images/pages/pic_h/14367.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Images-HD-Free-Download.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Images-Free-Download-Beautiful.jpg",
      ],
      sections: {
        "Netaji Bhawan": [
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        ],
        Bhogi: [
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
          "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg",
        ],
        Food: ["https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg"],
        Dance: ["https://images.pexels.com/photos/2080965/pexels-photo-2080965.jpeg"],
      },
    },
    {
      year: "January 10 2023",
      photos: [
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=mountain-top-view-3408744.jpg&fm=jpg",
        "https://wallpapershome.com/images/pages/pic_h/21969.jpg",
        "https://images.pexels.com/photos/2080965/pexels-photo-2080965.jpeg?cs=srgb&dl=forest-lake-reflection-2080965.jpg&fm=jpg",
        "https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?cs=srgb&dl=beautiful-landscape-mountains-nature-316466.jpg&fm=jpg",
        "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?cs=srgb&dl=sunset-sky-clouds-912110.jpg&fm=jpg",
      ],
      sections: {
        "Netaji Bhawan": [
          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        ],
        Bhogi: [
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
          "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg",
        ],
        Food: ["https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg"],
        Dance: ["https://images.pexels.com/photos/2080965/pexels-photo-2080965.jpeg"],
      },
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 bg-gradient-to-br from-[#a03300] via-[#6A040F] to-[#FAA307] animate-gradient-x">
      {/* Rotating Kolam */}
      <img
        src="/gallery/png1.png"
        alt="Kolam"
        className="absolute top-4 left-4 opacity-[0.05] rotate-slow drop-shadow-[0_0_10px_#FFBA08]"
      />

      {/* Heading */}
      <div className="text-center mb-20 z-10">
        <h1
  className={`${dancing.className} text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text [-webkit-background-clip:text] bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] drop-shadow-lg animate-pulse`}
>
  Sankranti Memories
</h1>

        <p
          className="mt-2 text-lg md:text-xl text-yellow-100 font-medium tracking-wide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Celebrating the joy of{" "}
          <span className="text-[#FFBA08]" style={{ fontFamily: "'poppins', cursive" }}>
            Batches from 2024 Passouts
          </span>
        </p>

        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* === Timeline Section === */}
      <div className="relative w-full max-w-5xl z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/40"></div>

        {photoGroups.map((group, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between mb-24 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Year Label */}
            <div
              className={`relative w-full md:w-1/2 flex ${
                index % 2 === 0 ? "justify-end pr-10 md:pr-20" : "justify-start pl-10 md:pl-20"
              }`}
            >
              <div className="absolute top-1/2 -translate-y-1/2 transform">
                <div className="bg-white/20 backdrop-blur-md text-white font-semibold text-base rounded-lg px-4 py-2 shadow-md border border-white/30 hover:bg-white/30 transition-all duration-500">
                  {group.year}
                </div>
              </div>
            </div>

            {/* Dot */}
            <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-lg z-10">
              <div className="w-3 h-3 rounded-full bg-[#FFBA08] animate-ping absolute"></div>
              <div className="w-3 h-3 rounded-full bg-[#DC2F02] z-10"></div>
            </div>

            {/* Photos */}
            <div
              className={`relative w-full md:w-1/2 flex ${
                index % 2 === 0 ? "justify-start pl-10 md:pl-20" : "justify-end pr-10 md:pr-20"
              }`}
            >
              <div
                onClick={() => setSelectedYear(group)}
                className="relative w-[360px] h-[220px] group cursor-pointer"
              >
                {group.photos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={`absolute w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white transition-all duration-500 ${
                      i === 0
                        ? "z-50 group-hover:-translate-y-6"
                        : i === 1
                        ? "z-40 group-hover:-translate-y-4"
                        : i === 2
                        ? "z-30 group-hover:-translate-y-2"
                        : i === 3
                        ? "z-20"
                        : "z-10"
                    }`}
                    style={{ rotate: `${(i - 2) * 3}deg` }}
                    alt="stacked"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === Fullscreen Modal === */}
      <AnimatePresence>
        {selectedYear && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedYear(null)}
            />
            <motion.div
              key="popup"
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <motion.div
                className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto modal-scroll bg-gradient-to-br from-[#370617] via-[#6A040F] to-[#FAA307] border-[3px] border-[#FFBA08]/40 rounded-2xl shadow-[0_0_25px_#FFBA08]/50 p-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <motion.button
                  onClick={() => setSelectedYear(null)}
                  className="absolute top-4 right-6 text-4xl font-bold text-white hover:text-[#FFBA08] transition cursor-pointer z-50 rotate-45"
                >
                  +
                </motion.button>

                <motion.h2
                  className="text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] drop-shadow-[0_0_15px_#FFBA08]/70 mb-12 pb-2 leading-[1.2]"
                  style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "2px" }}
                >
                  {selectedYear.year}
                </motion.h2>

                <div className="space-y-16 pb-10">
                  {Object.entries(selectedYear.sections).map(([section, imgs], sIndex) => (
                    <motion.div
                      key={section}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: sIndex * 0.2 }}
                    >
                      <div className="inline-block bg-gradient-to-r from-[#6A040F]/70 via-[#9D0208]/60 to-[#D00000]/60 border border-[#FFBA08]/50 px-6 py-2 rounded-lg shadow-md hover:shadow-[0_0_15px_#FFBA08]/40 transition mb-6">
                        <h3
                          className="text-2xl font-semibold text-[#FFBA08] drop-shadow-[0_0_8px_#FFBA08]/40"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {section}
                        </h3>
                      </div>

                      <div className="flex justify-center">
                        <div
                          className="
                            grid gap-5
                            justify-center
                            grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
                            max-w-[1100px]
                            auto-rows-[200px]
                          "
                        >
                          {imgs.map((img, k) => (
                            <motion.div
                              key={k}
                              className={`
                                relative group overflow-hidden rounded-xl shadow-lg border-2 border-white hover:border-[#FFBA08]/50 transition-all duration-300 
                                ${k % 5 === 0 ? "col-span-2 row-span-1" : ""} 
                                ${k % 3 === 0 ? "row-span-2" : ""} 
                              `}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                            >
                              <motion.img
                                src={img}
                                alt={section}
                                className="w-full h-full object-cover rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: k * 0.1 }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
