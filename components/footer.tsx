import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a2a52] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/ajou-logo.png" alt="Ajou University Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-lg font-bold">Ajou University Library</span>
            </div>
            <p className="text-sm opacity-80">
              Ajou University Library provides access to a wide range of academic resources to support
              learning, teaching, and research.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ffd700]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ffd700]">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ffd700]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ffd700]">
                  E-Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-[#ffd700]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <address className="not-italic space-y-2">
        <p className="text-sm opacity-80 flex items-center gap-2">
          <Home className="text-yellow-400 w-7 h-7" />
          113 and 113A, Asalabad street, Yashnabad district, 100204, Tashkent city, Republic of Uzbekistan.
        </p>
        <p className="text-sm opacity-80 flex items-center gap-2">
          <Phone className="text-yellow-400 w-5 h-5" />
          +998 71 208-69-69
        </p>
        <p className="text-sm opacity-80 flex items-center gap-2">
          <Mail className="text-yellow-400 w-5 h-5" />
          library@ajou.uz
        </p>
      </address>
    </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© {new Date().getFullYear() } Ajou University in Tashkent. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}

