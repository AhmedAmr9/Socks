// "use client";

// export default function ClientGallery({ files, id }) {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//       {files.map((file, idx) => {
//         const isVideo = file.endsWith(".mp4") || file.endsWith(".webm");
//         const filePath = `/posts/${id}/${file}`;

//         return (
//           <div key={idx} className="rounded-lg overflow-hidden shadow-md">
//             {isVideo ? (
//               <video
//                 src={filePath}
//                 controls
//                 className="w-full h-full object-contain"
//               />
//             ) : (
//               <img
//                 src={filePath}
//                 alt={`post-${idx}`}
//                 className="cursor-pointer object-contain w-full h-full"
//                 onClick={(e) => {
//                   const img = e.target;
//                   if (img.requestFullscreen) {
//                     img.requestFullscreen();
//                   } else if (img.webkitRequestFullscreen) {
//                     img.webkitRequestFullscreen();
//                   } else if (img.msRequestFullscreen) {
//                     img.msRequestFullscreen();
//                   }
//                 }}
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }


"use client";

import Image from "next/image";

export default function ClientGallery({ files, id }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {files.map((file, idx) => {
        const isVideo = file.endsWith(".mp4") || file.endsWith(".webm");
        const filePath = `/posts/${id}/${file}`;

        return (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md">
            {isVideo ? (
              <video
                src={filePath}
                controls
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={filePath}
                alt={`post-${idx}`}
                width={500} // حط قيمة مناسبة أو dynamic
                height={500}
                className="cursor-pointer object-contain w-full h-full"
                onClick={(e) => {
                  const img = e.target;
                  if (img.requestFullscreen) {
                    img.requestFullscreen();
                  } else if (img.webkitRequestFullscreen) {
                    img.webkitRequestFullscreen();
                  } else if (img.msRequestFullscreen) {
                    img.msRequestFullscreen();
                  }
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
