import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MESA x Zowie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-black text-white font-sans min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 shadow-lg shadow-red-500">
          <h1 className="text-3xl font-bold">MESA</h1>
          <nav className="space-x-6 text-sm font-medium">
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
          <div className="space-x-2">
            <button className="text-sm">LOG IN</button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-medium">
              REGISTER NOW
            </button>
          </div>
        </header>

        <section className="text-center py-16 px-4">
          <div className="text-red-400 text-3xl mb-2">✦✦</div>
          <h2 className="text-4xl font-extrabold">
            What’s most preferred{" "}
            <span className="text-red-600">monitor by pro-gamers?</span>
          </h2>
          <p className="mt-2 text-gray-300 text-sm">
            according to ProSettings.net*
          </p>

          {/* Monitor Blocks */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
    {/* CS2 Block */}
    <div className="">
      {/* Red Box with Overflowing Image */}
      <div className=" bg-red-800 p-4 rounded-tl-3xl rounded-br-3xl w-40 h-40 overflow-visible">
        <img
          src="https://s3-alpha-sig.figma.com/img/20f4/09fc/1932cee7326623a8d4236c534cf13065?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ndvZYZD-C1rsahxiwAr7WEwhBwvHO2SVUKnPOm2o7bpRTkF6RoFnoZlNucphXpzdY7Sx03yq30GOpO2KlwYQ6NIBtIWpIY~G5Pl8Kb35RDEX4M~evkU0Vr7Kq1dv8TjCob2I3ttd~s0DjHdvwF~-tvjvqbwFz1PLPgtUZURTAd~y~HMPz-6YF5h~y-NJRo0wdrJEYLsetGvHYSYP4qk1Ut6YkqyhBcnmiEorvU4zVeeCP1bW-Czmnl6OZSyEV36QgPL5-KVd9LY5UYYFtfzBXjB2N8MZU-DTBS4hV3lfjdqKzLNZxbn0yDDO7fyi2WaXHmWPsXAVsjWoIJi9g1OnLg__"
          alt="CS2"
          className="object-fill h-56 w-48 pb-10 "
        />
      </div>

              {/* Text on Right */}
              <div className="text-left ml-6 max-w-[180px]">
                <p className="text-red-200 font-bold text-xl">80%+</p>
                <p className="text-sm mt-1">
                  of CS2 pro-gamers choice for monitor.
                </p>
                <button className="mt-4 border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black">
                  Check here
                </button>
              </div>
            </div>

            {/* VALORANT Block */}
            <div className="flex items-center">
              {/* Image Block */}
              <div className="relative bg-gradient-to-br from-pink-700/50 via-pink-800/30 to-black p-4 rounded-xl w-40 h-40 overflow-visible">
                <img
                  src="https://static.valorantstats.xyz/assets/agents/Reyna.png"
                  alt="Valorant"
                  className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-32 h-32 object-contain"
                />
              </div>

              {/* Text on Right */}
              <div className="text-left ml-6 max-w-[180px]">
                <p className="text-red-500 font-bold text-xl">70%+</p>
                <p className="text-sm mt-1">
                  of VALORANT pro-gamers choice for monitor.
                </p>
                <button className="mt-4 border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black">
                  Check here
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6 max-w-md mx-auto">
            *ProSettings.net is the most trusted database for accurate analysis
            and reviews of pro gamers' preferred hardware and in-game settings.
          </p>
        </section>
      </main>
    </>
  );
}
