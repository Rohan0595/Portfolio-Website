import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Download, ExternalLink, Layers, Mail, MapPin, Phone, Sparkles, Github, Linkedin, Instagram, ChevronDown, Rocket, AlarmClock, Heart } from "lucide-react"

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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">RB</span>
            </div>
            <span className="text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">RB</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
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
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a BTech CSE student specializing in IoT, passionate about creating beautiful, functional solutions
                at the intersection of design and technology.
              </p>
              <div className="flex gap-4 mb-4">
                <Link href="https://github.com" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="mailto:rohan.bandari@example.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
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
                  <p className="text-lg mb-4">
                    I'm a third-year BTech CSE student at SRM University, Kattankulathur, Chennai, specializing in
                    Internet of Things (IoT).
                  </p>
                  <p className="mb-4">
                    I blend design thinking with engineering precision to create solutions that are both beautiful and
                    functional. My passion lies in developing innovative IoT applications that solve real-world
                    problems.
                  </p>
                  <p>
                    When I'm not coding or designing, you can find me exploring new technologies, participating in
                    hackathons, or collaborating on interdisciplinary projects.
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
                        <p className="text-3xl font-bold mb-1">1+</p>
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
              <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
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
                  value="iot"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  IoT
                </TabsTrigger>
              </TabsList>
              <TabsContent value="design" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Figma",
                    "Adobe XD",
                    "Photoshop",
                    "Illustrator",
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["JavaScript", "React", "Node.js", "Python", "Java", "HTML/CSS", "MongoDB", "Git"].map((skill) => (
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
              <TabsContent value="iot" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Arduino",
                    "Raspberry Pi",
                    "Sensors",
                    "MQTT",
                    "ESP32",
                    "IoT Protocols",
                    "Cloud IoT",
                    "Embedded Systems",
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
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Home Automation",
                  description: "IoT-based home automation system with mobile app control",
                  tags: ["IoT", "React Native", "Arduino"],
                  image: "/placeholder.svg?height=300&width=400",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "E-Commerce UI Redesign",
                  description: "Complete UI/UX overhaul for an e-commerce platform",
                  tags: ["UI/UX", "Figma", "Prototyping"],
                  image: "/placeholder.svg?height=300&width=400",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  title: "Health Monitoring Wearable",
                  description: "IoT wearable device for real-time health monitoring",
                  tags: ["IoT", "Embedded Systems", "Data Analysis"],
                  image: "/placeholder.svg?height=300&width=400",
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
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 group/btn hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20"
                    >
                      View Project{" "}
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
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
            <div className="space-y-8">
              {/* Example Experience Card */}
              <Card className="glass-effect dark:bg-slate-900/50 p-6 border border-white/20 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Founders Club 
                </h3>
                <p className="text-muted-foreground mb-4">Acme Corp | Jan 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Developed and maintained web applications using React and Node.js.</li>
                  <li>Collaborated with a team of engineers to design and implement new features.</li>
                  <li>Optimized application performance and improved user experience.</li>
                </ul>
              </Card>

              <Card className="glass-effect dark:bg-slate-900/50 p-6 border border-white/20 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Dbug Labs
                </h3>
                <p className="text-muted-foreground mb-4">University Lab | May 2022 - Dec 2022</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Conducted research on secure IoT communication protocols.</li>
                  <li>Built prototypes of smart devices using Arduino and Raspberry Pi.</li>
                  <li>Analyzed sensor data and developed data visualization dashboards.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-4">
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
              <div className="flex gap-4 pt-4">
                {[
                  { icon: "linkedin", gradient: "from-blue-600 to-blue-700" },
                  { icon: "github", gradient: "from-gray-700 to-gray-800" },
                  { icon: "twitter", gradient: "from-blue-400 to-cyan-500" },
                  { icon: "instagram", gradient: "from-orange-500 to-red-600" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`rounded-full bg-gradient-to-r ${social.gradient} text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <div className="h-5 w-5" />
                    <span className="sr-only">{social.icon}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-2">
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

            <div className="md:col-span-3 space-y-4">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">rohan.bandari@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Newsletter
              </h3>
              <p className="text-slate-300">Subscribe to receive updates on my latest projects and tech insights.</p>
              <div className="flex gap-2 mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-400">© {new Date().getFullYear()} Rohan Bandari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
