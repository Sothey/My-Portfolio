"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Github,
  Linkedin,
  Phone,
  ExternalLink,
  Calendar,
  MapPin,
  GraduationCap,
  Mail,
  MessageCircle,
  Download,
  Code,
  Palette,
  Globe,
  Star,
  Award,
  Users,
  Coffee,
  Network,
  Server,
  Database,
} from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCounter } from "@/components/animated-counter"
import { SkillBar } from "@/components/skill-bar"
import { FloatingShapes } from "@/components/floating-shapes"
import { ProjectFilter } from "@/components/project-filter"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce website for selling electronic products including computers, phones, and headphones. Built with Vue.js framework featuring a clean, responsive design with shopping cart, user authentication, and payment integration.",
      image: "/images/ecommerce.png",
      technologies: ["Vue.js", "JavaScript", "CSS3", "HTML5", "Vite", "Pinia"],
      github: "https://github.com/PhengMenghour/Ecommerce.git",
      category: "Web Development",
      featured: true,
      duration: "Nov 2024 - Jan 2025",
    },
    {
      title: "BookWorm Online Bookstore",
      description:
        "A comprehensive full-stack online bookstore platform for selling books with an engaging user interface. Features advanced book browsing, search functionality, user management, and real-time inventory tracking.",
      image: "/images/bookworm.png",
      technologies: ["Vue.js", "NestJS", "TypeScript", "Node.js", "Database"],
      github: "https://github.com/lyvathanak/bookworm.git",
      category: "Full Stack",
      featured: true,
      duration: "Mar 2024 - Jun 2024",
    },
    {
      title: "TextBoard Live Display",
      description:
        "An interactive live text display application that allows real-time text customization with various styles, animations, and colors. Perfect for cheering events, live displays, and dynamic presentations with WebSocket support.",
      image: "/images/textboard.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs", "Real-time"],
      github: "https://github.com/lyvathanak/textboard.git",
      category: "Web Application",
      featured: false,
      duration: "2024",
    },
    {
      title: "Task Manager Mobile App",
      description:
        "A TODO-APP for Mobile App Development Project. Built using Flutter/Dart with intuitive task organization, scheduling features, and cross-platform compatibility for efficient daily task management.",
      image: "/images/taskmanager.png",
      technologies: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
      github: "https://github.com/Masterly0607/task-manager.git",
      category: "Mobile Development",
      featured: false,
      duration: "Apr 2024 - Jun 2024",
    },
  ]

  const skills = [
    {
      name: "HTML/CSS",
      percentage: 95,
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      description: "Advanced markup and styling",
    },
    {
      name: "JavaScript",
      percentage: 85,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      description: "Frontend and backend scripting",
    },
    {
      name: "Vue.js",
      percentage: 80,
      color: "bg-gradient-to-r from-green-400 to-green-600",
      description: "Frontend framework",
    },
    {
      name: "Laravel/PHP",
      percentage: 75,
      color: "bg-gradient-to-r from-red-500 to-pink-500",
      description: "Backend framework",
    },
    {
      name: "Networking",
      percentage: 70,
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
      description: "Network protocols and configuration",
    },
    {
      name: "Database Management",
      percentage: 75,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      description: "MySQL, database design",
    },
  ]

  const categories = ["All", "Web Development", "Full Stack", "Web Application", "Mobile Development"]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const stats = [
    { label: "Web Projects", value: 3, icon: Code, color: "from-blue-500 to-cyan-500" },
    { label: "Technologies Mastered", value: 8, icon: Palette, color: "from-purple-500 to-pink-500" },
    { label: "Years of Study", value: 4, icon: GraduationCap, color: "from-green-500 to-emerald-500" },
    { label: "Team Collaborations", value: 4, icon: Users, color: "from-orange-500 to-red-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 transition-colors duration-300">
      <FloatingShapes />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sothey Nith
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/photo.png"
                alt="Sothey Nith"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sothey Nith
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto font-light">
              Web Developer & ICE Student
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Specializing in Full-Stack Development, and Network Design
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="secondary"
                className="px-6 py-3 text-base bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                4th Year ITC Student
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 text-base bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Institute of Technology of Cambodia
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 text-base bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Born May 2, 2003
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#projects">
                  <Code className="w-5 h-5 mr-2" />
                  View My Work
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 bg-transparent"
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 bg-transparent"
              >
                <a href="/resume/Nith-Sothey_Resume.pdf" download="Nith_Sothey_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                      <AnimatedCounter end={stat.value} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-xl max-w-3xl mx-auto">
            Highly motivated developer with a love for creating innovative solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a motivated 4th-year Information and Communication Engineering student at the Institute of
                Technology of Cambodia. With a strong foundation in both web and network, I love creating
                innovative solutions that solve real-world problems and enhance user experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in software development has been driven by curiosity and a desire to build applications that
                make a difference. I specialize in full-stack web development and network design,
                with hands-on experience in modern frameworks and cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I thrive in collaborative environments and have successfully worked on multiple team projects,
                contributing to both frontend and backend development while ensuring clean, maintainable code.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Vue.js",
                  "Laravel",
                  "JavaScript",
                  "PHP",
                  "HTML/CSS",
                  "Networking",
                  "Nest.js",
                  "Web Development",
                  "Team Collaboration",
                  "Problem Solving",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-cyan-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Institute of Technology of Cambodia</p>
                  <p className="text-gray-600 dark:text-gray-400">Information & Communication Engineering</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    4th Year Student • Expected Graduation 2026
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Star className="w-6 h-6 mr-3 text-purple-600" />
                    Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-500" />
                      Full-Stack Web Development
                    </li>
                    <li className="flex items-center">
                      <Network className="w-4 h-4 mr-3 text-green-500" />
                      Network Engineering & Configuration
                    </li>
                    <li className="flex items-center">
                      <Server className="w-4 h-4 mr-3 text-purple-500" />
                      Backend Development with Laravel and Nest.js
                    </li>
                    <li className="flex items-center">
                      <Database className="w-4 h-4 mr-3 text-orange-500" />
                      Database Design & Management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Award className="w-6 h-6 mr-3 text-green-600" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Successfully completed 4 major team projects</li>
                    <li>• Proficient in multiple programming languages</li>
                    <li>• Strong problem-solving and analytical skills</li>
                    <li>• Excellent teamwork and communication abilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-xl">
            Technologies I work with and my proficiency levels
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {skills.slice(0, 3).map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
            <div>
              {skills.slice(3).map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-xl max-w-3xl mx-auto">
            A showcase of my collaborative work and technical expertise in various domains
          </p>

          {/* Project Filters and Search */}
          <div className="mb-8 space-y-4">
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className="max-w-md mx-auto">
              <Input
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${
                  project.featured ? "ring-2 ring-cyan-200 dark:ring-cyan-800" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-64 object-contain bg-gray-50 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.duration && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{project.duration}</div>
                  )}
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover:bg-gradient-to-r hover:from-cyan-100 hover:to-blue-100 dark:hover:from-cyan-900/30 dark:hover:to-blue-900/30 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Let's Connect & Collaborate</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat
              about technology and development. Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <Phone className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
                    <CardTitle className="text-lg">Phone & Telegram</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href="tel:0963735115"
                      className="hover:text-yellow-300 transition-colors block mb-2 font-semibold"
                    >
                      096 373 5115
                    </a>
                    <div className="flex items-center justify-center text-sm text-cyan-200">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Also on Telegram
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <Mail className="w-10 h-10 mx-auto mb-4 text-green-300" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href="mailto:nithsothey2003@gmail.com"
                      className="hover:text-green-300 transition-colors font-semibold text-sm break-all"
                    >
                      nithsothey2003@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <Linkedin className="w-10 h-10 mx-auto mb-4 text-blue-300" />
                    <CardTitle className="text-lg">LinkedIn</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href="https://www.linkedin.com/in/nith-sothey-9642a3368/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 transition-colors font-semibold"
                    >
                      Connect with me
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <Github className="w-10 h-10 mx-auto mb-4 text-purple-300" />
                    <CardTitle className="text-lg">GitHub</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href="https://github.com/Sothey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors font-semibold"
                    >
                      View my repositories
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-cyan-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="tel:0963735115">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Me
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="mailto:nithsothey2003@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://www.linkedin.com/in/nith-sothey-9642a3368/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sothey Nith
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Information & Communication Engineering Student passionate about creating innovative digital solutions
                through full-stack development and mobile applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sothey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nith-sothey-9642a3368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="tel:0963735115"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                >
                  <Phone className="w-6 h-6" />
                </a>
                <a
                  href="mailto:nithsothey2003@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Vue.js", "Laravel", "JavaScript", "PHP", "HTML/CSS", "Networking"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 mb-4">
              © 2025 Sothey Nith. Crafted with passion and dedication using modern web technologies.
            </p>
            <div className="flex items-center justify-center text-gray-600 text-sm">
              <Coffee className="w-4 h-4 mr-2" />
              Fueled by coffee and curiosity
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
