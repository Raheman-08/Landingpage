import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="col-span-1 space-y-4">
          <div className="flex flex-row items-center gap-24">
          <h1 className="text-5xl font-serif font-bold leading-tight">
            Adventure <br /> Voyage <br /> Wandering
          </h1>

          {/* Decorative Elements */}
    <div className=" transform text-7xl">
      ✦
    </div>
    </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            Get started
          </button>
          <div className="flex flex-row items-center gap-2 mt-10">
            <div className="mt-20">
              <img src="/image1.png" alt="" className="h-50 w-20" />
            </div>
            <div>
              <img src="/image2.png" alt="" className="h-50 w-20" />
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center">
  <div className="relative">
    {/* SVG with Curved Text */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 250"
      className="absolute top-0"
    >
      {/* Define the curve */}
      <path
        id="curve"
          d="M 50,150 A 200,100 0 0,1 450,150"
        fill="none"
      />
      {/* Curved Text */}
      <text
        fontSize="50"
        fontFamily="serif"
        fill="black"
      >
        <textPath href="#curve" textAnchor="middle" startOffset="50%">
          Plant • Tree • Nature
        </textPath>
      </text>
    </svg>

    {/* Main Image */}
    <img
      src="/image3.png"
      alt="Main Plant"
      className="h-80 mt-10 object-cover"
    />
  </div>
</div>


        <div className="col-span-1 space-y-4">
          <div className="flex gap-4 items-end">
            <div className="flex flex-col items-center justify-center gap-4">
              <div>
                <img src="/image4.png" alt="Image 4" className="h-50 w-20 object-contain" />
              </div>
              <div>
                <img src="/star.jpeg" alt="Star" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <div>
              <img src="/image5.png" alt="" className="h-50 w-20" />
            </div>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi.
          </p>
          <h3 className="text-4xl font-serif font-bold leading-[3rem]">
            Travel <br /> Explore <br /> Discover
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
