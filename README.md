# FundLink Aid International Website

A comprehensive Next.js website for FundLink Aid International, a climate change accelerator supporting African nations in implementing effective environmental policies and sustainable development projects.

## 🌍 About FundLink Aid International

FundLink Aid International acts as a climate change accelerator, supporting African nations to implement effective policies and projects that tackle environmental challenges and promote sustainable growth. Our approach involves collaborating with governments, communities, and businesses to drive impactful and scalable climate actions that foster long-term resilience.

## 🚀 Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
fundlink-website/
├── app/                          # Next.js App Router directory
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── events/
│   │   ├── page.tsx             # Events listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Individual event pages
│   ├── leadership/
│   │   └── page.tsx             # Leadership team page
│   ├── partnership/
│   │   └── page.tsx             # Partnership opportunities page
│   ├── projects/
│   │   ├── page.tsx             # Projects listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Individual project pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Homepage
├── components/
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── data.ts                  # Mock data for projects and events
│   └── utils.ts                 # Utility functions
├── public/
│   └── images/                  # Static images and assets
└── README.md                    # This file
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#a8b5a0` - Used for navigation, buttons, and accents
- **Light Background**: `#e8e6d8` - Used for section backgrounds
- **Dark Text**: `#374151` (gray-800) - Primary text color
- **White**: `#ffffff` - Card backgrounds and contrast elements

### Typography
- **Headings**: Bold, large font sizes (text-4xl to text-6xl)
- **Body Text**: Regular weight, comfortable line height
- **Responsive**: Scales appropriately across device sizes

### Layout Principles
- **Consistent Navigation**: Fixed header with brand and navigation links
- **Hero Sections**: Large, impactful headers with descriptive text
- **Grid Layouts**: Responsive grid systems for content organization
- **Card Components**: Consistent card design for projects, events, and team members

## 📄 Page Structure

### Homepage (`app/page.tsx`)
- **Hero Section**: Large banner with mission statement and call-to-action
- **Mission Preview**: Overview of organization's goals and key focus areas
- **Responsive Design**: Adapts to mobile and desktop viewports

### About Us (`app/about/page.tsx`)
- **Organization Overview**: Detailed description of FundLink Aid International
- **Vision & Mission**: Side-by-side cards highlighting core values
- **Values Section**: Three-column grid showcasing organizational principles

### Projects (`app/projects/page.tsx` & `app/projects/[slug]/page.tsx`)
- **Project Listing**: Grid of featured projects with preview cards
- **Individual Project Pages**: Detailed project information including:
  - Project status and category badges
  - Impact metrics dashboard
  - Objectives and challenges
  - Partner organizations
  - Image galleries
  - Call-to-action sections

### Events (`app/events/page.tsx` & `app/events/[slug]/page.tsx`)
- **Event Listing**: Upcoming and past events with date-based organization
- **Individual Event Pages**: Comprehensive event details including:
  - Event metadata (date, time, location, capacity)
  - Speaker profiles
  - Detailed agenda
  - Registration information
  - Event galleries

### Leadership (`app/leadership/page.tsx`)
- **Executive Team**: Profiles of key leadership members
- **Board of Directors**: Board member information with photos
- **Advisory Council**: Grid of advisory council members

### Partnership (`app/partnership/page.tsx`)
- **Partnership Types**: Different collaboration opportunities
- **Current Partners**: Logo grid of existing partners
- **Benefits**: Why organizations should partner with FundLink Aid
- **Call-to-Action**: Contact information for partnership inquiries

### Contact (`app/contact/page.tsx`)
- **Contact Information**: Address, phone, email, and office hours
- **Social Media Links**: Links to social platforms
- **Interactive Map**: Visual representation of office location
- **Footer**: Additional contact details and social links

## 🗃️ Data Management

### Data Structure (`lib/data.ts`)

The application uses TypeScript interfaces to define data structures:

#### Project Interface
```typescript
interface Project {
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
  impact: { metric: string; value: string }[]
  images: string[]
  partners: string[]
  budget: string
  objectives: string[]
  challenges: string[]
  outcomes?: string[]
}
```

