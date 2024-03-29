import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import { Tabs } from "../components/Tabs";
import {
  CARBON_PLANTER_SC,
  DOWN_ICON,
  HIGHT_TABLE_SC,
  INBOX_IMAGE,
  LINK_ICON,
  ME_IMAGE,
  PLAYHQ_SC,
  WAVE_IMAGE,
} from "../utils/assets";

const Home: NextPage = () => {
  const scrollToAboutMe = () => {
    console.log("scroll");

    document.querySelector("#about-me")?.scrollIntoView();
  };

  return (
    <div>
      <Head>
        <title>Sujitha Wijewantha</title>
        <meta name="description" content="Sujitha Wijewantha" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main className="mb-28">
        <Navbar />
        <div className="container">
          <div className="pt-60 h-screen flex flex-col">
            <div
              data-aos-delay="50"
              data-aos="fade-up"
              className="flex gap-2 items-center text-secondary text-xl"
            >
              Hello there{" "}
              <Image width="20" height="20" src={WAVE_IMAGE} alt="👋" /> {"I'm"}
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-name-gradient text-6xl font-semibold  "
            >
              Sujitha Wijewantha
            </div>
            <div data-aos-delay="150" data-aos="fade-up" className="text-3xl  ">
              I make stuff for the web
            </div>
            <div
              data-aos-delay="200"
              data-aos="fade-up"
              className="mt-2 text-xl"
            >
              {"I'm "}a software engineer that specializes in building amazing
              products. {"I'm"} currently focussed on creating amazing
              experiences with web3
            </div>
            <div
              className="w-full flex justify-center mt-auto mb-10 cursor-pointer"
              onClick={scrollToAboutMe}
            >
              <Image
                className="animate-bounce filter-gray-color "
                src={DOWN_ICON}
                alt="Click Me"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" id="about-me">
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
                    development as well. Today right now {"I'm"} focussed on
                    building experiences with Web3 after experimenting with
                    Anchor on Solana.
                  </div>
                </div>
                <div className="rounded-md h-52 w-52 overflow-clip flex justify-center">
                  <Image objectFit="cover" src={ME_IMAGE} alt="head image" />
                </div>
              </div>
              <div className="mt-5 font-medium">
                    Here are a few technologies and tools that I have worked
                    with
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    <div>
                      <div className="font-bold">Frontend</div>
                      <ul className="grid grid-cols-4 list-outside arrow-list">
                        <ol>React</ol>
                        <ol>Angular</ol>
                        <ol>Tailwind</ol>
                        <ol>Flutter</ol>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold">Backend</div>
                      <ul className="grid grid-cols-4 list-outside arrow-list">
                        <ol>Anchor</ol>
                        <ol>Solana</ol>
                        <ol>NestJS</ol>
                        <ol>Postgres</ol>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold">Infrastructure</div>
                      <ul className="grid grid-cols-4 list-outside arrow-list">
                        <ol>Cloud Build</ol>
                        <ol>Github Actions</ol>
                        <ol>Railway</ol>
                        <ol>GCP App Engine</ol>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-10"
            id="experience"
          >
            <div className="text-3xl font-medium  pt-20">Experience</div>
            <div className="mt-8">
              <Tabs names={["Enactor", "Affno"]}>
                <Tabs.Panel>
                  <div>Software Engineer 2021 - Current</div>
                  <ul className="mt-4 list-disc list-outside pl-5">
                    <li>
                      Migrating existing features in legacy POS to the Enactors
                      ReactPOS
                    </li>
                    <li>Added new data preprocessors for the platform</li>
                    <li>
                      Contributed in helping streamlining the styling system
                      used in the ReactPos
                    </li>
                    <li>Automation for existing features for the React POS</li>
                  </ul>
                </Tabs.Panel>
                <Tabs.Panel>
                  <div>Junior Software Engineer 2019 -2020</div>
                  <ul className="mt-4 list-disc list-outside pl-5">
                    <li>
                      Worked as a part of the web and solutions based team
                    </li>
                    <li>
                      Performed development work with industry standards and
                      best practices in mind
                    </li>
                    <li>
                      Gained knowledge in the Web, Mobile and Server-side
                      development by working on different frameworks such as
                      Ionic, Laravel, Express
                    </li>
                    <li>
                      Worked on multiple projects in areas such as Frontend
                      Integration and Implementation (REST API, HTML, CSS)
                    </li>
                    <li>
                      Created multiple chatbots for a better customer experience
                      in websites
                    </li>
                  </ul>
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-10"
            id="my-work"
          >
            <div className="text-3xl font-medium  pt-20">
              Cool Stuff {"I've"} Built
            </div>
            <div className="mt-10 space-y-10">
              <WorkCard
                title="High Table Society"
                description="An interactive story powered by web3 that changes its narrative based on the communities decisions"
                image={HIGHT_TABLE_SC}
                link="https://hightablesociety.com"
                position="LEFT"
                stack="React | Tailwind | Anchor"
              />
              <WorkCard
                description="A platform that aims on making events carbon neutral by gifting atenddees digital trees"
                image={CARBON_PLANTER_SC}
                link="https://app.carbonplanter.com/"
                position="RIGHT"
                stack="React | Tailwind"
                title="Carbon Planter"
              />
              <WorkCard
                title="PlayHQ"
                description="Platform that focuses on connecting gamers to discover  and trade games easily"
                image={PLAYHQ_SC}
                position="LEFT"
                stack="Flutter | NestJS | Railway | Firebase"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="pt-40"
            id="contact-me"
          >
            <div className="text-4xl font-medium text-center">
              Interested in working with me
            </div>
            <div className="text-center max-w-[400px] mx-auto mt-5 text-secondary">
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
        <div className="text-secondary text-center">
          Designed and developed By Sujitha Wijewantha
        </div>
      </footer>
    </div>
  );
};

interface WorkCard {
  stack: string;
  title: string;
  image: StaticImageData | string;
  description: string;
  position: "LEFT" | "RIGHT";
  link?: string;
}
export const WorkCard: React.FC<WorkCard> = ({
  description,
  position,
  stack,
  title,
  link,
  image,
}) => {
  return (
    <div
      className={`flex items-center relative flex-col ${
        position === "RIGHT" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="brightness-[0.4] hover:brightness-100 transition-all rounded-md overflow-hidden max-h-64 max-w-md">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={image} alt="" />
          </a>
        ) : (
          <Image src={image} alt="" />
        )}
      </div>
      <div
        className={`md:absolute bg-secondary-black rounded-md px-4 py-5 h-fit md:w-2/4 ${
          position === "RIGHT" ? "left-0" : "right-0"
        }`}
      >
        <div className="flex justify-between">
          <div className="font-medium text-xl">{title}</div>
          <div className="relative">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image src={LINK_ICON} width={15} height={15} alt="link" />
              </a>
            )}
          </div>
        </div>
        <div className="text-base mt-4">{description}</div>
        <div className="text-gray-600 mt-2">{stack}</div>
      </div>
    </div>
  );
};

export default Home;
