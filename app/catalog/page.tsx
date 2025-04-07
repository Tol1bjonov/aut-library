import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookCard } from "@/components/book-card"
import { Pagination } from "@/components/pagination"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage="catalog" />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0a2a52]">Book Catalog</h1>
              <p className="text-gray-600">Browse our collection of academic resources</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input className="pl-9 border-gray-300" placeholder="Search by title, author, or ISBN..." />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px] border-gray-300">
                      <SelectValue placeholder="Genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Genres</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="economics">Economics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px] border-gray-300">
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Books</SelectItem>
                      <SelectItem value="available">Available Now</SelectItem>
                      <SelectItem value="unavailable">Currently Checked Out</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-[#ffd700] hover:bg-[#e6c200] text-[#0a2a52] font-bold">Apply Filters</Button>
              </div>
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
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Principles of Biomedical Engineering"
                author="Dr. Sarah Johnson"
                genre="Engineering"
                available={true}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Quantum Computing Fundamentals"
                author="Prof. Alan Zhang"
                genre="Computer Science"
                available={false}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Sustainable Urban Development"
                author="Dr. Elizabeth Taylor"
                genre="Architecture"
                available={true}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Financial Management in Healthcare"
                author="Prof. Julia Martinez"
                genre="Business"
                available={true}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Artificial Intelligence Ethics"
                author="Dr. David Kim"
                genre="Technology"
                available={false}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Renewable Energy Systems"
                author="Prof. Hannah Wilson"
                genre="Engineering"
                available={true}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="International Business Law"
                author="Dr. James Peterson"
                genre="Law"
                available={true}
              />
              <BookCard
                cover="/placeholder.svg?height=300&width=200"
                title="Data Science for Social Good"
                author="Prof. Olivia Brown"
                genre="Computer Science"
                available={true}
              />
            </div>
            <Pagination totalPages={10} currentPage={1} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

