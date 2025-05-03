import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRedditAlien,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>MESA x DXRACER</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-black text-white font-sans min-h-screen">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 shadow-md shadow-white text-center md:text-left space-y-4 md:space-y-0 h-36 border-[#333333] border-b-2">
          <img src="/logodx.png" className="ml-48" alt="DXRacer Logo" />
        </header>

        {/* Main Video */}
        <div className="w-full h-auto">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source src="martian.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Product Highlight */}
        <section>
          <div className="min-h-screen bg-black text-white flex items-center justify-center p-16">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div>
                <h1 className="text-5xl font-bold mb-2 font-montserrat">
                  MARTIAN
                </h1>
                <h2 className="text-sm text-gray-400 mb-8">
                  SERIES GAMING CHAIR
                </h2>

                <p className="text-lg mb-6 font-montserrat">
                  Electric Precision For Ultimate Comfort
                </p>

                <div className="space-y-3 text-gray-300 mb-8 font-montserrat">
                  <p>Electric Precision for Ultimate Comfort</p>
                  <ul className="list-disc list-inside space-y-2 font-montserrat">
                    <li>Smart Airbag Lumbar Support</li>
                    <li>Electric Adjustable Backrest</li>
                    <li>Magnetic Memory Foam Head Pillow</li>
                    <li>4D Armrests with Top Replacement System</li>
                    <li>Convenient Charging</li>
                    <li>Wider and Thicker Seat Base</li>
                    <li>Cold-cure Foam</li>
                  </ul>
                </div>

                <p className="text-xs text-gray-500 font-montserrat">
                  *Inspired by the mysterious planet Mars, the DXRACER Martian
                  Series provides you with an out-of-this-world zero-gravity
                  experience that enhances your comfort and performance
                  throughout the day. It makes you feel like you're floating in
                  space!
                </p>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="bg-[#090909] rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center relative border-2 border-[#333333]">
                  {/* Glow behind the image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-white opacity-20 blur-2xl rounded-full z-0" />

                  {/* Actual Image */}
                  <Image
                    src="/sandal1.png"
                    alt="Martian Series Gaming Chair"
                    width={400}
                    height={600}
                    className="object-contain relative z-10"
                  />

                  {/* Text at the bottom */}
                  <div className="absolute bottom-4 text-center text-sm text-gray-300 font-montserrat z-20">
                    New product Martian was released, so check out right now.
                  </div>

                  {/* Arrow Icon */}
                  <a href="https://www.dxracer.com/pages/gaming-chairs/martian">
                    <div className="absolute bottom-4 right-4 z-20">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Product Section */}
        <section className="bg-black py-20 p-8">
          <div className="max-w-[1600px] mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 font-montserrat">
              Our new product
            </h2>

            {/* Top Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 h-[400px] ">
              {/* Card 1 */}
              <div className="bg-[#090909] rounded-xl overflow-hidden p-6 relative border-[#333333] border-2">
                <Image
                  src="/132.png"
                  alt="Chair Front"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black to-transparent"></div>{" "}
                {/* Moved the shadow up */}
                <p className="absolute bottom-6 left-6 text-gray-300 font-montserrat">
                  <strong>DXRACER:</strong> New chair with new feelings. Play as
                  like Pro with this chair.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#090909] rounded-xl overflow-hidden p-6 relative border-2 border-[#333333]">
                <Image
                  src="/5.png"
                  alt="Electric Chair Detail"
                  width={450}
                  height={450}
                  className="w-[400px] h-[400px] object-contain -translate-x-14 -translate-y-[6%]"
                />
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black to-transparent"></div>{" "}
                {/* Moved the shadow up */}
                <p className="absolute bottom-6 left-6 text-gray-300 font-montserrat">
                  <strong>DXRACER:</strong> High quality material with
                  sustainable electric chair.
                </p>
              </div>
            </div>

            {/* Middle Row - 1 Full Video Card */}
            <div className="mb-8 border-[#333333] border-2 rounded-lg">
              <div className="w-full h-[600px] relative overflow-hidden rounded-xl border-[#333333]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/dund.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Slim Card 1 */}
              <div className="w-full md:w-1/4 bg-[#090909] rounded-xl overflow-hidden p-4 border-[#333333] border-2 h-80 relative">
                <Image
                  src="/d1.png"
                  alt="Chair Side"
                  className="w-full h-full object-cover -translate-x-24 -translate-y-6"
                  width={600}
                  height={600}
                />

                {/* Gradient under the text, going higher */}
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent"></div>

                {/* Text placed on top of the gradient */}
                <p className="absolute bottom-10 left-16 text-gray-300 font-montserrat text-sm text-left -translate-x-12 translate-y-5">
                  <strong>DXRACER:</strong> New chair with new feelings. Play as
                  like Pro with this chair.
                </p>
              </div>

              {/* Slim Card 2 */}
              <div className="w-full md:w-1/4 bg-[#090909] rounded-xl overflow-hidden p-4 border-[#333333] border-2 h-80 relative">
                <Image
                  src="/432.png"
                  alt="Chair Side"
                  className="w-full h-full object-cover translate-x-6 -translate-y-4"
                  width={600}
                  height={600}
                />

                {/* Gradient under the text, going higher */}
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent"></div>

                {/* Text placed on top of the gradient */}
                <p className="absolute bottom-10 left-16 text-gray-300 font-montserrat text-sm text-left -translate-x-10 translate-y-5">
                  <strong>DXRACER:</strong> New chair with new feelings. Play as
                  like Pro with this chair.
                </p>
              </div>

              {/* Wide Card 3 */}
              <div className="w-full md:w-2/4 bg-[#090909] rounded-xl overflow-hidden p-4 border-[#333333] border-2 h-80 relative">
                <Image
                  src="/asd.png"
                  alt="Electric System"
                  fill
                  className="object-contain translate-x-56 -translate-y-6"
                />
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent"></div>
                <p className="mt-4 text-sm text-gray-300 font-montserrat translate-y-60 left-16">
                  <strong>DXRACER:</strong> High quality material with
                  sustainable electric chair.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">
              Partnership with
            </h2>
          </div>

          <div className="w-full">
            <Image
              src="/tom.png"
              width={1920}
              height={800}
              className="w-full"
              style={{ height: "auto" }}
              alt="Partnership"
            />
          </div>
        </section>
        <section>
          <div className="max-w-[1600px] mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">
              Get the highlights
            </h2>
            {/* Full */}
            <div className="mb-8 border-[#333333] border-2 rounded-lg">
              <div className="w-full h-[600px] relative overflow-hidden rounded-xl border-[#333333]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="suul1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 h-[400px] ">
              {/* Card 1 */}
              <div className="bg-[#090909] rounded-xl overflow-hidden relative border-2 border-[#333333]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="suul2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="absolute bottom-4 left-4 text-sm text-gray-300 font-montserrat -translate-y-4">
                  <strong>WIDER AND THICKER SEAT BASE.</strong> High quality
                  material with sustainable electric chair.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#090909] rounded-xl overflow-hidden relative border-2 border-[#333333]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="suul3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="absolute bottom-4 left-4 text-sm text-gray-300 font-montserrat -translate-y-4">
                  <strong>COLD-CURE FOAM.</strong> High quality material with
                  sustainable electric chair.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black py-20 p-8">
          <div className="max-w-[1600px] mx-auto px-6">
            <h2 className="text-xl font-semibold mb-12 font-montserrat text-center">
              COLLABORATIONS
            </h2>
            <div className="bg-black text-white py-12 px-6">
              <h1 className="text-4xl font-bold mb-2">WIN LIKE A PRO</h1>
              <p className="text-lg mb-10">
                This is our history of Esports Collaboration
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    img: "/nip.png",
                    title: "NINJAS IN PYJAMIS.",
                    desc: "NIP is a professional esports organisation based in Sweden that is best known for its Counter-Strike teams.",
                  },
                  {
                    img: "/navi.png",
                    title: "NATUS VINCERE.",
                    desc: "Natus Vincere (Latin for 'born to win'), commonly referred to as NAVI, is a Ukrainian esports organization based in Kyiv.",
                  },
                  {
                    img: "/fnatic.png",
                    title: "FNATIC.",
                    desc: "Fnatic is a professional esports organisation headquartered in London, United Kingdom.",
                  },
                  {
                    img: "/vp.png",
                    title: "VIRTUS PRO.",
                    desc: "Virtus.pro (VP) is an international esports organization founded in 2003 in Russia and acquired by Armenian investors in 2022.",
                  },
                  {
                    img: "/faze.png",
                    title: "FAZE CLAN.",
                    desc: "FaZe Clan is a professional esports and entertainment organization headquartered in Los Angeles, California, United States.",
                  },
                  {
                    img: "/furia.png",
                    title: "FURIA.",
                    desc: "Furia Esports, stylized as FURIA Esports or simply FURIA, is a Brazilian professional esports organization.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden group"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-60 group-hover:bg-opacity-0 p-4 flex flex-col justify-end">
                      <div className="transition-colors duration-300 p-2 rounded-md group-hover:bg-opacity-80">
                        <p className="text-sm">
                          <span className="font-bold">{item.title}</span>{" "}
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white py-10">
          <div className="max-w-screen-lg mx-auto px-6 text-center">
            <h2 className="text-lg font-semibold tracking-widest mb-6 text-gray-400 uppercase">
              Buy Our Chair
            </h2>
            <h1 className="text-4xl font-extrabold mb-4">Where to Buy?</h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover your favorite gaming chair at our official website!
            </p>
            <a
              href="https://www.dxracer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline hover:text-gray-200 transition duration-200"
            >
              Visit Website →
            </a>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6">
            <div className="max-w-screen-lg mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a
                    href="mailto:contact@dxracer.com"
                    className="text-gray-300 hover:text-gray-200 transition duration-200"
                  >
                    contact@dxracer.com
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/MESA.HQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-6 h-6 text-gray-400 hover:text-gray-200 transition duration-200" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-6 h-6 text-gray-400 hover:text-gray-200 transition duration-200" />
                  </a>
                  <a
                    href="https://www.instagram.com/mesa.hq"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6 text-gray-400 hover:text-gray-200 transition duration-200" />
                  </a>
                  <a
                    href="https://www.youtube.com/@mesa_tv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-6 h-6 text-gray-400 hover:text-gray-200 transition duration-200" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                © 2003–2025 DXRacer. All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
