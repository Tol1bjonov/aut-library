import { BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface FeaturedBookProps {
  cover: string
  title: string
  author: string
}

export function FeaturedBook({ cover, title, author }: FeaturedBookProps) {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <img src={cover || "/ajou-logo.png"} alt={`Cover of ${title}`} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a52]/90 via-[#0a2a52]/60 to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-lg mb-4">by {author}</p>
          <div className="flex gap-3">
            <Button size="sm" className="bg-[#ffd700] hover:bg-[#e6c200] text-[#0a2a52] font-bold">
              Read Preview
            </Button>
            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
              <BookOpen className="mr-2 h-4 w-4" />
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

