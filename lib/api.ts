import type { ApiBook, Book } from "@/types/book"

const API_BASE_URL = "https://5654-188-113-249-177.ngrok-free.app"

export async function getBooks(): Promise<Book[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/books/`)

    if (!response.ok) {
      throw new Error("API response was not ok")
    }

    const data: ApiBook[] = await response.json()

    // Transform API data to our Book format
    return data.map((apiBook) => transformApiBook(apiBook))
  } catch (error) {
    console.error("Failed to fetch books:", error)
    throw error
  }
}

export async function getBookById(id: string | number): Promise<Book | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/books/`)

    if (!response.ok) {
      throw new Error("API response was not ok")
    }

    const data: ApiBook[] = await response.json()
    const book = data.find((book) => book.id === Number(id))

    if (!book) {
      return null
    }

    return transformApiBook(book)
  } catch (error) {
    console.error(`Failed to fetch book with id ${id}:`, error)
    throw error
  }
}

export async function searchBooks(query: string): Promise<Book[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/books/`)

    if (!response.ok) {
      throw new Error("API response was not ok")
    }

    const data: ApiBook[] = await response.json()

    // Filter books by query (case insensitive)
    const filteredBooks = data.filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))

    return filteredBooks.map((apiBook) => transformApiBook(apiBook))
  } catch (error) {
    console.error("Failed to search books:", error)
    throw error
  }
}

// Helper function to transform API book to our Book format
function transformApiBook(apiBook: ApiBook): Book {
  // Extract author from filename if possible
  let author = "Unknown"
  const authorMatch = apiBook.name.match(/[-–—]\s*([^.]+)/)
  if (authorMatch && authorMatch[1]) {
    author = authorMatch[1].trim()
  }

  // Extract genre based on filename keywords
  let genre = "Academic"
  if (
    apiBook.name.toLowerCase().includes("c") ||
    apiBook.name.toLowerCase().includes("programming") ||
    apiBook.name.toLowerCase().includes("socket") ||
    apiBook.name.toLowerCase().includes("linux")
  ) {
    genre = "Computer Science"
  } else if (apiBook.name.toLowerCase().includes("embedded") || apiBook.name.toLowerCase().includes("systems")) {
    genre = "Engineering"
  } else if (apiBook.name.toLowerCase().includes("api") || apiBook.name.toLowerCase().includes("rest")) {
    genre = "Web Development"
  }

  // Clean up title by removing file extension and potential author
  let title = apiBook.name.replace(/\.pdf$/, "")
  if (authorMatch) {
    title = title.replace(/[-–—]\s*([^.]+)/, "").trim()
  }

  return {
    id: apiBook.id,
    title: title,
    author: author,
    genre: genre,
    cover: `/placeholder.svg?height=300&width=200&text=${encodeURIComponent(title)}`,
    available: true,
    pdf: apiBook.pdf,
  }
}
