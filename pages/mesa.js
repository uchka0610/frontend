import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MESA x ZOWIE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-black text-white font-sans min-h-screen">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 shadow-lg shadow-red-500 text-center md:text-left space-y-4 md:space-y-0">
          <h1 className="text-3xl font-bold">MESA</h1>
          <nav className="space-x-4 md:space-x-6 text-sm md:text-base font-medium flex flex-wrap justify-center md:justify-start">
            <a href="#" className="hover:text-red-500">
              NEWS
            </a>
            <a href="#" className="hover:text-red-500">
              PARTNERS
            </a>
            <a href="#" className="hover:text-red-500">
              GIVEAWAY
            </a>
            <a href="#" className="hover:text-red-500">
              MVP
            </a>
          </nav>
          <div className="space-x-2 flex justify-center md:justify-end">
            <button className="text-sm">LOG IN</button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-medium">
              REGISTER NOW
            </button>
          </div>
        </header>

        {/*Main Content*/}
        <div className="text-center py-10 md:py-16 px-4 md:px-8">
          <div className="text-[#D4003B] text-2xl md:text-3xl mb-2">✦✦</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What’s most preferred{" "}
            <span className="text-[#D4003B]">monitor by pro-gamers?</span>
          </h2>
          <p className="mt-2 text-gray-300 text-sm md:text-base">
            according to ProSettings.net*
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mt-10 md:mt-16">
            {/*CS2*/}
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-gradient-to-b from-[#D4003B] to-[#370614] p-6 rounded-tl-[50px] rounded-br-[50px] w-56 h-56 overflow-visible flex justify-center relative">
                <img
                  src="/cs.png"
                  alt="CS2"
                  className="scale-125 object-cover  origin-center transform translate-y-[10%] translate-x-[-15%]"
                />
              </div>
              <div className=" ml-0 md:ml-8 mt-6 md:mt-0 max-w-[220px] text-center md:text-left">
                <p className="text-[#D4003B] font-bold text-2xl">80%+</p>
                <p className="text-[#D4003B] font-bold leading-tight">
                  Counter Strike 2 pro-gamers
                  <br />
                  <span className="text-white">choice for monitor</span>
                </p>

                <button className="mt-2 border border-white px-5 py-2 rounded-full text-base hover:bg-white hover:text-black transition duration-200">
                  Check here
                </button>
              </div>
            </div>

            {/*VALORANT*/}
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-gradient-to-b from-[#D4003B] to-[#370614] p-6 rounded-tl-[50px] rounded-br-[50px] w-56 h-56 overflow-visible flex justify-center relative">
                <img
                  src="https://cdn.discordapp.com/attachments/1150760758934769666/1363755357368881172/ReynaBetter.png?ex=68072fa6&is=6805de26&hm=854d6e8132f446689c2d28f537299e93ae7aaffbe13865419ff167e5283ee9cc&"
                  alt="Valorant"
                  className="scale-175 object-cover origin-center transform translate-y-[1%]"
                />
              </div>
              <div className=" ml-0 md:ml-8 mt-6 md:mt-0 max-w-[220px] text-center md:text-left">
                <p className="text-[#D4003B] font-bold text-2xl">70%+</p>
                <p className="text-[#D4003B] font-bold">
                  of VALORANT pro-gamers{" "}
                  <span className="text-white">choice for monitor.</span>
                </p>
                <button className="mt-4 border border-white px-5 py-2 rounded-full text-base hover:bg-white hover:text-black transition duration-200">
                  Check here
                </button>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-6 max-w-md mx-auto">
            *ProSettings.net is the most trusted database for accurate analysis
            and reviews of pro gamers' preferred hardware and in-game settings.
          </p>
        </div>

        {/*bichleg*/}
        <section className="bg-black text-white py-12 md:py-16 px-4 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#D4003B] text-2xl md:text-3xl font-semibold uppercase">
                Reviews
              </p>
              <h2 className="text-3xl md:text-4xl leading-tight font-thin">
                <span className="text-[#D4003B] font-bold">
                  Win like a pro.
                </span>
                <br />
                This is what our Pros say.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/K8i_0PSPPVM?rel=0&vq=hd1080"
                title="Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/1hBgkrmIeSw?rel=0&vq=hd1080"
                title="Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/5xjwf0NoyE8?rel=0&vq=hd1080"
                title="Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/qpLcMhkCzT4?rel=0&vq=hd1080"
                title="Video 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/*Marquee*/}
        <div className="marquee-wrapper overflow-hidden w-full">
          <div className="marquee-content flex animate-marquee">
            <Image
              src="/vct.png"
              width={1000}
              height={100}
              className="flex-shrink-0 animate-image-delay-1"
            />
            <Image
              src="/sen.png"
              width={1000}
              height={100}
              className="flex-shrink-0 animate-image-delay-2"
            />
            <Image
              src="/vct.png"
              width={1000}
              height={100}
              className="flex-shrink-0 animate-image-delay-3"
            />
            <Image
              src="/sen.png"
              width={1000}
              height={100}
              className="flex-shrink-0 animate-image-delay-4"
            />
          </div>
        </div>

        {/*Gear Showcase*/}
        <div className="bg-black text-white pt-8 space-y-12">
          <div
            className="relative bg-cover bg-center w-full min-h-[550px] flex items-center justify-end"
            style={{ backgroundImage: "url('/mousepad.png')" }}
          >
            <div className="p-6 rounded-lg max-w-md">
              <h2 className="text-2xl font-bold mb-2">
                Strive for Perfection.
              </h2>
              <p className="text-sm text-gray-300">
                ZOWIE is focusing on designing dedicated esports gear for FPS
                players, empowering you to continually surpass your limits in
                FPS competition.
              </p>

              <div className="flex justify-center md:justify-start gap-8 mt-6 flex-wrap">
                {/*Monitor*/}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-bl from-[#D4003B] via-[#70001F] to-[#6E001F] w-20 h-20 rounded-full flex items-center justify-center overflow-visible relative min-w-[80px]">
                    <img
                      src="/monitor.png"
                      alt="Monitor"
                      className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                  </div>
                  <p className="text-sm mt-2">Monitors</p>
                </div>

                {/*Mouse*/}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-bl from-[#D4003B] via-[#70001F] to-[#6E001F] w-20 h-20 rounded-full flex items-center justify-center overflow-visible relative min-w-[80px]">
                    <img
                      src="/mouse.png"
                      alt="Mouse"
                      className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                  </div>
                  <p className="text-sm mt-2">Mice</p>
                </div>

                {/*Mousepad*/}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-bl from-[#D4003B] via-[#70001F] to-[#6E001F] w-20 h-20 rounded-full flex items-center justify-center overflow-visible relative min-w-[80px]">
                    <img
                      src="/pad.png"
                      alt="Mousepad"
                      className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                  </div>
                  <p className="text-sm mt-2">Mouse Pads</p>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black">
                  Check here
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Footer*/}
        <div className="grid md:grid-cols-2 grid-cols-1 pt-1">
          <div className="bg-[#d40a41] text-white flex flex-col items-center justify-center py-16 px-6 md:rounded-tr-[80px] text-center">
            <Image src="/map.png" alt="Location Icon" width={120} height={50} />
            <h2 className="text-2xl font-bold mt-4">
              Interested in experiencing?
            </h2>
            <p className="mt-2">
              Get the ZOWIE experience by visiting our partner iCafes
            </p>
            <Link
              href="/experience"
              className="hover:bg-white hover:text-black mt-6 bg-[#d40a41] text-[#ffffff] px-5 py-2 rounded-full font-semibold hover:shadow-md transition border-2 border-white"
            >
              Check here
            </Link>
          </div>
          <div className="bg-black text-white flex flex-col items-center justify-center py-16 px-6 text-center">
            <Image
              src="/shop.png"
              alt="Cart Icon"
              className="mr-[30px]"
              width={120}
              height={50}
            />
            <h2 className="text-2xl font-bold mt-4">Where to Buy</h2>
            <p className="mt-2">
              Check out our list of partner dealers and stores
            </p>
            <Link
              href="/experience"
              className="hover:bg-white hover:text-black mt-6 bg-black text-[#ffffff] px-5 py-2 rounded-full font-semibold hover:shadow-md transition border-2 border-white"
            >
              Check here
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
