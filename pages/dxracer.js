import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MESA x DXRACER</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-black text-white font-sans min-h-screen">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 shadow-md shadow-white text-center md:text-left space-y-4 md:space-y-0">
          <img src="/logodx.png" className="ml-48" alt="DXRacer Logo" />
        </header>

        {/* Main Content */}
        <div className="w-full h-auto">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source src="martian.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <section>
          <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
              {/* Left Text Section */}
              <div>
                <h1 className="text-5xl font-bold mb-2  font-montserrat">MARTIAN</h1>
                <h2 className="text-sm text-gray-400 mb-8">
                  SERIES GAMING CHAIR
                </h2>

                <p className="text-lg mb-6  font-montserrat">
                  Electric Precision For Ultimate Comfort
                </p>

                <div className="space-y-3 text-gray-300 mb-8  font-montserrat">
                  <p>Electric Precision for Ultimate Comfort</p>
                  <ul className="list-disc list-inside space-y-2  font-montserrat">
                    <li>Smart Airbag Lumbar Support</li>
                    <li>Electric Adjustable Backrest</li>
                    <li>Magnetic Memory Foam Head Pillow</li>
                    <li>4D Armrests with Top Replacement System</li>
                    <li>Convenient Charging</li>
                    <li>Wider and Thicker Seat Base</li>
                    <li>Cold-cure Foam</li>
                  </ul>
                </div>

                <p className="text-xs text-gray-500  font-montserrat">
                  *Inspired by the mysterious planet Mars, the DXRACER Martian
                  Series provides you with an out-of-this-world zero-gravity
                  experience that enhances your comfort and performance
                  throughout the day. It makes you feel like you're floating in
                  space!
                </p>
              </div>

              {/* Right Image Section */}
              <div className="relative">
                <div className="bg-[#090909] rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center relative">
                  <Image
                    src="/sandal1.png"
                    alt="Martian Series Gaming Chair"
                    width={400}
                    height={600}
                    className="object-contain"
                  />
                  <div className="absolute bottom-4 text-center text-sm text-gray-300 font-montserrat">
                    New product Martian was released, so check out right now.
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
