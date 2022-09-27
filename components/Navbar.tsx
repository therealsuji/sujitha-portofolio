import { useState, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Button } from "./Button";

const navigation = [
  { name: "About Me", href: "#about-me" },
  { name: "Experience", href: "#experience" },
  { name: "My Work", href: "#my-work" },
  { name: "Contact Me", href: "#contact-me" },
];

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const stopMobileScroll = (isClosed: boolean) => {
    setIsMobileOpen(!isClosed);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isClosed ? "auto" : "hidden";
    }
  };

  return (
    <>
      <Disclosure
        as="nav"
        className={`flex justify-center transition-all w-full fixed bg-background bg-opacity-80 backdrop-filter backdrop-blur-xl pb-4 z-50 flex-col md:flex-row ${
          visible ? "top-0" : "-top-40"
        }`}
      >
        {({ open }) => (
          <>
            <div className={`max-w-4xl w-full pt-5`}>
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    onClick={() => stopMobileScroll(open)}
                    className="ml-10  inline-flex items-center justify-center rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className={`ham hamRotate h-10 ham1 ${
                        open ? "active" : ""
                      }`}
                      viewBox="0 0 100 100"
                    >
                      <path
                        className="line top"
                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                      />
                      <path className="line middle" d="m 30,50 h 40" />
                      <path
                        className="line bottom"
                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                      />
                    </svg>
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block w-full">
                    <div className="flex justify-between">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={
                              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            }
                            aria-current="page"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="mycv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="p-2">Resume</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              enter="transition-all overflow-hidden duration-200 ease-out"
              enterFrom="h-0 opacity-0"
              enterTo="h-60 opacity-100"
              leave="transition-all overflow-hidden duration-200 ease-out"
              leaveFrom="h-60 opacity-100"
              leaveTo="h-0 opacity-0"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-10 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700   hover:text-white block py-2 rounded-md text-base font-medium"
                      aria-current="page"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <a href="mycv.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="p-2 mt-3">Resume</Button>
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <div
        className={`fixed ${
          !isMobileOpen ? "hidden" : ""
        } md:hidden  inset-0 bg-black/30 z-10`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        aria-hidden="true"
      />
    </>
  );
}
