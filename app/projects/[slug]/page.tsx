import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const statusColors = {
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    planned: "bg-yellow-100 text-yellow-800",
  }

  const categoryColors = {
    climate: "bg-emerald-100 text-emerald-800",
    policy: "bg-purple-100 text-purple-800",
    community: "bg-orange-100 text-orange-800",
    "renewable-energy": "bg-cyan-100 text-cyan-800",
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

      {/* Breadcrumb */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-gray-800">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Hero */}
      <section className="bg-[#e8e6d8] px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
                  {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{project.fullDescription}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-700">{project.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Budget</h3>
                  <p className="text-gray-700">{project.budget}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Start Date</h3>
                  <p className="text-gray-700">{new Date(project.startDate).toLocaleDateString()}</p>
                </div>
                {project.endDate && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">End Date</h3>
                    <p className="text-gray-700">{new Date(project.endDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>

              <a href={`mailto:hi@fundlinkaid.org?subject=Interest in ${project.title}`}>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">Get Involved</Button>
              </a>
            </div>

            <div className="relative h-96">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.impact.map((metric, index) => (
              <div key={index} className="bg-[#e8e6d8] p-8 rounded-lg text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <div className="text-gray-700">{metric.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Objectives</h2>
              <ul className="space-y-4">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.outcomes && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">★</span>
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Project Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.partners.map((partner, index) => (
              <div key={index} className="bg-[#e8e6d8] p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.images.length > 1 && (
        <section className="bg-[#e8e6d8] px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-[#a8b5a0] px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Support This Project</h2>
          <p className="text-xl text-gray-700 mb-12">
            Join us in making a lasting impact on climate action and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:hi@fundlinkaid.org?subject=Get Involved - ${project.title}&body=Hello, I'm interested in getting involved with the ${project.title} project. Please send me more information about how I can contribute.`}
            >
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">Get Involved</Button>
            </a>
            <a href="mailto:hi@fundlinkaid.org?subject=Partnership Inquiry">
              <Button
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg"
              >
                Become a Partner
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
