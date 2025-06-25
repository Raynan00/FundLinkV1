import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Ready to make a difference? Get in touch with us to learn more about our work or explore partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in touch</h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              Whether you're interested in partnering with us, learning about our projects, or exploring ways to get
              involved, we'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Example Street
                  <br />
                  San Francisco, CA 12345
                  <br />
                  United States
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-700">(123) 466-7890</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <a href="mailto:hi@fundlinkaid.org" className="text-[#a8b5a0] hover:text-gray-800 font-medium">
                  hi@fundlinkaid.org
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🕒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM PST
                </p>
              </div>
            </div>

            <div className="bg-[#e8e6d8] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to make a difference?</h3>
              <p className="text-gray-700 mb-6">
                Contact us about partnership opportunities, project collaboration, or to learn more about our work.
              </p>
              <a href="mailto:hi@fundlinkaid.org?subject=Partnership Inquiry">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">Send us an Email</Button>
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  t
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#4a4a52] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=800&text=Interactive+Map"
              alt="Office location map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a3a42] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="font-semibold text-lg mb-4">FundLink Aid International</h3>
              <p className="mb-2">123 Example Street</p>
              <p className="mb-4">San Francisco, CA 12345</p>
              <p className="mb-2">hi@fundlinkaid.org</p>
              <p>(123) 466-7890</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Hours</h3>
              <p className="mb-2">Monday—Friday</p>
              <p>9am — 5pm</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block text-white hover:text-gray-300 underline">
                  Facebook
                </a>
                <a href="#" className="block text-white hover:text-gray-300 underline">
                  Instagram
                </a>
                <a href="#" className="block text-white hover:text-gray-300 underline">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
