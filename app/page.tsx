export default function Page() {
  const events = [
    {
      date: "4AM, 10-Jan",
      title: "Bhogi",
      desc: "Bhogi will start with a huge campfire set up.",
    },
    {
      date: "6AM, 10-Jan",
      title: "Morning DJ",
      desc: "Get your morning vibes with bang south DJ, Grove in the snow untill you feel hot",
    },
    {
      date: "10AM, 11-Jan",
      title: "Makar Sankranthi Pooja",
      desc: "We will start our colorful sankranthi day with Pooja",
    },
    {
      date: "11AM, 11-Jan",
      title: "Dance Program",
      desc: "Enjoy the South Dance",
    },
    {
      date: "12PM, 11-Jan",
      title: "Lunch",
      desc: "Taste South",
    },
    {
      date: "3PM, 11-Jan",
      title: "Final DJ",
      desc: "Dance untill you are tired",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-lime-100 to-amber-50 p-4 md:p-6">
      {/* Hero Clip Block */}
      <div className="w-full flex flex-col items-center mb-16">
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-white p-1">
          <video
            className="w-full h-auto rounded-2xl"
            src="/land_clip.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Timeline Block */}
      <div className="w-full flex flex-col items-center mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Progress Timeline
        </h2>

        <div className="relative w-full max-w-6xl flex flex-col items-center">
          {/* Center Stick Image */}
          <img
            src="/bg_removed.png"
            alt="Timeline skeleton stick"
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-auto opacity-100 pointer-events-none"
          />

          {/* Timeline Events */}
          <div className="relative flex flex-col gap-20 z-20">
            {events.map((event, i) => (
              <div
                key={i}
                className={`flex items-center ${i % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`w-[40%] bg-gradient-to-br from-lime-50 to-amber-100 border border-lime-300 rounded-2xl shadow-md p-4 ${i % 2 === 0 ? "text-left" : "text-right"
                    }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {event.date}
                  </h3>
                  <h4 className="text-md font-bold text-lime-700 mt-1">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube Embedding Block */}
      <div className="mt-20 w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          After Movie Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* 2024 Video */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2024 After Movie
            </h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/oBgSfL-gssU?si=-6ufOhmHsHas1WBL"
                title="2024 After Movie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>


          {/* 2023 Video */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2023 After Movie
            </h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VT3rQkxfL54?si=zGfrTrWgTPCoVpU_"
                title="2023 After Movie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* 2022 Video */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2022 After Movie
            </h3>
            <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-medium">
              Not Available...
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
