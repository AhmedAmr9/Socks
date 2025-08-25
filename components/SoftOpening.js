// export default function SoftOpening() { 
//         return (   
        
//       <section className="py-16 text-center bg-[#FFF8E1] text-gray rounded shadow-md">
//       {/* Heading with image beside */}
//       <div className="flex items-center justify-center gap-4 mb-20">
//         <h2 className="text-3xl font-semibold text-yellow-400 font-pacifico">
//           Soft Opening Now
//         </h2>
//         <img
//           src="/Congratulations.png"
//           alt="Congratulations"
//           className="h-12 md:h-16 object-contain"
//         />
//       </div>
      
//       {/* Images grid */}
//           {/* Images side by side */}
//           <div className="md:w-3/2 flex gap-40 justify-center">
//             <img
//               src="/Soft-Opening2.png"
//               alt="Instructions - What to say"
//               className="rounded-3xl object-cover w-[350px]"
//             />
//             <img
//               src="/Soft_Opening.png"
//               alt="Instructions - What not to say"
//               className="rounded-3xl object-cover w-[350px]"
//             />
//           </div>
      
    
//     {/* <p>Join us for our launch!</p> */}

//     </section>); }

//           {/* Images side by side */}
//           <div className="md:w-2/3 flex gap-4 justify-center">
//             <img
//               src="/say.jpg"
//               alt="Instructions - What to say"
//               className="rounded-3xl object-cover w-[350px]"
//             />
//             <img
//               src="/dontsay.jpg"
//               alt="Instructions - What not to say"
//               className="rounded-3xl object-cover w-[350px]"
//             />
//           </div>


export default function SoftOpening() {
  return (
    <section className="py-16 text-center bg-[#FFF8E1] text-gray rounded shadow-md">
      {/* Heading with image beside */}
      <div className="flex flex-row md:flex-row items-center justify-center gap-4 mb-20">
        <h2 className="text-xl md:text-3xl font-semibold text-yellow-400 font-pacifico">
          Soft Opening Now
        </h2>
        <img
          src="/Congratulations.png"
          alt="Congratulations"
          className="h-8 md:h-16 object-contain"
        />
      </div>

      {/* Images */}
<div className="flex flex-col md:flex-row gap-20 justify-center items-center mb-12">
  {/* Soft_Opening (first on mobile, second/right on desktop) */}
  <img
    src="/Soft_Opening.png"
    alt="Instructions - What not to say"
    className="rounded-3xl object-cover w-[225px] md:w-[350px] order-1 md:order-2"
  />

  {/* Soft-Opening2 (second on mobile, first/left on desktop) */}
  <img
    src="/Soft-Opening2.png"
    alt="Instructions - What to say"
    className="rounded-3xl object-cover w-[200px] md:w-[350px] order-2 md:order-1"
  />
</div>
   </section>
  )
}


