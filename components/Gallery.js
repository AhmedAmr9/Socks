// "use client";

// import Image from "next/image";
// import { useRef } from "react";

// export default function ClientGallery({ files, id }) {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//       {files.map((file, idx) => {
//         const isVideo = file.endsWith(".mp4") || file.endsWith(".webm");
//         const filePath = `/posts/${id}/${file}`;

//         return (
//           <div
//             key={idx}
//             className="rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-black"
//           >
//             {isVideo ? (
//               <video
//                 src={filePath}
//                 controls
//                 className="w-full h-full object-contain"
//               />
//             ) : (
//               <FullscreenImage src={filePath} alt={`post-${idx}`} />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // ⬇️ Custom component to handle fullscreen properly
// function FullscreenImage({ src, alt }) {
//   const imgRef = useRef(null);

//   const handleFullscreen = () => {
//     if (!imgRef.current) return;
//     const el = imgRef.current;
//     if (el.requestFullscreen) el.requestFullscreen();
//     else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
//     else if (el.msRequestFullscreen) el.msRequestFullscreen();
//   };

//   return (
//     <div className="relative w-full h-64 cursor-pointer" onClick={handleFullscreen}>
//       <Image
//         ref={imgRef}
//         src={src}
//         alt={alt}
//         fill
//         sizes="(max-width: 768px) 100vw, 20vw"
//         className="object-contain"
//       />
//     </div>
//   );
  
// }


"use client";

import Image from "next/image";
import { useState } from "react";

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
                poster={`/posts/${id}/${file.replace(/\.(mp4|webm)$/, ".jpg")}`}
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

// ⬇️ Fullscreen modal for images
function FullscreenImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 20vw"
          className="object-contain"
        />
      </div>

      {/* Fullscreen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={800}
            height={800}
            className="object-contain max-h-full max-w-full"
          />
        </div>
      )}
    </>
  );
}
