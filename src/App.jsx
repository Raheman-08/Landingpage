import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="col-span-1 space-y-4">
          <h1 className="text-5xl font-serif font-bold leading-tight">
            Adventure <br /> Voyage <br /> Wandering
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Get started
          </button>
          <div className="flex flex-row items-center gap-2 mt-10">
            <img src="/image1.png" alt="" className="h-50 w-20" />
            <img src="/image2.png" alt="" className="h-50 w-20" />
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <div className="relative">
            {/* Add an SVG to create the curved path */}
            <svg
              width="300"
              height="150"
              viewBox="0 0 300 150"
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="curve"
                d="M 50,100 A 100,100 0 0,1 250,100"
                fill="transparent"
              />
              <text
                fill="black"
                fontSize="16"
                fontFamily="serif"
                textAnchor="middle"
              >
                <textPath href="#curve" startOffset="50%">
                  Plant • Tree • Nature
                </textPath>
              </text>
            </svg>

            {/* Main Image Section */}
            <img src="/image3.png" alt="Main Plant" className="h-80 mt-6" />
            <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-2xl">
              ✦
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6 text-2xl">
              ✦
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <div className="flex gap-4">
            <img src="/image4.png" alt="" className="h-50 w-20" />
            <img src="/image5.png" alt="" className="h-50 w-20" />
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
