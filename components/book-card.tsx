import Link from "next/link"
import { BookOpen } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BookCardProps {
  cover: string
  title: string
  author: string
  genre: string
  available: boolean
}

export function BookCard({ cover, title, author, genre, available }: BookCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="aspect-[2/3] relative">
        <img src={cover || "/placeholder.svg"} alt={`Cover of ${title}`} className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2">
          {available ? (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">Available</Badge>
          ) : (
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-0">Checked Out</Badge>
          )}
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <Link href={`/book/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>
          <h3 className="font-semibold text-lg line-clamp-1 hover:text-[#0a2a52]">{title}</h3>
        </Link>
        <p className="text-sm text-gray-600">{author}</p>
      </CardHeader>
      <CardContent className="p-4 pt-2 pb-0">
        <Badge variant="outline" className="text-[#0a2a52] border-[#0a2a52]">
          {genre}
        </Badge>
      </CardContent>
      <CardFooter className="p-4">
        <Button
          className={
            available
              ? "w-full gap-1 bg-[#ffd700] hover:bg-[#e6c200] text-[#0a2a52] font-medium"
              : "w-full gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
          }
          size="sm"
        >
          <BookOpen className="h-4 w-4" />
          {available ? "Check Out" : "Join Waitlist"}
        </Button>
      </CardFooter>
    </Card>
  )
}

