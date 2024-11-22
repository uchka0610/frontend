import React from "react";

export default function WeatherDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Madrid</h1>
            <p className="text-sm text-gray-400">Chance of rain: 0%</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-7xl font-bold">31°</div>
            <div className="ml-4">
              <div className="text-4xl">☀️</div>
              <div className="text-gray-400 text-sm">Sunny</div>
            </div>
          </div>
        </div>
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Today's Forecast</h2>
          <div className="grid grid-cols-6 gap-4 text-center">
            <div>
              <p className="text-gray-400 text-sm">6:00 AM</p>
              <p className="text-xl">☁️</p>
              <p className="text-gray-400 text-sm">25°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">9:00 AM</p>
              <p className="text-xl">🌤️</p>
              <p className="text-gray-400 text-sm">28°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">12:00 PM</p>
              <p className="text-xl">☀️</p>
              <p className="text-gray-400 text-sm">33°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">3:00 PM</p>
              <p className="text-xl">☀️</p>
              <p className="text-gray-400 text-sm">34°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">6:00 PM</p>
              <p className="text-xl">☀️</p>
              <p className="text-gray-400 text-sm">32°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">9:00 PM</p>
              <p className="text-xl">☁️</p>
              <p className="text-gray-400 text-sm">30°</p>
            </div>
          </div>
        </div>
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Air Conditions</h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-gray-400 text-sm">Real Feel</p>
              <p className="text-2xl">30°</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Wind</p>
              <p className="text-2xl">0.2 km/h</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">UV Index</p>
              <p className="text-2xl">3</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">7-Day Forecast</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Today</p>
              <div className="flex items-center">
                <p className="text-xl">☀️</p>
                <p className="ml-4">36° / 22°</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Tue</p>
              <div className="flex items-center">
                <p className="text-xl">☀️</p>
                <p className="ml-4">37° / 23°</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Wed</p>
              <div className="flex items-center">
                <p className="text-xl">☀️</p>
                <p className="ml-4">37° / 21°</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Thu</p>
              <div className="flex items-center">
                <p className="text-xl">🌥️</p>
                <p className="ml-4">37° / 21°</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Fri</p>
              <div className="flex items-center">
                <p className="text-xl">🌥️</p>
                <p className="ml-4">36° / 22°</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Sat</p>
              <div className="flex items-center">
                <p className="text-xl">🌧️</p>
                <p className="ml-4">35° / 20°</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Sun</p>
              <div className="flex items-center">
                <p className="text-xl">⛈️</p>
                <p className="ml-4">39° / 21°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
