import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookCard } from "@/components/book-card"
import { FeaturedBook } from "@/components/featured-book"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage="home" />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-[#0a2a52] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to Ajou University Library
                </h1>
                <p className="text-xl opacity-90">We bring the best resources within your reach.</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input className="pl-9 bg-white text-black" placeholder="Search by title, author, or genre..." />
                  </div>
                  <Button className="bg-[#ffd700] hover:bg-[#e6c200] text-[#0a2a52] font-bold">Search</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <FeaturedBook
                  cover="/placeholder.svg?height=400&width=260"
                  title="Academic Excellence"
                  author="Ajou University Press"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-[#0a2a52]">New Arrivals</h2>
                <Link href="/catalog?filter=new">
                  <Button variant="link" className="text-[#0a2a52]">
                    View all
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <BookCard
                  cover="/placeholder.svg?height=300&width=200"
                  title="Advanced Engineering Mathematics"
                  author="Dr. Kim Sung-Ho"
                  genre="Academic"
                  available={true}
                />
                <BookCard
                  cover="/placeholder.svg?height=300&width=200"
                  title="Global Economics: Asian Perspective"
                  author="Prof. Lee Ji-Eun"
                  genre="Economics"
                  available={true}
                />
                <BookCard
                  cover="/placeholder.svg?height=300&width=200"
                  title="Modern Computer Science"
                  author="Dr. Park Min-Jun"
                  genre="Technology"
                  available={false}
                />
                <BookCard
                  cover="/placeholder.svg?height=300&width=200"
                  title="International Relations in Central Asia"
                  author="Prof. Alisher Karimov"
                  genre="Politics"
                  available={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-[#0a2a52]">Academic Resources</h2>
                <Link href="/catalog">
                  <Button variant="link" className="text-[#0a2a52]">
                    View all categories
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/catalog?genre=engineering">
                  <div className="group relative overflow-hidden rounded-lg bg-[#0a2a52] text-white h-40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-30" />
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold">Engineering</h3>
                      <p className="text-sm text-gray-200">245 resources</p>
                    </div>
                  </div>
                </Link>
                <Link href="/catalog?genre=business">
                  <div className="group relative overflow-hidden rounded-lg bg-[#0a2a52] text-white h-40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-30" />
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold">Business</h3>
                      <p className="text-sm text-gray-200">176 resources</p>
                    </div>
                  </div>
                </Link>
                <Link href="/catalog?genre=medicine">
                  <div className="group relative overflow-hidden rounded-lg bg-[#0a2a52] text-white h-40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-30" />
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold">Medicine</h3>
                      <p className="text-sm text-gray-200">143 resources</p>
                    </div>
                  </div>
                </Link>
                <Link href="/catalog?genre=computer-science">
                  <div className="group relative overflow-hidden rounded-lg bg-[#0a2a52] text-white h-40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-30" />
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold">Computer Science</h3>
                      <p className="text-sm text-gray-200">229 resources</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-[#0a2a52]">Library Hours & Location</h2>
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-semibold text-[#0a2a52]">Address</h3>
                    <p className="text-gray-600">
                      Ajou University in Tashkent, 100190, Tashkent, Mirzo Ulugbek district, Sayram 5th passage, 4
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2a52]">Hours</h3>
                    <ul className="text-gray-600">
                      <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                      <li>Saturday: 10:00 AM - 6:00 PM</li>
                      <li>Sunday: 12:00 PM - 5:00 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2a52]">Contact</h3>
                    <p className="text-gray-600">Phone: +998 71 208-69-69</p>
                    <p className="text-gray-600">Email: library@ajou.uz</p>
                  </div>
                </div>
                <Button className="bg-[#ffd700] hover:bg-[#e6c200] text-[#0a2a52] font-bold w-full sm:w-auto">
                  Get Directions
                </Button>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Library Map</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

