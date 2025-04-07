import Link from "next/link"
import { BookOpen, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function BookPage({ params }: { params: { id: string } }) {
  // This would normally fetch book data based on the ID
  const book = {
    id: params.id,
    title: "The Silent Echo",
    author: "Michael Rivers",
    cover: "/placeholder.svg?height=600&width=400",
    genre: "Mystery",
    published: "2022",
    pages: 342,
    isbn: "978-1234567890",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    available: true,
    copies: 3,
    reviews: [
      {
        user: "Jane Doe",
        rating: 4,
        comment: "A thrilling mystery that kept me guessing until the end.",
      },
      {
        user: "John Smith",
        rating: 5,
        comment: "One of the best books I've read this year. Highly recommended!",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <BookOpen className="h-6 w-6" />
            <span>City Library</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/catalog" className="text-muted-foreground hover:text-foreground">
              Catalog
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/account">
              <Button variant="ghost" size="sm">
                My Account
              </Button>
            </Link>
            <Link href="/checkout">
              <Button variant="outline" size="sm" className="gap-2">
                <Clock className="h-4 w-4" />
                <span>Checkouts (3)</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 lg:w-1/4">
                <div className="aspect-[2/3] overflow-hidden rounded-lg">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={`Cover of ${book.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{book.title}</h1>
                  <p className="text-xl text-muted-foreground">by {book.author}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{book.genre}</Badge>
                  {book.available ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Available ({book.copies} copies)
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Checked Out
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Published: {book.published}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>Pages: {book.pages}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <span className="text-muted-foreground">ISBN: {book.isbn}</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-muted-foreground">{book.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {book.available ? (
                    <Button className="sm:w-auto" size="lg">
                      Check Out Book
                    </Button>
                  ) : (
                    <Button className="sm:w-auto" size="lg" variant="outline">
                      Join Waitlist
                    </Button>
                  )}
                  <Button variant="outline" size="lg">
                    Add to Reading List
                  </Button>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-6">
                {book.reviews.map((review, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{review.user}</span>
                      <div className="ml-auto flex items-center">
                        <span className="text-sm font-medium">{review.rating}/5</span>
                        <div className="ml-1 flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 15.585l-7.07 3.707 1.35-7.857L.587 7.11l7.89-1.146L10 0l2.523 5.964 7.89 1.146-5.693 5.325 1.35 7.857z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Write a Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-lg font-bold">
            <BookOpen className="h-5 w-5" />
            <span>City Library</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2023 City Library. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

