export default function Instructions() {
  return (
    // <section className="py-16 text-center bg-[#FFF8E1] text-gray rounded shadow-md">
    //   {/* Heading */}
    //   <h2 className="text-4xl text-center font-bold text-red-400 mb-14 font-pacifico">
    //     Instructions !
    //   </h2>

    //   {/* Images grid */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
    //     <img
    //       src="/say.jpg"
    //       alt="Instructions - What to say"
    //       className="rounded-3xl object-cover w-[350px]"
    //     />
    //     <img
    //       src="/dontsay.jpg"
    //       alt="Instructions - What not to say"
    //       className="rounded-3xl object-cover w-[340px]"
    //     />
    //   </div>
    // </section>


    <section className="py-16 bg-[#FFF8E1] text-gray rounded shadow-md" id="instructions">
      <div className="container mx-auto text-center">
        
        {/* Text above images */}
        <h3 className="text-xl md:text-3xl font-bold text-red-400 font-pacifico mb-4">
          Instructions
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          Please be careful of what you say and don’t.
        </p>

        {/* Images side by side */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
          <img
            src="/say.jpg"
            alt="Instructions - What to say"
            className="rounded-3xl object-cover w-[200px] md:w-[350px]"
          />
          <img
            src="/dontsay.jpg"
            alt="Instructions - What not to say"
            className="rounded-3xl object-cover w-[205px] md:w-[350px]"
          />
        </div>

      </div>
    </section>
  )
}
