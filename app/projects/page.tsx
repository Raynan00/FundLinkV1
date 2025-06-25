import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#a8b5a0] z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-gray-800">
            FundLink Aid International
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-semibold">
              Projects
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-gray-900">
              Events
            </Link>
            <Link href="/leadership" className="text-gray-700 hover:text-gray-900">
              Leadership
            </Link>
            <Link href="/partnership" className="text-gray-700 hover:text-gray-900">
              Partnership
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Projects Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Our Projects</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Discover our ongoing climate initiatives and sustainable development projects across Africa.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">Climate Projects</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Support and showcase ongoing climate acceleration initiatives across Africa, focusing on renewable
                energy, carbon reduction, and environmental restoration.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">View All Climate Projects</Button>
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Climate+Projects"
                alt="Climate projects"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-64 order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Policy+Support"
                alt="Policy support"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800">Policy Support</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Assist governments in developing effective environmental policies through research, consultation, and
                capacity building programs.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.shortDescription}</p>
                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
