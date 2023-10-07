"use client";

import { useState } from "react";
import DropDown from "./ui/dropdown";
import NavLogo from "./ui/nav-logo";
import MobileNavElements from "./ui/mobile-nav-elements";
import NavElemnts from "./ui/nav-elements";
import { ChevronRight } from "lucide-react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="relative bg-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-stone-950 py-6 md:justify-start md:space-x-10">
            <NavLogo />
            <div className="-mr-2 -my-2 md:hidden flex flex-row-reverse">
              <button
                type="button"
                className="bg-orange-400 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Button
                rightIcon={<ChevronRight />}
                colorScheme="blue"
                variant="outline"
                onClick={() => {
                  router.replace("/sign-in");
                }}
              >
                SignIn
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <NavElemnts />
              <div className="relative">
                <button
                  type="button"
                  className="group bg-orange-400 rounded-md text-black inline-flex items-center text-base font-medium hover:text-gray-900"
                  onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                >
                  <span>More</span>
                  <svg
                    className={
                      flyerTwo === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  onMouseLeave={() => setFlyerTwo(false)}
                  className={
                    flyerTwo
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <DropDown />
                </div>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button
                rightIcon={<ChevronRight />}
                colorScheme="blue"
                variant="solid"
                onClick={() => {
                  router.push("/sign-up");
                }}
              >
                SignIn
              </Button>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 ">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <NavLogo />
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center
                  text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <MobileNavElements />
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Tifola Tutorial
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pincode Verification
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
