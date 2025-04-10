import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

async function getBook(id: string) {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    console.error("Kitob ma'lumotlarini olishda xatolik:", error)
    return null
  }
}

export default async function BookPage({ params }: { params: { id: string } }) {
  const bookData = await getBook(params.id)

  if (!bookData) {
    notFound()
  }

  const book = {
    id: bookData.id,
    title: bookData.volumeInfo.title || "Nomsiz kitob",
    authors: bookData.volumeInfo.authors || ["Nomalum muallif"],
    description: bookData.volumeInfo.description || "Tavsif mavjud emas",
    coverImage: bookData.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg?height=300&width=200",
    publishedDate: bookData.volumeInfo.publishedDate || "Nomalum sana",
    pageCount: bookData.volumeInfo.pageCount || 0,
    categories: bookData.volumeInfo.categories || ["Toifa belgilanmagan"],
    publisher: bookData.volumeInfo.publisher || "Nomalum nashriyot",
    language: bookData.volumeInfo.language || "Nomalum",
    previewLink: bookData.volumeInfo.previewLink || null,
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-6">
        <Button variant="outline" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Orqaga
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative h-[400px] bg-gray-100 rounded-lg flex justify-center items-center">
          <Image
            src={book.coverImage || "/placeholder.svg"}
            alt={`${book.title} muqovasi`}
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-4">{book.authors.join(", ")}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-500">Nashr sanasi</h3>
              <p>{book.publishedDate}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Sahifalar soni</h3>
              <p>{book.pageCount}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Nashriyot</h3>
              <p>{book.publisher}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Til</h3>
              <p>{book.language}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-500 mb-2">Toifalar</h3>
            <div className="flex flex-wrap gap-2">
              {book.categories.map((category, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-500 mb-2">Tavsif</h3>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: book.description }} />
          </div>

          {book.previewLink && (
            <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
              <Button>Kitobni ko'rish</Button>
            </a>
          )}
        </div>
      </div>
    </main>
  )
}
