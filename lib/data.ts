export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  location: string
  startDate: string
  endDate?: string
  status: "active" | "completed" | "planned"
  category: "climate" | "policy" | "community" | "renewable-energy"
  impact: {
    metric: string
    value: string
  }[]
  images: string[]
  partners: string[]
  budget: string
  objectives: string[]
  challenges: string[]
  outcomes?: string[]
}

export interface Event {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  date: string
  time: string
  location: string
  type: "conference" | "workshop" | "summit" | "training"
  status: "upcoming" | "past" | "ongoing"
  capacity: number
  registered?: number
  speakers: {
    name: string
    title: string
    organization: string
  }[]
  agenda: {
    time: string
    activity: string
    speaker?: string
  }[]
  images: string[]
  registrationLink?: string
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "forest-conservation-initiative",
    title: "Forest Conservation Initiative",
    shortDescription:
      "Protecting and restoring forest ecosystems across West Africa through community-based conservation programs.",
    fullDescription:
      "The Forest Conservation Initiative is a comprehensive program aimed at protecting and restoring critical forest ecosystems across West Africa. Through partnerships with local communities, governments, and international organizations, we work to combat deforestation, promote sustainable forest management, and enhance biodiversity conservation. Our approach combines traditional ecological knowledge with modern conservation techniques to create lasting environmental impact.",
    location: "Ghana, Côte d'Ivoire, Sierra Leone",
    startDate: "2022-01-15",
    endDate: "2025-12-31",
    status: "active",
    category: "climate",
    impact: [
      { metric: "Forest Area Protected", value: "50,000 hectares" },
      { metric: "Trees Planted", value: "2.5 million" },
      { metric: "Communities Engaged", value: "150" },
      { metric: "Jobs Created", value: "1,200" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Forest+Conservation+1",
      "/placeholder.svg?height=400&width=600&text=Forest+Conservation+2",
      "/placeholder.svg?height=400&width=600&text=Forest+Conservation+3",
    ],
    partners: ["Ghana Forestry Commission", "World Wildlife Fund", "Local Community Groups"],
    budget: "$2.5 Million",
    objectives: [
      "Protect 50,000 hectares of critical forest habitat",
      "Plant 2.5 million native tree species",
      "Train 500 community members in sustainable forestry practices",
      "Establish 10 community-managed forest reserves",
      "Create alternative livelihood opportunities for 1,200 people",
    ],
    challenges: [
      "Illegal logging activities in target areas",
      "Limited access to remote forest locations",
      "Balancing conservation with community economic needs",
      "Climate change impacts on forest regeneration",
    ],
    outcomes: [
      "Successfully established 7 community forest reserves",
      "Reduced deforestation rate by 40% in target areas",
      "Trained over 350 community members in sustainable practices",
      "Created eco-tourism opportunities generating $150,000 annually",
    ],
  },
  {
    id: "2",
    slug: "solar-energy-access",
    title: "Solar Energy Access Program",
    shortDescription: "Bringing clean, affordable solar energy to rural communities across East Africa.",
    fullDescription:
      "The Solar Energy Access Program is designed to provide clean, reliable, and affordable energy solutions to underserved rural communities across East Africa. By installing solar microgrids and individual solar systems, we aim to improve quality of life, enable economic opportunities, and reduce dependence on fossil fuels. The program includes training local technicians for maintenance and creating sustainable financing models for long-term success.",
    location: "Kenya, Tanzania, Uganda",
    startDate: "2023-03-01",
    endDate: "2026-02-28",
    status: "active",
    category: "renewable-energy",
    impact: [
      { metric: "Households Connected", value: "15,000" },
      { metric: "Solar Systems Installed", value: "500" },
      { metric: "CO2 Emissions Reduced", value: "25,000 tons/year" },
      { metric: "Local Technicians Trained", value: "200" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Solar+Energy+1",
      "/placeholder.svg?height=400&width=600&text=Solar+Energy+2",
      "/placeholder.svg?height=400&width=600&text=Solar+Energy+3",
    ],
    partners: ["Kenya Power", "SolarAid", "Local Energy Cooperatives"],
    budget: "$4.2 Million",
    objectives: [
      "Install solar systems in 500 rural locations",
      "Connect 15,000 households to clean energy",
      "Train 200 local technicians for system maintenance",
      "Establish 50 energy cooperatives",
      "Reduce energy costs by 60% for participating communities",
    ],
    challenges: [
      "High upfront costs for solar installations",
      "Limited technical expertise in rural areas",
      "Maintenance and repair logistics",
      "Creating sustainable financing models",
    ],
  },
  {
    id: "3",
    slug: "water-conservation-program",
    title: "Water Conservation Program",
    shortDescription: "Implementing sustainable water management solutions in drought-affected regions.",
    fullDescription:
      "Our Water Conservation Program addresses water scarcity challenges in drought-prone regions through innovative water harvesting, storage, and management techniques. The program focuses on building community resilience through improved water access, agricultural productivity, and ecosystem restoration. We work closely with local communities to implement culturally appropriate and technically sound water conservation solutions.",
    location: "Ethiopia, Somalia, Northern Kenya",
    startDate: "2022-06-01",
    endDate: "2024-12-31",
    status: "active",
    category: "community",
    impact: [
      { metric: "Water Points Constructed", value: "120" },
      { metric: "People with Improved Access", value: "75,000" },
      { metric: "Rainwater Harvested", value: "2.5 million liters" },
      { metric: "Agricultural Yield Increase", value: "35%" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Water+Conservation+1",
      "/placeholder.svg?height=400&width=600&text=Water+Conservation+2",
      "/placeholder.svg?height=400&width=600&text=Water+Conservation+3",
    ],
    partners: ["UNICEF", "Water.org", "Local Water Committees"],
    budget: "$1.8 Million",
    objectives: [
      "Construct 120 sustainable water points",
      "Install rainwater harvesting systems in 200 locations",
      "Train 300 community members in water management",
      "Improve water access for 75,000 people",
      "Increase agricultural productivity by 35%",
    ],
    challenges: [
      "Extreme weather conditions affecting construction",
      "Limited groundwater resources in some areas",
      "Community coordination and maintenance capacity",
      "Ensuring equitable water access across communities",
    ],
  },
]

export const events: Event[] = [
  {
    id: "1",
    slug: "african-climate-summit-2024",
    title: "African Climate Summit 2024",
    shortDescription:
      "Join leaders from across Africa for discussions on climate policy, sustainable development, and innovative financing solutions.",
    fullDescription:
      "The African Climate Summit 2024 is a premier gathering of climate leaders, policymakers, researchers, and practitioners from across the African continent and beyond. This three-day summit will focus on accelerating climate action through policy innovation, sustainable financing, and community-driven solutions. Participants will engage in high-level discussions, workshops, and networking opportunities designed to foster collaboration and drive meaningful climate action across Africa.",
    date: "2024-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "Nairobi, Kenya",
    type: "summit",
    status: "upcoming",
    capacity: 500,
    registered: 342,
    speakers: [
      {
        name: "Dr. Amina Hassan",
        title: "Climate Policy Director",
        organization: "African Union",
      },
      {
        name: "Prof. Kwame Asante",
        title: "Environmental Economist",
        organization: "University of Ghana",
      },
      {
        name: "Sarah Mbeki",
        title: "Green Finance Specialist",
        organization: "African Development Bank",
      },
      {
        name: "Dr. James Mwangi",
        title: "Renewable Energy Expert",
        organization: "Kenya Renewable Energy Association",
      },
    ],
    agenda: [
      { time: "9:00 AM", activity: "Registration and Welcome Coffee" },
      {
        time: "9:30 AM",
        activity: "Opening Keynote: The Future of Climate Action in Africa",
        speaker: "Dr. Amina Hassan",
      },
      { time: "10:30 AM", activity: "Panel: Innovative Climate Financing Mechanisms", speaker: "Sarah Mbeki" },
      { time: "12:00 PM", activity: "Lunch and Networking" },
      { time: "1:30 PM", activity: "Workshop: Community-Based Climate Solutions" },
      { time: "3:00 PM", activity: "Panel: Renewable Energy Opportunities", speaker: "Dr. James Mwangi" },
      { time: "4:30 PM", activity: "Closing Remarks and Next Steps" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Climate+Summit+1",
      "/placeholder.svg?height=400&width=600&text=Climate+Summit+2",
      "/placeholder.svg?height=400&width=600&text=Climate+Summit+3",
    ],
    registrationLink: "https://example.com/register",
  },
  {
    id: "2",
    slug: "renewable-energy-workshop",
    title: "Renewable Energy Workshop",
    shortDescription: "Hands-on workshop for local communities on implementing solar and wind energy solutions.",
    fullDescription:
      "This intensive one-day workshop is designed for community leaders, local entrepreneurs, and technical professionals interested in implementing renewable energy solutions in their communities. Participants will learn about solar panel installation, wind energy systems, energy storage, and maintenance practices. The workshop combines theoretical knowledge with hands-on practical sessions, providing participants with the skills needed to initiate renewable energy projects in their communities.",
    date: "2024-04-22",
    time: "10:00 AM - 4:00 PM",
    location: "Lagos, Nigeria",
    type: "workshop",
    status: "upcoming",
    capacity: 50,
    registered: 38,
    speakers: [
      {
        name: "Eng. Adebayo Ogundimu",
        title: "Solar Energy Specialist",
        organization: "Nigerian Solar Association",
      },
      {
        name: "Dr. Fatima Al-Rashid",
        title: "Renewable Energy Engineer",
        organization: "FundLink Aid International",
      },
    ],
    agenda: [
      { time: "10:00 AM", activity: "Welcome and Introduction to Renewable Energy" },
      { time: "10:30 AM", activity: "Solar Energy Fundamentals", speaker: "Eng. Adebayo Ogundimu" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Hands-on: Solar Panel Installation" },
      { time: "2:30 PM", activity: "Energy Storage and Grid Integration", speaker: "Dr. Fatima Al-Rashid" },
      { time: "3:30 PM", activity: "Q&A and Certification Ceremony" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Workshop+1",
      "/placeholder.svg?height=400&width=600&text=Workshop+2",
    ],
    registrationLink: "https://example.com/workshop-register",
  },
  {
    id: "3",
    slug: "youth-climate-leadership-program",
    title: "Youth Climate Leadership Program",
    shortDescription:
      "Empowering young leaders with skills and knowledge to drive climate action in their communities.",
    fullDescription:
      "The Youth Climate Leadership Program is a comprehensive three-day training program designed to empower young people aged 18-30 with the knowledge, skills, and networks needed to become effective climate leaders in their communities. The program covers climate science, policy advocacy, project management, and community engagement strategies. Participants will develop action plans for climate initiatives in their home communities and receive ongoing mentorship support.",
    date: "2024-05-10",
    time: "9:00 AM - 6:00 PM",
    location: "Cape Town, South Africa",
    type: "training",
    status: "upcoming",
    capacity: 100,
    registered: 87,
    speakers: [
      {
        name: "Thandiwe Nkomo",
        title: "Youth Climate Activist",
        organization: "African Youth Climate Hub",
      },
      {
        name: "Dr. Michael Osei",
        title: "Climate Communication Specialist",
        organization: "Climate Outreach Africa",
      },
      {
        name: "Aisha Abdullahi",
        title: "Community Organizer",
        organization: "Grassroots Climate Network",
      },
    ],
    agenda: [
      { time: "9:00 AM", activity: "Welcome and Icebreaker Activities" },
      { time: "9:30 AM", activity: "Climate Science and Impacts in Africa", speaker: "Dr. Michael Osei" },
      { time: "11:00 AM", activity: "Leadership Skills for Climate Action", speaker: "Thandiwe Nkomo" },
      { time: "12:30 PM", activity: "Lunch and Networking" },
      { time: "1:30 PM", activity: "Community Engagement Strategies", speaker: "Aisha Abdullahi" },
      { time: "3:00 PM", activity: "Project Planning Workshop" },
      { time: "4:30 PM", activity: "Presentation of Action Plans" },
      { time: "5:30 PM", activity: "Closing Ceremony and Next Steps" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Youth+Program+1",
      "/placeholder.svg?height=400&width=600&text=Youth+Program+2",
    ],
    registrationLink: "https://example.com/youth-register",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug)
}
