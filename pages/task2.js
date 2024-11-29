import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState(false);

  const data = [
    {
      id: 1,
      garchig: "Test 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      garchig: "Test 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      garchig: "Test 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      garchig: "Test 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center mb-6">Нийтлэлүүд</h1>
      <div class="text-center mb-6">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "Row View руу шилжих" : "Grid View руу шилжих"}
        </button>
      </div>
      <div
        class={`${
          grid ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            class="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 class="text-lg font-semibold mb-2">{item.garchig}</h2>
            <p class="text-gray-600">{item.text}</p>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}