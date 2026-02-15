"use client";

import { Search } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/images/banner.png)' }}
    >
      {/* Content */}
      <div className="relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8">
        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl lg:leading-tight leading-snug font-bold">
          Make Your Interior More Minimalistic & Modern
        </h1>

        {/* Description */}
        <p className="text-xl lg:w-11/12 mx-auto font-normal">
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>

        {/* Search Bar */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
          />
          <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer hover:bg-primary-dark transition-colors">
            <Search className="text-white w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 -mb-2 bottom-0 h-3/4 bg-linear-to-t from-white via-transparent to-transparent blur-sm"></div>

      {/* Color Picker Tooltips - Hidden on mobile/tablet */}
      <div className="hidden xl:block absolute bottom-40 left-24">
        <ColorTooltip colors={['#E58411', '#00D6C9', '#7C7C7C']} checkedIndex={2} />
      </div>
      <div className="hidden xl:block absolute bottom-52 left-96">
        <ColorTooltip colors={['#E58411', '#00D6C9', '#7C7C7C']} checkedIndex={0} />
      </div>
      <div className="hidden xl:block absolute bottom-24 right-205">
        <ColorTooltip colors={['#E58411', '#00D6C9', '#7C7C7C']} checkedIndex={1} />
      </div>
    </section>
  );
}

// Color Tooltip Component
function ColorTooltip({ colors, checkedIndex }: { colors: string[]; checkedIndex: number }) {
  return (
    <div className="flex gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
      {colors.map((color, index) => (
        <div
          key={color}
          className={`w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110 ${
            index === checkedIndex ? 'ring-2 ring-white ring-offset-2' : ''
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
