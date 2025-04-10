"use client"

import { useEffect, useState } from "react"
import type { Book } from "@/types/book"
import { BookCard } from "./book-card"
import { useSearchParams } from "next/navigation"

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true)
        setError(null)

        // API URL - Google Books API as an example
        const apiUrl = query
          ? `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20`
          : "https://www.googleapis.com/books/v1/volumes?q=programming&maxResults=20"

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error("Kitoblarni yuklashda xatolik yuz berdi")
        }

        const data = await response.json()

        // Transform the API response to our Book type
        const transformedBooks: Book[] =
          data.items?.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title || "Nomsiz kitob",
            authors: item.volumeInfo.authors || ["Nomalum muallif"],
            description: item.volumeInfo.description || "Tavsif mavjud emas",
            coverImage: item.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg?height=200&width=150",
            publishedDate: item.volumeInfo.publishedDate || "Nomalum sana",
            pageCount: item.volumeInfo.pageCount || 0,
            categories: item.volumeInfo.categories || ["Toifa belgilanmagan"],
          })) || []

        setBooks(transformedBooks)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Nomalum xatolik yuz berdi")
        console.error("Kitoblarni yuklashda xatolik:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [query])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
        <strong className="font-bold">Xatolik! </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    )
  }

  if (books.length === 0) {
    return (
      <div className="text-center my-12">
        <h3 className="text-xl font-medium">Kitoblar topilmadi</h3>
        <p className="text-gray-600 mt-2">Boshqa so'rov bilan izlashni sinab ko'ring</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
