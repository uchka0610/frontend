import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState(false);

  const data = [
    {
      id: 1,
      Header: "Test 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      Header: "Test 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      Header: "Test 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      Header: "Test 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Нийтлэлүүд</h1>

      {/* Button to toggle layout */}
      <div className="text-center mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "Row View руу шилжих" : "Grid View руу шилжих"}
        </button>
      </div>

      {/* Layout rendering */}
      <div
        className={`${
          grid ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{item.Header}</h2>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}