// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Router App</h1>
        <p className="text-xl text-gray-600">Click a link to open a window:</p>
        
        <div className="space-y-4">
          <Link href="/index.js">
            <a className="text-lg text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
              Weather
            </a>
          </Link>

          <Link href="/task2.js">
            <a className="text-lg text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
              biydaalt
            </a>
          </Link>

          <Link href="/grid.js">
            <a className="text-lg text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
              Grid
            </a>
          </Link>

          <Link href="/seach.js">
            <a className="text-lg text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
              Search
            </a>
          </Link>

          <Link href="/task1.js">
            <a className="text-lg text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
              CV
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
