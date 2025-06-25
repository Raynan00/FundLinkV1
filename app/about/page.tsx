import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-semibold">
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

      {/* About Hero */}
      <section className="min-h-screen bg-[#e8e6d8] pt-20 px-6">
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold text-gray-800">
                About
                <br />
                FundLink Aid
                <br />
                International
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  FundLink Aid International acts as a climate change accelerator, supporting African nations to
                  implement effective policies and projects that tackle environmental challenges and promote sustainable
                  growth.
                </p>
                <p>
                  Our approach involves collaborating with governments, communities, and businesses to drive impactful
                  and scalable climate actions that foster long-term resilience.
                </p>
                <p>
                  We focus on empowering local leaders and creating innovative financing solutions to accelerate climate
                  initiatives across sub-national levels in Africa. Our mission is to transform climate challenges into
                  opportunities for sustainable development and improved livelihoods.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=500&text=About+Us"
                alt="About FundLink Aid International"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#a8b5a0] p-12 rounded-lg">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A sustainable and resilient Africa where communities thrive through innovative climate solutions and
                environmental stewardship, creating lasting positive impact for future generations.
              </p>
            </div>
            <div className="bg-[#e8e6d8] p-12 rounded-lg">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To accelerate climate action across Africa by providing innovative financing, policy support, and
                capacity building that empowers local communities and governments to implement sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We prioritize long-term environmental and social sustainability in all our initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-700">We believe in the power of partnerships and community-driven solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-700">We embrace innovative approaches to address complex climate challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
