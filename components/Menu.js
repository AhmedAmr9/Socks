
// export default function Menu() {
//   const menuItems = [
//     {
//       name: "MOCHA FRAPPE",
//       description: "Smooth coffee and chocolate frappe topped with whipped cream.",
//       img: "/Menu/Menu-Item1.jpg",
//     },
//     {
//       name: "ICED HIBISCUS",
//       description: "Chilled hibiscus infusion with a tart, fruity twist — refreshingly vibrant.",
//       img: "/Menu/Menu-Item2.png",
//     },
//     {
//       name: "ICED SPANISH LATTE",
//       description: "Smooth espresso mixed with sweetened condensed milk.",
//       img: "/Menu/Menu-Item3.png",
//     },
//     {
//       name: "SALTED CARAMEL FRAPPE",
//       description: "Rich espresso blended with caramel and a hint of sea salt, topped with whipped cream.",
//       img: "/Menu/Menu-Item5.png",
//     },
//     {
//       name: "ICED MATCHA",
//       description: "Premium green tea powder whisked into creamy milk.",
//       img: "/Menu/Menu-Item6.png",
//     },
//     {
//       name: "LATTE ART SPECIAL",
//       description: "Velvety smooth latte with your choice of design.",
//       img: "/Menu/Menu-Item4.png",
//     },
//     {
//       name: "CHOCOLATE CROISSANT",
//       description: "Freshly baked daily, chocolatey, and irresistibly delicious.",
//       img: "/Menu/Menu-Item7.jpeg",
//     },
//     {
//       name: "CHEESE CAKE",
//       description: "Creamy, dreamy, and utterly irresistible with a buttery crust.",
//       img: "/Menu/Menu-Item8.jpeg",
//     },
//     {
//       name: "CARROT CAKE",
//       description: "Moist, spiced, and topped with creamy frosting and crunchy pecans.",
//       img: "/Menu/Menu-Item9.jpeg",
//     },
//   ];

//   return (
//     <section className="p-8 md:p-16 bg-white" id="menu">
//       <h2 className="text-2xl md:text-3xl font-pacifico font-semibold text-yellow-400 text-center mb-8 md:mb-12">
//         Soft Opening Menu
//       </h2>

//       <div className="flex flex-col items-center gap-10 md:gap-20 relative">
//         {/* Main menu image on top */}
//         <div className="w-full flex justify-center">
//           <img
//             src="/menu.jpg"
//             alt="Menu"
//             className="rounded-2xl md:rounded-3xl object-cover w-full max-w-md md:max-w-lg shadow-lg"
//           />
//         </div>

//         {/* Menu Items */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:w-full max-w-6xl">
//           {menuItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-yellow-50 rounded-xl overflow-hidden shadow-md hover:translate-y-[-5px] transition-transform flex flex-col"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-24 md:h-48 object-cover"
//               />
//               <div className="p-1 md:p-4 flex flex-col flex-1">
//                 <h3 className="text-xs md:text-xl font-semibold text-yellow-500 mb-1 md:mb-2 text-center">
//                   {item.name}
//                 </h3>
//                 <p className="text-[10px] md:text-base text-gray-700 text-left">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Menu() {
  const menuItems = [
    {
      name: "MOCHA FRAPPE",
      description:
        "Smooth coffee and chocolate frappe topped with whipped cream.",
      img: "/Menu/Menu-Item1.jpg",
    },
    {
      name: "ICED HIBISCUS",
      description:
        "Chilled hibiscus infusion with a tart, fruity twist — refreshingly vibrant.",
      img: "/Menu/Menu-Item2.png",
    },
    {
      name: "ICED SPANISH LATTE",
      description: "Smooth espresso mixed with sweetened condensed milk.",
      img: "/Menu/Menu-Item3.png",
    },
    {
      name: "SALTED CARAMEL FRAPPE",
      description:
        "Rich espresso blended with caramel and a hint of sea salt, topped with whipped cream.",
      img: "/Menu/Menu-Item5.png",
    },
    {
      name: "ICED MATCHA",
      description: "Premium green tea powder whisked into creamy milk.",
      img: "/Menu/Menu-Item6.png",
    },
    {
      name: "LATTE ART SPECIAL",
      description: "Velvety smooth latte with your choice of design.",
      img: "/Menu/Menu-Item4.png",
    },
    {
      name: "CHOCOLATE CROISSANT",
      description: "Freshly baked daily, chocolatey, and irresistibly delicious.",
      img: "/Menu/Menu-Item7.jpeg",
    },
    {
      name: "CHEESE CAKE",
      description:
        "Creamy, dreamy, and utterly irresistible with a buttery crust.",
      img: "/Menu/Menu-Item8.jpeg",
    },
    {
      name: "CARROT CAKE",
      description:
        "Moist, spiced, and topped with creamy frosting and crunchy pecans.",
      img: "/Menu/Menu-Item9.jpeg",
    },
  ];

  return (
    <section className="p-8 md:p-16 bg-white" id="menu">
      <h2 className="text-2xl md:text-3xl font-pacifico font-semibold text-yellow-400 text-center mb-8 md:mb-12">
        Soft Opening Menu
      </h2>

      <div className="flex flex-col items-center gap-10 md:gap-20 relative">
        {/* Main menu image on top */}
        <div className="w-full flex justify-center">
          <Image
            src="/Menu.jpg"
            alt="Menu"
            width={600}   // required
            height={400}  // required
            className="rounded-2xl md:rounded-3xl object-cover w-full max-w-md md:max-w-lg shadow-lg"
          />
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:w-full max-w-6xl">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 rounded-xl overflow-hidden shadow-md hover:translate-y-[-5px] transition-transform flex flex-col"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={300}   // approximate
                height={200}  // approximate
                className="w-full h-24 md:h-48 object-cover"
              />
              <div className="p-1 md:p-4 flex flex-col flex-1">
                <h3 className="text-xs md:text-xl font-semibold text-yellow-500 mb-1 md:mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-[10px] md:text-base text-gray-700 text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
