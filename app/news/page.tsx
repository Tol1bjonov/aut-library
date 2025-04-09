"use client";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Digital Resources Available",
      date: "April 10, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Digital Resources",
      excerpt: "The library has added new digital resources to support research in science and technology...",
    },
    {
      id: 2,
      title: "Extended Library Hours During Finals",
      date: "April 5, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Extended Hours",
      excerpt: "The library will extend its opening hours during the final examination period to support students...",
    },
    {
      id: 3,
      title: "Research Workshop Series Announced",
      date: "March 28, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Workshops",
      excerpt: "Join our upcoming workshop series on advanced research methodologies and academic writing...",
    },
    {
      id: 4,
      title: "New Study Spaces Now Open",
      date: "March 20, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Study Spaces",
      excerpt: "We've opened new collaborative study spaces on the third floor with modern amenities...",
    },
    {
      id: 5,
      title: "Library App Launch",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Library App",
      excerpt: "Download our new mobile app to access library resources, reserve study rooms, and more...",
    },
    {
      id: 6,
      title: "Book Donation Drive Success",
      date: "March 5, 2025",
      image: "/placeholder.svg?height=300&width=500&text=Book Donation",
      excerpt: "Thanks to generous donations, we've added over 500 new books to our collection...",
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage="news" />

      <div className="relative h-[300px] bg-[#0a3161]">
        <Image src="/ajou-news.png" alt="Services" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">News</h1>
          <div className="flex text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>News</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="h-10 w-10 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              </svg>
              <span className="sr-only">Grid view</span>
            </Button>
            <Button variant="outline" className="h-10 w-10 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3" y1="6" y2="6" />
                <line x1="3" x2="3" y1="12" y2="12" />
                <line x1="3" x2="3" y1="18" y2="18" />
              </svg>
              <span className="sr-only">List view</span>
            </Button>
            <span className="text-gray-500">
              Showing {newsItems.length} of {newsItems.length} Results
            </span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input type="search" placeholder="Search news..." className="pl-10 w-full md:w-[300px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <Button variant="outline" className="h-10 w-10 p-0" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="sr-only">Previous page</span>
          </Button>
          <Button variant="outline" className="h-10 w-10 p-0 bg-[#0a3161] text-white">
            1
          </Button>
          <Button variant="outline" className="h-10 w-10 p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>


      <Footer />
    </div>
  )
}

