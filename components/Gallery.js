"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ClientGallery({ files, id }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {files.map((file, idx) => {
        const isVideo = file.toLowerCase().endsWith(".mp4") || file.toLowerCase().endsWith(".webm");
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
  const containerRef = useRef(null);

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-pointer" // 4:3 aspect ratio
      onClick={handleFullscreen}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 20vw"
        className="object-contain"
        priority
      />
    </div>
  );
}
