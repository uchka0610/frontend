import { useEffect, useState } from "react";

export default function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-04T00:00:00");
    const difference = +targetDate - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#091C68] text-white py-4 px-6 flex items-center justify-between border-b border-white/10 z-50">
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wider">MESA</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Tickets
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Teams & Format
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            FAQ
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Category
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="flex gap-3">
          <button className="text-sm border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#001F7F] transition">
            Sign in
          </button>
          <button className="text-sm bg-[#091C68] px-4 py-1 rounded-full hover:bg-sky-300 transition">
            Sign up
          </button>
        </div>
      </header>

      <main className="relative bg-[#091C68] text-white overflow-hidden">
        {/* Ehnii sec */}
        <section className="relative h-screen pt-24">
          {/* Nomadic background text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-4 mb-48">
            <h1 className="uppercase font-extrabold drop-shadow-md w-full leading-none">
              <div className="text-[9vw] text-[#EACC18] tracking-tight">
                NOMADIC MASTERS
              </div>
              <div className="text-[12vw] text-[#EACC18] tracking-tight ">
                SPRING 2025
              </div>
            </h1>
          </div>

          {/* Trophy zurag */}
          <div className="absolute inset-0 z-20 flex justify-center items-end overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src="/statue.png"
                alt="Statue"
                width={1200}
                height={1200}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[36%]"
              />
              {/* Fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, #091C68 90   %)",
                }}
              />
            </div>
          </div>

          {/* Countdown */}
          <div className="relative z-30 flex flex-col items-center justify-center h-screen px-4 text-center">
            <p className="mt-4 text-lg">Time is ticking</p>

            <div className="flex gap-6 mt-10 text-4xl font-bold">
              <div className="text-center">
                <p>{timeLeft.days || "00"}</p>
                <span className="text-base font-normal">Days</span>
              </div>
              <div className="text-center">
                <p>{timeLeft.hours || "00"}</p>
                <span className="text-base font-normal">Hours</span>
              </div>
              <div className="text-center">
                <p>{timeLeft.minutes || "00"}</p>
                <span className="text-base font-normal">Minutes</span>
              </div>
              <div className="text-center">
                <p>{timeLeft.seconds || "00"}</p>
                <span className="text-base font-normal">Seconds</span>
              </div>
            </div>

            <a
              href="https://shoppy.mn/products/mesa-nomadic-masters-250503"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-6 py-3 bg-[#091C68] text-white border border-white font-semibold rounded-full hover:bg-gray-200 hover:text-[#091C68] transition"
            >
              Get Your Tickets →
            </a>
          </div>
        </section>

        {/* zurag */}
        <section className="relative py-20 bg-[#091C68]">
          <div className="w-full h-68 relative">
            {/* 1st background */}
            <img src="/1st bg.png" className="w-full h-full object-cover" />

            {/* Text inside the background */}
            <div className="absolute top-8 left-8 ml-16">
              <h2 className="text-[#EACC18] font-bold">SPRING 2025</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-8 text-white">
                NOMADIC MASTERS
              </h1>
            </div>

            {/* Trophy image inside the background */}
            <img
              src="/mglz.png"
              alt="Trophy Celebration"
              width={400}
              height={400}
              className="absolute top-8 right-8 rounded-md object-cover -translate-x-16 -translate-y-[20%] border-2 border-[#EACC18]"
            />
          </div>

          <div className="container mx-auto px-4 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Left content (Description and buttons) */}
              <div className="md:w-2/3">
                <p className="mb-6 text-gray-300">
                  Get ready—Nomadic Masters is back for its third edition, and
                  it's about to be legendary. Powered by MESA, this
                  Counter-Strike 2 tournament brings the heat with top-tier
                  talent, sharp strategy, and nonstop action.
                </p>
                <p className="text-gray-300 mb-8">
                  Whether you're here for the clutch plays or the high-stakes
                  hype, this is where the best come to battle. Mark your
                  calendars: May 3 – May 4. You won't want to miss a moment.
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="  text[#EACC18] font-semibold rounded flex items-center">
                    <img
                      src="/ticket.svg"
                      alt="Ticket Icon"
                      className="w-6 h-6 mr-2"
                    />
                    Tickets
                  </button>

                  <button className="  text[#EACC18] font-semibold rounded flex items-center">
                    <img
                      src="/FAQ.svg"
                      alt="Ticket Icon"
                      className="w-6 h-6 mr-2"
                    />
                    Read all FAQs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-[#091C68]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Event Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <img
                    src={`/big-${i}.png`}
                    alt={`Gallery ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
