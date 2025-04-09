"use client";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Book, Search, Printer, Coffee, Laptop, BookOpen, Users } from "lucide-react"

export default function ServicesPage() {
    const services = [
        {
          id: "borrowing",
          title: "Book Borrowing",
          description: "Borrow books, journals, and other materials from our extensive collection.",
          icon: <Book className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "research",
          title: "Research Assistance",
          description: "Get expert help with your research projects and academic papers.",
          icon: <Search className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "digital",
          title: "Digital Resources",
          description: "Access our extensive collection of e-books, journals, and databases.",
          icon: <Laptop className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "printing",
          title: "Printing & Copying",
          description: "Use our printing, scanning, and photocopying services.",
          icon: <Printer className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "spaces",
          title: "Study Spaces",
          description: "Quiet study areas, group study rooms, and collaborative spaces.",
          icon: <Users className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "hours",
          title: "Extended Hours",
          description: "Access the library during extended hours during exam periods.",
          icon: <Clock className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "cafe",
          title: "Library Café",
          description: "Refresh yourself at our café while studying or researching.",
          icon: <Coffee className="h-10 w-10 text-[#0a3161]" />,
        },
        {
          id: "workshops",
          title: "Workshops & Training",
          description: "Attend our workshops on research methods and academic writing.",
          icon: <BookOpen className="h-10 w-10 text-[#0a3161]" />,
        },
      ]
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage="services" />

      <div className="relative h-[300px] bg-[#0a3161]">
        <Image src="/library2.png" alt="Services" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Services</h1>
          <div className="flex text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3161] mb-4">Our Library Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services to support your academic and research needs. Our dedicated staff is here
            to assist you in making the most of our resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="border-t-4 border-t-[#0a3161]">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0a3161] mb-4">Need Help?</h3>
            <p className="mb-6">
              Our librarians are available to assist you with any questions or help you may need. Feel free to contact
              us or visit the information desk during library hours.
            </p>
            <Button className="bg-[#0a3161] hover:bg-[#0a3161]/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-[250px]">
            <Image
              src="/placeholder.svg?height=250&width=500&text=Library Staff"
              alt="Library Staff"
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