export interface ApiBook {
    id: number
    name: string
    pdf: string
  }
  
  export interface Book {
    id: number
    title: string
    author: string
    genre: string
    cover: string
    available?: boolean
    pdf?: string
  }
  