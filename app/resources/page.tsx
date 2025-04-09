"use client";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Database, FileText, Video } from "lucide-react"

export default function ResourcesPage() {
    const databases = [
        {
          id: 1,
          title: "Academic Search Complete",
          description: "Comprehensive scholarly, multi-disciplinary database with thousands of full-text journals.",
          link: "#",
        },
        {
          id: 2,
          title: "JSTOR",
          description: "Digital library of academic journals, books, and primary sources.",
          link: "#",
        },
        {
          id: 3,
          title: "IEEE Xplore",
          description: "Research database for discovery and access to journal articles and conference proceedings.",
          link: "#",
        },
        {
          id: 4,
          title: "ScienceDirect",
          description: "Leading platform of peer-reviewed scholarly literature.",
          link: "#",
        },
      ]
    
      const ebooks = [
        {
          id: 1,
          title: "ProQuest Ebook Central",
          description: "Hundreds of thousands of e-books from trusted publishers.",
          link: "#",
        },
        {
          id: 2,
          title: "EBSCO eBooks",
          description: "Collection of multidisciplinary e-books representing a broad range of academic subjects.",
          link: "#",
        },
        {
          id: 3,
          title: "O'Reilly Learning",
          description: "Technology and business e-books, videos, and tutorials.",
          link: "#",
        },
      ]
    
      const journals = [
        {
          id: 1,
          title: "Nature",
          description: "Leading international weekly journal of science.",
          link: "#",
        },
        {
          id: 2,
          title: "Science",
          description: "Peer-reviewed academic journal of the American Association for the Advancement of Science.",
          link: "#",
        },
        {
          id: 3,
          title: "The Lancet",
          description: "Weekly peer-reviewed general medical journal.",
          link: "#",
        },
        {
          id: 4,
          title: "IEEE Transactions",
          description: "Collection of peer-reviewed journals in various fields of engineering and computer science.",
          link: "#",
        },
      ]
    
      const multimedia = [
        {
          id: 1,
          title: "Academic Video Online",
          description: "Comprehensive video subscription of documentaries, films, and more.",
          link: "#",
        },
        {
          id: 2,
          title: "Films On Demand",
          description: "Streaming video collection specifically designed for academic institutions.",
          link: "#",
        },
      ]
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage="resources" />
        
      <div className="relative h-[300px] bg-[#0a3161]">
        <Image src="/library.png" alt="Services" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Resources</h1>
          <div className="flex text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Resources</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3161] mb-4">Library Resources</h2>
          <p className="text-lg text-gray-600">
            Access our comprehensive collection of academic resources to support your learning and research. Our library
            provides a wide range of materials in various formats.
          </p>
        </div>

        <Tabs defaultValue="databases" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="databases" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Databases</span>
            </TabsTrigger>
            <TabsTrigger value="ebooks" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>E-Books</span>
            </TabsTrigger>
            <TabsTrigger value="journals" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Journals</span>
            </TabsTrigger>
            <TabsTrigger value="multimedia" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>Multimedia</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="databases">
            <div className="grid md:grid-cols-2 gap-6">
              {databases.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-[#0a3161]" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                    <Button asChild variant="outline" className="text-[#0a3161] border-[#0a3161]">
                      <Link href={item.link}>Access Database</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ebooks">
            <div className="grid md:grid-cols-2 gap-6">
              {ebooks.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-[#0a3161]" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                    <Button asChild variant="outline" className="text-[#0a3161] border-[#0a3161]">
                      <Link href={item.link}>Browse E-Books</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="journals">
            <div className="grid md:grid-cols-2 gap-6">
              {journals.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#0a3161]" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                    <Button asChild variant="outline" className="text-[#0a3161] border-[#0a3161]">
                      <Link href={item.link}>Read Journal</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="multimedia">
            <div className="grid md:grid-cols-2 gap-6">
              {multimedia.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5 text-[#0a3161]" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                    <Button asChild variant="outline" className="text-[#0a3161] border-[#0a3161]">
                      <Link href={item.link}>View Collection</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold text-[#0a3161] mb-4">How to Access Resources</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-[#0a3161] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Get Your Library Card</h4>
                  <p className="text-gray-600">Visit the library with your student ID to get your library card.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-[#0a3161] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Log in to Library Portal</h4>
                  <p className="text-gray-600">Use your university credentials to access the online library portal.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-[#0a3161] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Search and Access</h4>
                  <p className="text-gray-600">Search for resources and access them online or visit the library.</p>
                </div>
              </li>
            </ul>
            <Button className="mt-6 bg-[#0a3161] hover:bg-[#0a3161]/90">
              <Link href="/contact">Get Help with Resources</Link>
            </Button>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/library.png"
              alt="Library Resources"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
       

      <Footer />
    </div>
  )
}

