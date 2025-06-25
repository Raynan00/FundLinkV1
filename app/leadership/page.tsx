import Link from "next/link"

export default function LeadershipPage() {
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
            <Link href="/leadership" className="text-gray-700 hover:text-gray-900 font-semibold">
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

      {/* Leadership Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Our Leadership</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Meet the dedicated team of experts and visionaries driving climate action across Africa.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src="/placeholder.svg?height=200&width=200&text=CEO"
                  alt="CEO"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dr. Amara Okafor</h3>
              <p className="text-[#a8b5a0] font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dr. Okafor brings over 15 years of experience in climate policy and sustainable development across
                Africa. She holds a PhD in Environmental Science from Oxford University.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src="/placeholder.svg?height=200&width=200&text=COO"
                  alt="COO"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">James Mwangi</h3>
              <p className="text-[#a8b5a0] font-medium mb-4">Chief Operating Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                James has extensive experience in project management and operations across East Africa, with a focus on
                renewable energy and community development initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src="/placeholder.svg?height=200&width=200&text=CTO"
                  alt="CTO"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dr. Fatima Al-Rashid</h3>
              <p className="text-[#a8b5a0] font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dr. Al-Rashid specializes in climate technology and innovation, leading our digital transformation and
                technology integration initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Chair"
                    alt="Board Chair"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Prof. Kwame Asante</h3>
                  <p className="text-[#a8b5a0] font-medium mb-3">Board Chairperson</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Former Minister of Environment for Ghana and renowned climate policy expert with 25 years of
                    experience in international development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Director"
                    alt="Board Director"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Mbeki</h3>
                  <p className="text-[#a8b5a0] font-medium mb-3">Board Director</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Investment banker specializing in green finance and sustainable development funding across African
                    markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Director"
                    alt="Board Director"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Ahmed Hassan</h3>
                  <p className="text-[#a8b5a0] font-medium mb-3">Board Director</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Climate scientist and researcher with expertise in African climate patterns and adaptation
                    strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Director"
                    alt="Board Director"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Maria Santos</h3>
                  <p className="text-[#a8b5a0] font-medium mb-3">Board Director</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    International development expert with 20 years of experience in community-based climate adaptation
                    programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Advisory Council</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src="/placeholder.svg?height=130&width=130&text=Advisor"
                  alt="Advisor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Dr. Wangari Maathai Jr.</h4>
              <p className="text-[#a8b5a0] text-sm">Environmental Advisor</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src="/placeholder.svg?height=130&width=130&text=Advisor"
                  alt="Advisor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Prof. Chinua Achebe</h4>
              <p className="text-[#a8b5a0] text-sm">Policy Advisor</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src="/placeholder.svg?height=130&width=130&text=Advisor"
                  alt="Advisor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Aisha Abdullahi</h4>
              <p className="text-[#a8b5a0] text-sm">Finance Advisor</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src="/placeholder.svg?height=130&width=130&text=Advisor"
                  alt="Advisor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Dr. Nelson Mandela III</h4>
              <p className="text-[#a8b5a0] text-sm">Community Advisor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
