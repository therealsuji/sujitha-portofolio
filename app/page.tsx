import React, { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/Tabs";
import { ME_IMAGE, INBOX_IMAGE, LINK_ICON } from "../utils/assets";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import { Metadata } from "next";
import PostList from "./PostList";
import Spinner from "./components/Spinner";

export const metadata: Metadata = {
  title: "Sujitha Wijewantha",
};

const Index = () => {
  return (
    <>
      <main className="mb-28">
        <Navbar />
        <div className="container">
          <div className="pt-60 h-screen flex flex-col">
            <AboutMe />
          </div>
          <div id="about-me">
            <h2 className="text-3xl font-medium pt-20">About Me</h2>
            <div>
              <div className="flex justify-between pt-10 md:flex-row flex-col items-center md:items-start gap-10">
                <div className="max-w-lg">
                  <div>
                    Hi there, {"I'm"} Sujitha. Creative engineer that loves
                    making amazing experiences in the web. I started my
                    engineering journey from game development when i was school.
                    After playing around with Unity and Unreal Engine i fell in
                    love with software engineering. In university i explored
                    designing and developing mobile apps using flutter and
                    making web apps using Angular. When i wanted to complete the
                    app experience thats when i wanted to get into backend
                    development as well.
                  </div>
                </div>
                <div className="rounded-md h-52 w-52 overflow-clip flex justify-center relative">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={ME_IMAGE}
                    alt="head image"
                  />
                </div>
              </div>
              <div className="mt-5 font-medium">
                Here are a few technologies and tools that I love to work with:
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div>
                  <ul className="grid grid-cols-4 list-outside arrow-list">
                    <ol>React</ol>
                    <ol>NextJS</ol>
                    <ol>Tailwind</ol>
                    <ol>NestJS</ol>
                    <ol>Angular</ol>
                    <ol>Flutter</ol>
                    <ol>Elastic Bean Stalk</ol>
                    <ol>S3, GCP buckets</ol>
                    <ol>GCP App Engine</ol>
                    <ol>Railway (❤️)</ol>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10" id="experience">
            <div className="text-3xl font-medium  pt-20">Experience</div>
            <div className="mt-8">
              <Tabs defaultValue="freeLancer">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="freeLancer">Free Lancing</TabsTrigger>
                  <TabsTrigger value="enactor">Enactor</TabsTrigger>
                  <TabsTrigger value="Affno">Affno</TabsTrigger>
                </TabsList>
                <TabsContent value="freeLancer">
                  <ul className="mt-4 list-disc list-outside pl-5">
                    <li>
                      Created a multi-tenant website for a Taxi Service
                      <ul className="list-disc list-outside pl-5">
                        <li>
                          Application uses NextJs for the FrontEnd and NestJs
                          for the backend
                        </li>
                        <li>Hosted on AWS EBS</li>
                        <li>CI-CD using codepipeline</li>
                      </ul>
                    </li>
                    <li>
                      Multiple NextJS based BackOffice applications and RestApis
                      for various clients
                      <ul className="list-disc list-outside pl-5">
                        <li>Hosted on Railway</li>
                        <li>OpenAPI exposed using TRPC OpenAPI</li>
                      </ul>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="enactor">
                  <div>Software Engineer 2021 - Current</div>
                  <ul className="mt-4 list-disc list-outside pl-5">
                    <li>
                      Migrating existing features in legacy POS to the Enactors
                      new ReactPOS
                    </li>
                    <li>
                      Upgrading new data preprocessors for the platform pos
                    </li>
                    <li>
                      Contributed in helping streamlining the styling system
                      used in the ReactPos
                    </li>
                    <li>Automation for existing features for the React POS</li>
                  </ul>
                </TabsContent>
                <TabsContent value="Affno">
                  <div>Junior Software Engineer 2019 -2020</div>
                  <ul className="mt-4 list-disc list-outside pl-5">
                    <li>
                      Worked as a part of the web and solutions based team
                    </li>
                    <li>
                      Gained knowledge in the Web, Mobile and Server-side
                      development by working on different frameworks such as
                      Ionic, Laravel, Express
                    </li>
                    <li>
                      Worked on creating a diary and event management app using
                      Ionic and Angular
                    </li>
                    <li>
                      Created a uber eats like mobile client using Ionic and
                      Angular
                    </li>
                    <li>
                      Worked on multiple projects in areas such as Frontend
                      Integration and Implementation (REST API, HTML, CSS)
                    </li>
                    <li>
                      Created multiple chatbots using dialogFlow for a better
                      customer experience for multiple banking websites
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="mt-10" id="cool-stuff">
            <div className="text-3xl font-medium  pt-20">Cool Stuff</div>
            <Suspense
              fallback={
                <div className="mt-2">
                  <Spinner />
                </div>
              }
            >
              <PostList />
            </Suspense>
          </div>
          <div className="pt-40" id="contact-me">
            <div className="text-4xl font-medium text-center">
              Interested in working with me
            </div>
            <div className="text-center max-w-[400px] mx-auto mt-5">
              Do you have a cool idea, want to hire me for an interesting
              project my inbox is open below :)
            </div>
            <div className="flex items-center mt-4 flex-col gap-4">
              <a href="mailto:sujithawijewantha@gmail.com">
                <Button className="flex items-center gap-2">
                  Ping me{" "}
                  <Image width="20" height="20" src={INBOX_IMAGE} alt="📥" />
                </Button>
              </a>
              <a
                className="md:hidden"
                href="mycv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-8 py-4 w-full">Resume</Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="my-10">
        <div className="text-center">
          Designed and developed By Sujitha Wijewantha
        </div>
      </footer>
    </>
  );
};

export default Index;
