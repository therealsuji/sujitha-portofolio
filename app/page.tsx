import React, { Suspense } from "react";
import Image from "next/image";
import { ME_IMAGE } from "../utils/assets";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import { Metadata } from "next";
import PostList from "./PostList";
import ContactSection from "./components/ContactSection";
import ColorSchemeToggle from "./components/ColorSchemeToggle";
import StashSection from "./components/StashSection";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export const metadata: Metadata = {
  title: "Sujitha Wijewantha | Fullstack Engineer",
  description:
    "Fullstack engineer specializing in building robust web experiences with modern tech",
};

const techStack = {
  frontend: [
    { name: "REACT/NEXT", color: "bg-primary" },
    { name: "TAILWIND CSS", color: "bg-brutal-green" },
    { name: "ANGULAR", color: "bg-accent" },
    { name: "FLUTTER", color: "bg-primary" },
    { name: "REDUX/ZUSTAND", color: "bg-brutal-purple" },
  ],
  backend: [
    { name: "NODE.JS", color: "bg-brutal-green" },
    { name: "NESTJS", color: "bg-accent" },
    { name: "EXPRESS", color: "bg-secondary" },
    { name: "TRPC", color: "bg-brutal-purple" },
    { name: "PRISMA/DRIZZLE", color: "bg-brutal-yellow" },
  ],
  database: [
    { name: "POSTGRESQL", color: "bg-secondary" },
    { name: "MONGODB", color: "bg-brutal-green" },
    { name: "REDIS", color: "bg-accent" },
    { name: "MYSQL", color: "bg-primary" },
    { name: "FIREBASE", color: "bg-brutal-yellow" },
  ],
  cloud: [
    { name: "AWS", color: "bg-brutal-yellow" },
    { name: "GCP", color: "bg-secondary" },
    { name: "VERCEL", color: "bg-primary" },
    { name: "RAILWAY", color: "bg-brutal-purple" },
    { name: "DOCKER", color: "bg-accent" },
  ],
};

const experience = [
  {
    id: "freelance",
    company: "FREELANCE",
    role: "FULLSTACK DEV",
    period: "2020 - PRESENT",
    description: [
      "MULTI-TENANT TAXI SERVICE PLATFORM (NEXTJS/NESTJS)",
      "BACKOFFICE APPLICATIONS WITH TRPC",
      "AWS EBS DEPLOYMENT & CI/CD PIPELINES",
      "RAILWAY HOSTING & INFRASTRUCTURE",
    ],
  },
  {
    id: "enactor",
    company: "ENACTOR",
    role: "SOFTWARE ENGINEER",
    period: "2021 - 2024",
    description: [
      "REFINED AND ENHANCED THE INITIAL VERSION OF THE SELF-CHECKOUT REACT-BASED POS, OPTIMISING USER EXPERIENCE AND FUNCTIONALITY",
      "MIGRATING LEGACY POS TO REACT-BASED SYSTEM",
      "BUILDING DATA PREPROCESSORS FOR PLATFORM",
      "STREAMLINING DESIGN SYSTEM ARCHITECTURE",
      "AUTOMATING TESTING FOR REACT POS",
    ],
  },
  {
    id: "affno",
    company: "AFFNO",
    role: "JUNIOR ENGINEER",
    period: "2019 - 2020",
    description: [
      "WEB & MOBILE DEVELOPMENT (IONIC/ANGULAR)",
      "UBER EATS CLONE APPLICATION",
      "CHATBOTS FOR BANKING WEBSITES",
      "REST API INTEGRATION & FRONTEND",
    ],
  },
];

