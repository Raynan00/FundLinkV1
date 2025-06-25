import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnershipPage() {
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
            <Link href="/partnership" className="text-gray-700 hover:text-gray-900 font-semibold">
              Partnership
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Partnership Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Partnership</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Join us in building a sustainable future through strategic partnerships and collaborative initiatives.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#e8e6d8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Corporate Partners</h3>
              <p className="text-gray-700 mb-6">
                Partner with us to integrate sustainability into your business operations and contribute to climate
                action.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>

            <div className="bg-[#e8e6d8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Government Partners</h3>
              <p className="text-gray-700 mb-6">
                Collaborate with us on policy development and implementation of climate initiatives at national and
                local levels.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>

            <div className="bg-[#e8e6d8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">NGO Partners</h3>
              <p className="text-gray-700 mb-6">
                Join our network of NGOs working together to amplify impact and share resources for climate action.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Partner+1"
                alt="Partner 1"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Partner+2"
                alt="Partner 2"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Partner+3"
                alt="Partner 3"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Partner+4"
                alt="Partner 4"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Partner+5"
                alt="Partner 5"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <img
                src="/placeholder.svg?height=60&width=120&text=Partner+6"
                alt="Partner 6"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Partner With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Impact</h3>
                    <p className="text-gray-700">
                      Join a network with a track record of successful climate initiatives across Africa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Expertise</h3>
                    <p className="text-gray-700">
                      Benefit from our deep understanding of African markets and communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborative Approach</h3>
                    <p className="text-gray-700">
                      Work with a team that values partnership and shared decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Partnership+Benefits"
                alt="Partnership benefits"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#a8b5a0] px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-700 mb-12">
            Let's work together to create lasting change and build a sustainable future for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hi@fundlinkaid.org?subject=Partnership Inquiry">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">Get In Touch</Button>
            </a>
            <Button
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg"
            >
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
