import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BitCode",
    description: "Real-time competitive coding platform with multiplayer battles and instant code evaluation.",
    tech: [
      "Django",
      "React.js",
      "PostgreSQL",
      "WebSocket",
      "Redis",
      "Judge0 API",
      "ImageKit",
      "Google OAuth",
    ],
    liveUrl: "https://bitcode.live",
    features: [
      "Real-time 1v1, squad, and team coding battles with WebSockets",
      "Instant code evaluation using Judge0 API and custom compiler (Python, Go, JS)",
      "Elo-based seasonal rankings and live leaderboards",
      "Dynamic lobby creation and in-game chat",
      "Community-driven coding challenge contributions",
      "Secure authentication with email and Google OAuth",
      "Scalable architecture with Redis caching and ImageKit for media",
      "Responsive UI optimized for desktop and mobile",
    ],
  },
  {
    title: "BoomBlog",
    description: "Modern blog platform with FastAPI backend and React frontend, featuring robust authentication and rich media support.",
    tech: [
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Cloudinary",
      "JWT Auth",
      "Alembic",
      "Pydantic",
    ],
    liveUrl: "https://blog.yadhuu.live",
    features: [
      "User registration and login with JWT-based authentication",
      "Admin panel for managing users and roles",
      "Full CRUD operations for blog posts",
      "Cloudinary integration for seamless media uploads",
      "Database migrations handled with Alembic",
      "Users can be active/inactive and admin/non-admin",
      "Interactive React frontend with responsive UI",
      "FastAPI backend leveraging Pydantic settings",
    ],
  },
  {
    title: "Time Twist",
    description: "Full-featured watch e-commerce platform with responsive design and secure payments.",
    tech: ["Django", "PostgreSQL", "Razorpay", "Google OAuth", "Bootstrap"],
    liveUrl: "https://e-com.yadhuu.live",
    features: [
      "Google OAuth for seamless user onboarding",
      "Razorpay integration for secure payments and refunds",
      "Advanced product catalog with multiple color and size variants",
      "Shopping cart, checkout, and order-tracking workflow",
      "Wallet system with transaction history",
      "Wishlist and recently-viewed product carousel",
      "Coupon/discount engine and return-policy handling",
      "Interactive brand sections and mobile-first responsive UI",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-glow mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}