const Index = () => {
  return (
    <>
      <main className="relative noise-bg">
        <Navbar />

        {/* Hero Section */}
        <div className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
          <AboutMe />
        </div>

        {/* About Section */}
        <section
          id="about-me"
          className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display brutal-heading mb-8 sm:mb-12 brutal-shadow">
              ABOUT<span className="text-primary">/</span>ME
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="space-y-4 sm:space-y-6">
                <div className="brutal-card p-4 sm:p-6">
                  <p className="font-mono text-base sm:text-lg leading-relaxed">
                    CREATIVE ENGINEER WHO LOVES CRAFTING AMAZING WEB
                    EXPERIENCES. STARTED WITH GAME DEVELOPMENT, FELL IN LOVE
                    WITH SOFTWARE.
                  </p>
                </div>

                <div className="brutal-card p-4 sm:p-6">
                  <p className="font-mono text-base sm:text-lg leading-relaxed">
                    FROM UNITY TO UNREAL, FLUTTER TO ANGULAR, FRONTEND TO
                    BACKEND - I BUILD COMPLETE APPLICATION EXPERIENCES.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-mono uppercase brutal-shadow-sm">
                    QUICK<span className="text-primary">/</span>STACK
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { name: "REACT/NEXT", color: "bg-primary" },
                      { name: "TYPESCRIPT", color: "bg-secondary" },
                      { name: "NODE/NEST", color: "bg-accent" },
                      { name: "POSTGRESQL", color: "bg-brutal-purple" },
                      { name: "AWS/GCP", color: "bg-brutal-yellow" },
                      { name: "TAILWIND", color: "bg-brutal-green" },
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className={`${tech.color} text-black px-2 sm:px-4 py-2 brutal-border brutal-box-shadow-sm font-mono text-xs sm:text-sm font-bold text-center hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer`}
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 brutal-border brutal-box-shadow overflow-hidden bg-card">
                    <Image
                      src={ME_IMAGE}
                      alt="Sujitha Wijewantha"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 320px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Skills Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display brutal-heading mb-8 sm:mb-12 brutal-shadow">
              TECH<span className="text-primary">/</span>ARSENAL
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="brutal-card p-4 sm:p-6 bg-background">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">
                  FRONTEND
                </h3>
                <div className="space-y-2">
                  {techStack.frontend.map((tech) => (
                    <div
                      key={tech.name}
                      className={`${tech.color} text-black px-3 py-2 brutal-border font-mono text-xs font-bold hover:translate-x-1 transition-transform`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="brutal-card p-4 sm:p-6 bg-background">
                <h3 className="text-xl font-mono uppercase mb-4 text-secondary">
                  BACKEND
                </h3>
                <div className="space-y-2">
                  {techStack.backend.map((tech) => (
                    <div
                      key={tech.name}
                      className={`${tech.color} text-black px-3 py-2 brutal-border font-mono text-xs font-bold hover:translate-x-1 transition-transform`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="brutal-card p-4 sm:p-6 bg-background">
                <h3 className="text-xl font-mono uppercase mb-4 text-accent">
                  DATABASE
                </h3>
                <div className="space-y-2">
                  {techStack.database.map((tech) => (
                    <div
                      key={tech.name}
                      className={`${tech.color} text-black px-3 py-2 brutal-border font-mono text-xs font-bold hover:translate-x-1 transition-transform`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="brutal-card p-4 sm:p-6 bg-background">
                <h3 className="text-xl font-mono uppercase mb-4 text-brutal-purple">
                  CLOUD/DEVOPS
                </h3>
                <div className="space-y-2">
                  {techStack.cloud.map((tech) => (
                    <div
                      key={tech.name}
                      className={`${tech.color} text-black px-3 py-2 brutal-border font-mono text-xs font-bold hover:translate-x-1 transition-transform`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display brutal-heading mb-8 sm:mb-12 brutal-shadow">
              WORK<span className="text-primary">/</span>EXPERIENCE
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {experience.map((job, index) => (
                <div
                  key={job.id}
                  className="brutal-card p-4 sm:p-6 bg-background hover:translate-x-2 transition-transform"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold uppercase">
                        <span className="text-primary">
                          {String(index + 1).padStart(2, "0")}.
                        </span>{" "}
                        {job.company}
                      </h3>
                      <p className="font-mono text-base sm:text-lg mt-1">
                        {job.role}
                      </p>
                    </div>
                    <span className="font-mono text-xs sm:text-sm bg-brutal-yellow text-black px-2 sm:px-3 py-1 brutal-border mt-2 md:mt-0 self-start">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm sm:text-base flex items-start"
                      >
                        <span className="text-primary mr-2 sm:mr-3 text-base">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StashSection />

        {/* Projects/Blog Section */}
        <section
          id="cool-stuff"
          className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display brutal-heading mb-8 sm:mb-12 brutal-shadow">
              COOL<span className="text-primary">/</span>STUFF
            </h2>

            {/* Featured Projects */}
            <div className="mb-16">
              <h3 className="text-xl font-mono uppercase mb-8 text-primary">FEATURED PROJECTS</h3>
              <div className="grid gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div>
              <h3 className="text-xl font-mono uppercase mb-8 text-primary">LATEST POSTS</h3>
              <Suspense
                fallback={
                  <div className="flex justify-center py-12">
                    <div className="font-mono text-xl">LOADING...</div>
                  </div>
                }
              >
                <PostList />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-foreground py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left font-mono">
              <p className="text-xs sm:text-sm uppercase">
                DEVELOPED BY{" "}
                <span className="font-bold text-primary">SUJITHA WIJEWANTHA</span>
              </p>
              <p className="text-xs mt-2 opacity-60">
                © {new Date().getFullYear()} ALL RIGHTS RESERVED
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase opacity-60">
                COLOR MODE:
              </span>
              <ColorSchemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
