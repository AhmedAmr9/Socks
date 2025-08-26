// "use client";

// import Image from "next/image";

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
//               <Image
//                 src={filePath}
//                 alt={`post-${idx}`}
//                 width={500} // حط قيمة مناسبة أو dynamic
//                 height={500}
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
import { useRef } from "react";

export default function ClientGallery({ files, id }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {files.map((file, idx) => {
        const isVideo = file.endsWith(".mp4") || file.endsWith(".webm");
        const filePath = `/posts/${id}/${file}`;

        return (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-black"
          >
            {isVideo ? (
              <video
                src={filePath}
                controls
                className="w-full h-full object-contain"
              />
            ) : (
              <FullscreenImage src={filePath} alt={`post-${idx}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ⬇️ Custom component to handle fullscreen properly
function FullscreenImage({ src, alt }) {
  const imgRef = useRef(null);

  const handleFullscreen = () => {
    if (!imgRef.current) return;
    const el = imgRef.current;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  return (
    <div className="relative w-full h-64 cursor-pointer" onClick={handleFullscreen}>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 20vw"
        className="object-contain"
      />
    </div>
  );
  
}
