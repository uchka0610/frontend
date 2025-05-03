import { useState } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4">
      <div class="w-full bg-blue-600 text-white text-center py-4 text-lg font-semibold">
        Nest High School
      </div>
      <div class="text-center mt-8">
        <div class="text-3xl font-bold text-black">Welcome to Nest IT School</div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget odio sit amet odio iaculis accumsan vel ac lectus. Nulla varius at neque ac congue.
        </p>
        <button
  className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full"
  onClick={() => { setClickCount(clickCount + 1); setIsModalOpen(true); }}
>
  CLICK
</button>

{isModalOpen==true && 
  <div className="flex justify-center items-center bg-gray-700 ">
    <div className="bg-white p-8 rounded-lg max-w-sm w-full">
      <div className="text-black text-md font-semibold">LOREM IPSUM DOLOR SIT AMET</div>
      <button
        onClick={() => setIsModalOpen(false)}
        className="mt-4 text-red-600 font-bold"
      >
        CANCEL
      </button>
    </div>
  </div>
}

        <p class="mt-2 text-gray-700">Clicked {clickCount} times</p>
      </div>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] w-full">
  <div class="bg-white rounded-lg p-6">
    <div class="text-lg font-semibold text-black">Why Choose Us?</div>
    <div class="mt-2 text-gray-600">
      <div>- High Performance</div>
      <div>- Responsive Design</div>
      <div>- Easy to Use</div>
      <div>- Scalable Solutions</div>
      <div>- 24/7 Support</div>
    </div>
  </div>
  <div class="bg-white shadow-lg rounded-lg p-6">
    <div class="text-lg font-semibold text-black">Our Features</div>
    <div class="mt-2 text-gray-600">
      <div>- Fast and Lightweight</div>
      <div>- Mobile-First Approach</div>
      <div>- Customizable UI</div>
      <div>- Secure and Reliable</div>
      <div>- Global Reach</div>
    </div>
  </div>
  <div class="bg-white shadow-lg rounded-lg p-6">
    <div class="text-lg font-semibold text-black">Customer Reviews</div>
    <div class="mt-2 text-gray-600">
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mattis elit.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mattis elit.</div>
    </div>
  </div>
</div>
<footer class="w-full bg-black text-white text-center py-4 mt-8 ">NEST</footer>

    </div>
  );
}