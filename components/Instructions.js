"use client";

import Image from "next/image";

export default function Instructions() {
  return (
    <section
      className="py-16 bg-[#FFF8E1] text-gray rounded shadow-md"
      id="instructions"
    >
      <div className="container mx-auto text-center">
        {/* Text above images */}
        <h3 className="text-xl md:text-3xl font-bold text-red-400 font-pacifico mb-4">
          Instructions
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          Please be careful of what you say and don&apos;t.
        </p>

        {/* Images side by side */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
          <div className="relative w-[200px] md:w-[350px] h-[350px] md:h-[570px]">
            <Image
              src="/say.jpg"
              alt="Instructions - What to say"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative w-[205px] md:w-[350px] h-[350px] md:h-[570px]">
            <Image
              src="/dontsay.jpg"
              alt="Instructions - What not to say"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
