import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Download, ExternalLink, Layers, Mail, MapPin, Phone, Sparkles, Github, Linkedin, Instagram, ChevronDown, Rocket, AlarmClock, Heart, Coffee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-indigo-200 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/40 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 dark:border-white/10 glass-effect">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Image
                src="/header-logo.png"
                alt="Rohan Bandari Logo"
                width={64}
                height={64}
                className="object-cover rounded-full"
              />
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#certifications"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
              Certifications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="container py-12 md:py-20 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-sm font-medium border border-blue-200 dark:border-blue-800">
                <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Open to work and looking for new opportunities
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-semi-bold tracking-tight text-gray-700 dark:text-gray-300">
                  Hi! I'm,
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-600 to-orange-600 bg-clip-text text-transparent animate-pulse font-serif">
                  Rohan Bandari
                </h1>
                <h2 className="text-xl md:text-xl font-medium text-gray-600 dark:text-gray-400">
                  Full Stack Developer
                </h2>
              </div>
              <p className="text-l text-muted-foreground leading-relaxed">
              I craft exceptional digital experiences that seamlessly blend sophisticated design with powerful functionality. Passionate about building scalable applications that drive real business impact and delight users.
              </p>
              <div className="flex gap-4 mb-4">
                <Link href="https://github.com/Rohan0595" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/rohan-bandari-651787287/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/_rohanbandari/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="mailto:rohanbandari0509@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
                  asChild
                >
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative translate-x-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30"></div>
                <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-blue-900 dark:border-dark-blue-700 shadow-2xl">
                  <Image
                    src="/profile-pic.jpeg"
                    alt="Rohan Bandari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-[-2rem] left-[-2rem] w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-slate-800">
                  <Coffee className="h-6 w-6 text-orange-400" />
                </div>
                <div className="absolute bottom-[-2rem] right-[-2rem] w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-slate-800">
                  <Heart className="h-6 w-6 text-red-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="animate-bounce cursor-pointer">
              <ChevronDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 dark:from-blue-900/20 dark:to-cyan-900/20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-12 space-y-6">
                <div className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Hey there, I'm Rohan
                  </h3>
                  <p className="mb-4">
                    I'm a third-year BTech CSE student at SRM Institute of Science and Technology, Kattankulathur, Chennai, specializing in
                    Internet of Things (IoT).
                  </p>
                  <p className="mb-4">
                  A passionate and curious developer at the start of my tech journey. I love turning ideas into reality with code, and I'm always eager to learn something new whether it's a framework, a design trick, or a random fact from the internet.
                  </p>
                  <p>
                  I thrive on collaboration, late-night brainstorming, and the occasional meme break. If it involves building, experimenting, or just doing things a little differently, I'm in!
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    <Card className="text-center glass-effect dark:bg-slate-900/50 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                          <Rocket className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold mb-1">7+</p>
                        <p className="text-sm text-muted-foreground">Projects Completed</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center glass-effect dark:bg-slate-900/50 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                          <AlarmClock className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold mb-1">2+</p>
                        <p className="text-sm text-muted-foreground">Years Experience</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center glass-effect dark:bg-slate-900/50 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold mb-1">100%</p>
                        <p className="text-sm text-muted-foreground">Dedication</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-8">
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <span>Hyderabad, Telangana, India</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <span>rohanbandari0509@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <span>+91 70940 40612</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Skills</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-muted-foreground">Technologies and tools I work with</p>
            </div>
            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                <TabsTrigger
                  value="design"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  value="development"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  Development
                </TabsTrigger>
                <TabsTrigger
                  value="programming"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  Programming
                </TabsTrigger>
              </TabsList>
              <TabsContent value="design" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Figma",
                    "Photoshop",
                    "UI/UX",
                    "Wireframing",
                    "Prototyping",
                    "User Research",
                  ].map((skill, index) => (
                    <Card
                      key={skill}
                      className="text-center glass-effect hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                          <Layers className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-medium">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="development" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["JavaScript", "React", "Node.js", "Python", "Next.js", "HTML/CSS", "MongoDB", "PostGreSQL", "Git"].map((skill) => (
                    <Card
                      key={skill}
                      className="text-center glass-effect hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-medium">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="programming" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "C",
                    "C++",
                    "Java",
                    "Python",
                    "MySQL",
                    "Kotlin",
                  ].map((skill) => (
                    <Card
                      key={skill}
                      className="text-center glass-effect hover:shadow-lg transition-all duration-300 group hover:scale-105"
                    >
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-medium">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 md:py-24 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-900/50"
        >
          <div className="container space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Finance Management System",
                  description: "A comprehensive financial management solution with expense tracking, budget planning, and financial reporting features.",
                  tags: ["TailWind CSS", "React", "TypeScript", "MySQL"],
                  image: "/finance-management.jpeg",
                  gradient: "from-blue-500 to-cyan-500",
                  link: "https://github.com/yourusername/finance-management"
                },
                {
                  title: "Portfolio Website",
                  description: "A personal portfolio website to showcase projects, skills, and certifications with smooth UI, responsive design, and interactive sections.",
                  tags: ["TypeScript", "CSS", "JavaScript", "React"],
                  image: "/portfolio.png",
                  gradient: "from-orange-500 to-red-500",
                  link: "https://github.com/Rohan0595/Portfolio-Website"
                },
                {
                  title: "Pet Adoption and Rescue System",
                  description: "A web-based Pet Adoption and Rescue System to connect shelters with potential adopters, featuring pet listings, adoption forms, and real-time updates.",
                  tags: ["React.js", "Node.js", "TypeScript", "TailWind CSS", "MySQL"],
                  image: "/pet-adoption-rescue.png",
                  gradient: "from-teal-500 to-emerald-500",
                },
                {
                  title: "RFID based Payment System",
                  description: "An RFID-based Payment System enabling contactless transactions using RFID tags, with secure authentication, real-time balance updates, and usage tracking.",
                  tags: ["React", "Chart.js", "TailWind CSS", "API Integration", "Responsive"],
                  image: "/rfid-payment-system.png",
                  gradient: "from-teal-500 to-emerald-500",
                },
                {
                  title: "Expense Tracker",
                  description: "A web-based Expense Tracker application for managing personal finances, tracking expenses, and visualizing spending patterns with interactive charts.",
                  tags: ["React", "Chart.js", "TailWind CSS", "API Integration", "Responsive"],
                  image: "/expense-tracker.jpeg",
                  gradient: "from-teal-500 to-emerald-500",
                },
                {
                  title: "Task Scheduler",
                  description: "A web-based Task Scheduler for organizing daily activities, setting deadlines, and tracking progress with notifications and a clean, responsive UI.",
                  tags: ["HTML", "CSS", "JavaScript", "SQLite", "Spark API", "Java"],
                  image: "/task-scheduler.png",
                  gradient: "from-teal-500 to-emerald-500",
                },
                {
                  title: "AI Recipe Generator",
                  description: "A web-based AI Recipe Generator that suggests personalized recipes using user inputs and available ingredients, with step-by-step instructions and nutrition insights.",
                  tags: ["React", "MongoDb", "Next Auth", "TailWind CSS", "TypeScript", "OpenAI API"],
                  image: "/ai-recipe-generator.jpeg",
                  gradient: "from-teal-500 to-emerald-500",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        View Project
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="py-16 md:py-24 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-900/50"
        >
          <div className="container space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Certifications</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-muted-foreground">Professional certifications and achievements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Udemy C Programming",
                  issuer: "Udemy",
                  date: "June 2025",
                  description: "Foundational knowledge of C programming, including data types, functions, pointers, memory management, and file handling.",
                  image: "/udemy-c-certificate.png",
                  link: "/C Certificate.pdf"
                },
                {
                  title: "Scaler Database Management System",
                  issuer: "Scaler",
                  date: "May 2025",
                  description: "Comprehensive understanding of database design, SQL, normalization, transactions, and database optimization techniques.",
                  image: "/scaler-dbms.png",
                  link: "/DBMS Course Certificate.pdf"
                },
                {
                  title: "NPTEL Java Programming",
                  issuer: "NPTEL",
                  date: "October 2024",
                  description: "Advanced Java programming concepts including OOP, multithreading, collections, and GUI development.",
                  image: "/nptel.png",
                  link: "/Programming in Java.pdf"
                },
                {
                  title: "Udemy Machine Learning",
                  issuer: "Udemy",
                  date: "June 2025",
                  description: "Completed Udemy Machine Learning course covering supervised and unsupervised learning, regression, classification, and model optimization techniques.",
                  image: "/udemy-ml.png",
                  link: "/ML Certificate.pdf"
                }
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20" />
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-award"
                        >
                          <path d="M12 9v6" />
                          <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9z" />
                          <path d="M12 3v6" />
                        </svg>
                        View Certificate
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 dark:from-blue-900/20 dark:to-cyan-900/20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                My Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              <p className="text-muted-foreground mt-4 text-center max-w-lg">
                A summary of my professional journey.
              </p>
            </div>

            {/* Experience entries will go here */}
            <div className="space-y-12">
              {[{
                organizationName: "Founders Club",
                logoSrc: "/founders-club-actual-logo.png",
                roles: [{
                  title: "President",
                  duration: "Feb 2025 – Present"
                }, {
                  title: "Outreach Lead",
                  duration: "Aug 2024 – Feb 2025"
                }, {
                  title: "Member",
                  duration: "Oct 2023 – Aug 2024"
                }],
              }, {
                organizationName: "dBug Labs",
                logoSrc: "/dbug-labs-logo.png",
                roles: [{
                  title: "Events Lead",
                  duration: "Oct 2024 – Present"
                }, {
                  title: "Associate Lead",
                  duration: "Apr 2024 – Oct 2024"
                }, {
                  title: "Member",
                  duration: "Nov 2023 – Apr 2024"
                }],
              }].map((org, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-7">
                  <div className="flex-shrink-0 w-24 h-24 relative bg-white dark:bg-slate-800 rounded-full flex items-center justify-center p-1 shadow-lg">
                    <Image 
                      src={org.logoSrc} 
                      alt={org.organizationName} 
                      fill 
                      className="object-contain p-2 rounded-full" 
                      sizes="(max-width: 768px) 96px, 96px"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                      {org.organizationName}
                    </h3>
                    <div className="space-y-4">
                      {org.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="flex items-center gap-4">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0" />
                          <Card className="flex-1 p-4 glass-effect dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/50 shadow-md">
                            <div className="flex justify-between items-center">
                              <p className="text-lg font-bold">{role.title}</p>
                              <p className="text-sm text-muted-foreground">{role.duration}</p>
                            </div>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RB</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Rohan Bandari
                </span>
              </div>
              <p className="text-slate-300 max-w-md">
                A passionate designer and engineer specializing in IoT solutions. Creating innovative technology that
                solves real-world problems.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-2 text-left">
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-slate-300 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">rohanbandari0509@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">+91 70940 40612</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800 text-left">
            <p className="text-slate-400">© {new Date().getFullYear()} Rohan Bandari. Made with ❤️ and a lots of ☕.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
