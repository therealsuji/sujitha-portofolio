import React, { Suspense } from "react";
import Image from "next/image";
import { ME_IMAGE } from "../utils/assets";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import { Metadata } from "next";
import PostList from "./PostList";
import Spinner from "./components/Spinner";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Sujitha Wijewantha | Fullstack Engineer",
  description:
    "Fullstack engineer specializing in building robust web experiences with modern tech",
};

const techStack = [
  { name: "REACT/NEXT", color: "bg-primary" },
  { name: "TYPESCRIPT", color: "bg-secondary" },
  { name: "NODE/NEST", color: "bg-accent" },
  { name: "TAILWIND", color: "bg-brutal-green" },
  { name: "POSTGRESQL", color: "bg-brutal-purple" },
  { name: "AWS/GCP", color: "bg-brutal-yellow" },
];

const experience = [
  {
    id: "current",
    company: "ENACTOR",
    role: "SOFTWARE ENGINEER",
    period: "2021 - CURRENT",
    description: [
      "MIGRATING LEGACY POS TO REACT-BASED SYSTEM",
      "BUILDING DATA PREPROCESSORS FOR PLATFORM",
      "STREAMLINING DESIGN SYSTEM ARCHITECTURE",
      "AUTOMATING TESTING FOR REACT POS",
    ],
  },
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
        <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20">
          <AboutMe />
        </div>

        {/* About Section */}
        <section id="about-me" className="px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display brutal-heading mb-12 brutal-shadow">
              ABOUT<span className="text-primary">/</span>ME
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="brutal-card p-6">
                  <p className="font-mono text-lg leading-relaxed">
                    CREATIVE ENGINEER WHO LOVES CRAFTING AMAZING WEB
                    EXPERIENCES. STARTED WITH GAME DEVELOPMENT, FELL IN LOVE
                    WITH SOFTWARE.
                  </p>
                </div>

                <div className="brutal-card p-6">
                  <p className="font-mono text-lg leading-relaxed">
                    FROM UNITY TO UNREAL, FLUTTER TO ANGULAR, FRONTEND TO
                    BACKEND - I BUILD COMPLETE APPLICATION EXPERIENCES.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-mono uppercase brutal-shadow-sm">
                    TECH<span className="text-primary">/</span>STACK
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className={`${tech.color} text-black px-4 py-2 brutal-border brutal-box-shadow-sm font-mono text-sm font-bold text-center hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer`}
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 brutal-border brutal-box-shadow overflow-hidden bg-card">
                    <Image
                      src={ME_IMAGE}
                      alt="Sujitha Wijewantha"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="px-6 md:px-12 lg:px-20 py-20 bg-muted"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display brutal-heading mb-12 brutal-shadow">
              WORK<span className="text-primary">/</span>EXPERIENCE
            </h2>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={job.id}
                  className="brutal-card p-6 bg-background hover:translate-x-2 transition-transform"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold uppercase">
                        <span className="text-primary">
                          {String(index + 1).padStart(2, "0")}.
                        </span>{" "}
                        {job.company}
                      </h3>
                      <p className="font-mono text-lg mt-1">{job.role}</p>
                    </div>
                    <span className="font-mono text-sm bg-brutal-yellow text-black px-3 py-1 brutal-border mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="font-mono flex items-start">
                        <span className="text-primary mr-3">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects/Blog Section */}
        <section id="cool-stuff" className="px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display brutal-heading mb-12 brutal-shadow">
              COOL<span className="text-primary">/</span>STUFF
            </h2>

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
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center font-mono">
          <p className="text-sm uppercase">
            DEVELOPED BY{" "}
            <span className="font-bold text-primary">SUJITHA WIJEWANTHA</span>
          </p>
          <p className="text-xs mt-2 opacity-60">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
