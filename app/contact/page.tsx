import Link from "next/link"
import { MapPin, Bus, Train, Phone, Mail, Globe } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage="contact" />

      <div className="relative bg-[#0a2a52] text-white py-16">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-2">Direction to AUT</h1>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-white hover:text-[#ffd700]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ffd700]">Contact</span>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px] bg-gray-200 relative">
              {/* This would be replaced with an actual map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#0a2a52] mb-8">Ajou University in Tashkent</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a2a52] flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2">
                      113 and 113A, Asalabad street, Yashnabad district, 100204, Tashkent city, Republic of Uzbekistan.
                    </p>
                    <p className="text-gray-700">
                      Directions to Ajou University in Tashkent with public transportation. The following public
                      transports pass near University.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a2a52] flex items-center justify-center">
                    <Bus className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Bus No. 10, 15, 22, 28, 106 (former Yashnabod Construction college).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a2a52] flex items-center justify-center">
                    <Train className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Metro stations Do`stlik (Uzbekistan line) and Tuzal station (Circle line).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a2a52] flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-700">+998 71 208-69-69</p>
                    <p className="text-gray-700">+998 71 207-65-25</p>
                    <p className="text-gray-700">+998 71 207-65-27</p>
                    <p className="text-gray-700">+998 71 207-65-66</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a2a52] flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      <a href="mailto:info@ajou.uz" className="text-[#0a2a52] hover:text-[#ffd700]">
                        info@ajou.uz
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a href="mailto:aut@ajou.uz" className="text-[#0a2a52] hover:text-[#ffd700]">
                        aut@ajou.uz
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a2a52] flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <a
                        href="https://www.ajou.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0a2a52] hover:text-[#ffd700]"
                      >
                        www.ajou.uz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#0a2a52] mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2a52]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2a52]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2a52]"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2a52]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#ffd700] hover:bg-[#e6c200] text-[#0a2a52] font-bold rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#0a2a52] mb-4">Library Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0a2a52] mt-8 mb-4">Library Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ffd700] rounded-full"></div>
                  <span>Book borrowing and returns</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ffd700] rounded-full"></div>
                  <span>Research assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ffd700] rounded-full"></div>
                  <span>Digital resources access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ffd700] rounded-full"></div>
                  <span>Study spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#ffd700] rounded-full"></div>
                  <span>Printing and scanning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

