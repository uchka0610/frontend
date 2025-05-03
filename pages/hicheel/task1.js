import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="bg-white shadow-xl w-full max-w-4xl rounded-lg overflow-hidden flex">
        <div className="bg-blue-900 text-white w-1/3 p-8 flex flex-col items-center">
          <img
            src="/luu.png"
            alt="Profile of Uchka"
            className="w-24 h-24 rounded-full border-4 border-white mb-6"
          />
          <h1 className="text-2xl font-bold mb-2 text-white">Uchka</h1>
          <p className="text-sm mb-4 text-white">SURAGCH</p>
          <div className="space-y-2">
            <p className="text-sm text-white">📞 99111199</p>
            <p className="text-sm text-white">✉️ temuujinbagshuurhun.com</p>
            <p className="text-sm text-white">📍 NIT</p>
            <p className="text-sm text-white">🌐 nhs.edu.mn</p>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold  border-white pb-1 mb-4 text-white">Bolovsrol</h2>
            <div className="text-sm space-y-4">
              <div>
                <p className="font-bold text-white">1969-3000</p>
                <p className="text-white">MUIS</p>
                <p className="text-white">NEST</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold  border-white pb-1 mb-4 text-white">Fav Game</h2>
            <ul className="text-sm space-y-2">
              <li className="text-white">VALORANT</li>
              <li className="text-white">LOL</li>
              <li className="text-white">DOTA2</li>
              <li className="text-white">CS2</li>
              <li className="text-white">GENSHIN</li>
              <li className="text-white">OVERWATCH</li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 text-black">Profile</h2>
            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-black">Ajilsan gazar</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-sm text-black">NEST</p>
                <p className="text-xs text-black mb-2">NIT</p>
                <p className="text-sm text-black ml-5 space-y-1">
                  <li>COACH-MONGOLZ, IMPERIALS, KHUNNU, BREAKPOINT</li>
                  <li>PRO PLAYER- IMPERIALS, KHUNNU</li>
                </p>
              </div>
              <div>
                <p className="font-bold text-sm text-black">LOREM</p>
                <p className="text-xs text-black mb-2">IDK</p>
                <ul className="text-sm text-black ml-5 space-y-1">
                  <li>LOREMIPSUM</li>
                  <li>LOREMIPSUM</li>
                  <li>LOREMIPSUM</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm text-black">TEMUUJIN</p>
                <p className="text-xs text-black mb-2">HUURHUN</p>
                <ul className="text-sm text-black ml-5 space-y-1">
                  <li>MUNDAG.</li>
                  <li>10onoo pls</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-black">LOREM</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-sm text-black">HAYAG</p>
                <p className="text-xs text-black">NIT</p>
                <p className="text-xs text-black">MONGOL</p>
                <p className="text-xs text-black">UB</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
