import { Button } from "@/components/ui/button"
import Link from "next/link"
import { events } from "@/lib/data"

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "past")

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
            <Link href="/events" className="text-gray-700 hover:text-gray-900 font-semibold">
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

      {/* Events Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Events</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Join us at upcoming conferences, workshops, and community events focused on climate action and sustainable
            development.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-[#e8e6d8] p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-[#a8b5a0] p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
                      </div>
                      <div className="text-4xl font-bold text-gray-800">{new Date(event.date).getDate()}</div>
                      <div className="text-sm text-gray-700">{new Date(event.date).getFullYear()}</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.shortDescription}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span>📍 {event.location}</span>
                      <span>🕒 {event.time}</span>
                      <span>👥 {event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                    </div>
                    <Link href={`/events/${event.slug}`}>
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={event.images[0] || "/placeholder.svg?height=200&width=400&text=Past+Event"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.shortDescription}</p>
                  <Link href={`/events/${event.slug}`}>
                    <Button variant="outline" className="w-full">
                      View Highlights
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
