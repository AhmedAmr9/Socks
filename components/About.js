import { Heart } from "lucide-react"
import Image from "next/image";

export default function About() { 
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title text-sm md:text-3xl font-semibold text-[#5D4037] font-pacifico">
          Our Story
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm md:text-2xl text-[#5D4037] font-pacifico">
                Different Hands .. Same Love
              </p>
              <div className="flex items-center gap-1 mb-0 md:mb-0">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"/>
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"/>
              </div>
            </div>

            <p>- Every one of us has a story — and every story has a beginning.</p>
            <br />
            <p>- Ours began with something as simple as a coffee bean, yet it carried within it a world of warmth and hope.</p>
            <br />
            <p>- In a fast-paced world where everyone is always rushing, we dreamed of creating a space where time could pause — even if just for a moment.</p>
            <br />
            <p>- A place where coffee isn&apos;t just consumed, it&apos;s experienced.</p>
            <br />
            <p>- A place where you&apos;re not just served by anyone, but by real heroes who share a smile with every cup.</p>
            <br />
            <p>- Here at Socks, every cup of coffee is brewed with passion and served by hands filled with love, strength, and determination.</p>
          </div>

          <div className="about-image">
            <Image
              src="/About.jpg"
              alt="Interior of Coffee Crust showing cozy seating area with wooden tables, exposed brick walls, and barista preparing coffee"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  ); 
}