import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react"

export default function Contact() { 
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="text-xl md:text-3xl text-center font-semibold mb-10 font-pacifico">
          Visit Us
        </h2>

        <div className="contact-info">
          {/* Location */}
          <div className="contact-card">
            <h3 className="font-bold text-base md:text-xl">Location</h3>
            <div className="flex items-center gap-2 md:gap-4">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <a
                href="https://www.google.com/maps/place/30%C2%B005'29.6%22N+31%C2%B019'28.9%22E/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-base text-[#3E2723] hover:text-yellow-500 hover:underline transition-colors duration-200"
              >
                Baghdad St, Korba, Heliopolis
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="contact-card">
            <h3 className="font-bold text-base md:text-xl">Hours</h3>
            <div className="flex items-center gap-2 md:gap-4">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-xs md:text-base">
                Everyday: 5:00 PM - 8:00 PM
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-xs md:text-base">
                Waiting for you to join us
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="contact-card">
            <h3 className="font-bold text-base md:text-xl">Contact</h3>
            <div className="flex items-center gap-2 md:gap-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-xs md:text-base">(+2) 01000000000</span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-xs md:text-base">info@Socks-Coffee.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
