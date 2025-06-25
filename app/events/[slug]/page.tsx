import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getEventBySlug } from "@/lib/data"
import { notFound } from "next/navigation"

interface EventPageProps {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  const statusColors = {
    upcoming: "bg-green-100 text-green-800",
    past: "bg-gray-100 text-gray-800",
    ongoing: "bg-blue-100 text-blue-800",
  }

  const typeColors = {
    conference: "bg-purple-100 text-purple-800",
    workshop: "bg-orange-100 text-orange-800",
    summit: "bg-emerald-100 text-emerald-800",
    training: "bg-cyan-100 text-cyan-800",
  }

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

      {/* Breadcrumb */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/events" className="hover:text-gray-800">
              Events
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{event.title}</span>
          </nav>
        </div>
      </section>

      {/* Event Hero */}
      <section className="bg-[#e8e6d8] px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[event.status]}`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[event.type]}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">{event.title}</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{event.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📅 Date</h3>
                  <p className="text-gray-700">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">🕒 Time</h3>
                  <p className="text-gray-700">{event.time}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📍 Location</h3>
                  <p className="text-gray-700">{event.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">👥 Capacity</h3>
                  <p className="text-gray-700">
                    {event.registered ? `${event.registered}/${event.capacity}` : event.capacity} attendees
                  </p>
                </div>
              </div>

              {event.status === "upcoming" && (
                <div className="flex gap-4">
                  <a href={`mailto:hi@fundlinkaid.org?subject=Registration for ${event.title}`}>
                    <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">Register via Email</Button>
                  </a>
                  <a href="mailto:hi@fundlinkaid.org?subject=Event Inquiry">
                    <Button
                      variant="outline"
                      className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3"
                    >
                      Contact Us
                    </Button>
                  </a>
                </div>
              )}
            </div>

            <div className="relative h-96">
              <Image
                src={event.images[0] || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Agenda */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Event Agenda</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {event.agenda.map((item, index) => (
                <div key={index} className="bg-[#e8e6d8] p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="bg-[#a8b5a0] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.activity}</h3>
                      {item.speaker && <p className="text-gray-600 text-sm">Speaker: {item.speaker}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={`/placeholder.svg?height=130&width=130&text=${speaker.name.split(" ")[0]}`}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-[#a8b5a0] font-medium mb-2">{speaker.title}</p>
                <p className="text-gray-600 text-sm">{speaker.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      {event.images.length > 1 && (
        <section className="bg-white px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Event Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${event.title} - Image ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact for Registration */}
      {event.status === "upcoming" && (
        <section className="bg-[#a8b5a0] px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Join Us at This Event</h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't miss this opportunity to connect with climate leaders and learn about innovative solutions.
            </p>
            <a
              href={`mailto:hi@fundlinkaid.org?subject=Registration for ${event.title}&body=Hello, I would like to register for ${event.title} on ${new Date(event.date).toLocaleDateString()}. Please send me more information about registration.`}
            >
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">Register via Email</Button>
            </a>
          </div>
        </section>
      )}
    </div>
  )
}
