import Image from "next/image";

export default function SoftOpening() {
  return (
    <section className="py-16 text-center bg-[#FFF8E1] text-gray rounded shadow-md">
      {/* Heading with image beside */}
      <div className="flex flex-row md:flex-row items-center justify-center gap-4 mb-20">
        <h2 className="text-xl md:text-3xl font-semibold text-yellow-400 font-pacifico">
          Soft Opening Now
        </h2>
        <Image
          src="/Congratulations.png"
          alt="Congratulations"
          width={40}   // required
          height={40}  // required
          className="h-8 md:h-16 object-contain"
        />
      </div>

      {/* Images */}
      <div className="flex flex-col md:flex-row gap-20 justify-center items-center mb-12">
        {/* Soft_Opening (first on mobile, second/right on desktop) */}
        <Image
          src="/Soft_Opening.png"
          alt="Soft Opening Poster"
          width={350}
          height={350}
          className="rounded-3xl object-cover w-[225px] md:w-[350px] order-1 md:order-2"
        />

        {/* Soft-Opening2 (second on mobile, first/left on desktop) */}
        <Image
          src="/Soft-Opening2.png"
          alt="Soft Opening Event"
          width={350}
          height={350}
          className="rounded-3xl object-cover w-[200px] md:w-[350px] order-2 md:order-1"
        />
      </div>
    </section>
  );
}
