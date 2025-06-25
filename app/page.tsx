import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
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
            <Link href="/projects" className="text-gray-700 hover:text-gray-900">
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

      {/* Hero Section */}
      <section className="min-h-screen bg-[#a8b5a0] pt-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full py-20">
          <div className="flex-1 max-w-lg">
            <h1 className="text-6xl font-bold text-gray-800 leading-tight mb-8">
              Building a<br />
              Sustainable
              <br />
              Future
            </h1>
            <a href="mailto:hi@fundlinkaid.org?subject=Interest in Joining FundLink Aid">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">JOIN US</Button>
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-96 h-96 relative">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Sustainable+Future"
                alt="Lush green forest with sunlight filtering through trees"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="min-h-screen bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            FundLink Aid International acts as a climate change accelerator, supporting African nations to implement
            effective policies and projects that tackle environmental challenges and promote sustainable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Climate Action</h3>
              <p className="text-gray-700">
                Driving impactful climate initiatives across sub-national levels in Africa.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Policy Support</h3>
              <p className="text-gray-700">
                Collaborating with governments to develop effective environmental policies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Impact</h3>
              <p className="text-gray-700">Empowering local leaders and communities for sustainable development.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