#### Event Interface
```typescript
interface Event {
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
  speakers: { name: string; title: string; organization: string }[]
  agenda: { time: string; activity: string; speaker?: string }[]
  images: string[]
  registrationLink?: string
}
```

### Sample Data
The application includes comprehensive sample data for:
- **3 Featured Projects**: Forest Conservation, Solar Energy Access, Water Conservation
- **3 Sample Events**: Climate Summit, Renewable Energy Workshop, Youth Leadership Program

## 🎯 Key Features

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Breakpoints**: Tailored layouts for mobile, tablet, and desktop
- **Navigation**: Collapsible mobile navigation (implementation ready)

### Dynamic Routing
- **Project Pages**: Dynamic routes for individual project details
- **Event Pages**: Dynamic routes for individual event information
- **SEO-Friendly URLs**: Clean, descriptive URLs for all content

### Interactive Elements
- **Status Badges**: Color-coded badges for project and event status
- **Category Tags**: Visual categorization of content
- **Call-to-Action Buttons**: Strategic placement of engagement buttons
- **Email Integration**: Direct email links for contact and registration

### Image Optimization
- **Next.js Image Component**: Automatic image optimization and lazy loading
- **Responsive Images**: Proper sizing across different screen sizes
- **Placeholder System**: Consistent placeholder images during development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fundlink-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Projects
1. Add project data to the `projects` array in `lib/data.ts`
2. Include all required fields according to the `Project` interface
3. Add project images to the `public/images/` directory
4. The project will automatically appear on the projects page and be accessible via its slug

### Adding New Events
1. Add event data to the `events` array in `lib/data.ts`
2. Include all required fields according to the `Event` interface
3. Add event images to the `public/images/` directory
4. The event will automatically appear on the events page and be accessible via its slug

### Styling Modifications
- **Colors**: Update the color palette in `tailwind.config.ts`
- **Typography**: Modify font settings in the Tailwind configuration
- **Components**: Customize shadcn/ui components in the `components/ui/` directory
- **Global Styles**: Add global CSS modifications to `app/globals.css`

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layouts, stacked navigation
- **Tablet**: `768px - 1024px` - Two-column grids, condensed layouts  
- **Desktop**: `> 1024px` - Full multi-column layouts, expanded navigation

## 🔗 Navigation Structure

The website uses a consistent navigation structure across all pages:

1. **Home** - Landing page with hero and mission overview
2. **About Us** - Organization information, vision, mission, and values
3. **Projects** - Project listings and individual project details
4. **Events** - Event listings and individual event details
5. **Leadership** - Team profiles and organizational structure
6. **Partnership** - Partnership opportunities and current partners
7. **Contact** - Contact information and communication channels

## 📧 Contact Integration

The website includes multiple contact touchpoints:
- **Email Links**: Direct mailto links for inquiries and registration
- **Contact Form**: Ready for backend integration
- **Social Media**: Placeholder links for social platforms
- **Office Information**: Complete contact details and office hours

## 🌐 Deployment

### Vercel Deployment (Recommended)
1. Connect your repository to Vercel
2. Configure build settings (Next.js preset)
3. Deploy with automatic CI/CD

### Other Platforms
The application is compatible with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Development Notes

### Code Organization
- **Components**: Reusable UI components using shadcn/ui
- **Pages**: Route-based page components in the `app/` directory
- **Data**: Centralized data management in `lib/data.ts`
- **Types**: TypeScript interfaces for type safety
- **Styling**: Utility-first CSS with Tailwind

### Best Practices Implemented
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **SEO Optimization**: Proper meta tags and semantic HTML structure
- **Performance**: Image optimization and efficient component structure
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support regarding this website:
- **Email**: hi@fundlinkaid.org
- **Phone**: (123) 466-7890
- **Address**: 123 Example Street, San Francisco, CA 12345

---

**Built with ❤️ for climate action and sustainable development in Africa**