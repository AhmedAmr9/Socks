"use client";
export default function VideoPlayer({src}){
    return(<div className='w-full aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-lg'>
    {/* <video src={src} controls className='w-full h-full object-cover'/> */}

<video
  ref={videoRef}
  src={slides[currentSlide].src}
  autoPlay
  muted
  playsInline
  className="w-full h-full object-cover"
/>
    </div>);}