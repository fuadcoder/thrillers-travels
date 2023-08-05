"use client";
import Data from "@/components/Data";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


export default function Home() {
  return (
    <main className=" lg:my-10 sm:w-[900px] md:mx-auto">
      <div className="grid xl:grid-cols-[400px_minmax(900px,_1fr)_100px] sm:grid-cols-[400px_minmax(900px,_1fr)_100px] sm:max-w-2xl xs:grid-cols-1 border xl:m-5">
      <div className="bg-blue-50">
      <Link href="/">
        <img
          src="https://www.thrillerstravels.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftt_blue_logo_with_text.3a2bb0cc.png&w=256&q=75"
          className="h-8 m-6"
          alt="logo"
        />
        </Link>

        <Navbar />
        <div className="ml-6 leading-7 pb-6">
          <p className="text-lg font-medium text-slate-600 leading-7">
            Best train deals with <br />
            <span className="text-xl text-blue-800 font-bold">
              Thrillers Travels
            </span>
          </p>
        </div>
        <Form />
      </div>
      <div className="bg-slate-100 border border-l-slate-300 w-[625px]">
        <div className="flex justify-between mx-4 max-w-6xl sm:mx-auto items-center py-6 cursor-pointer">
          <p className="text-lg ml-4 font-medium text-slate-600 hover:text-blue-500 transition duration-150 ease-in-out">
            Search results
            <br />{" "}
            <span className="text-sm font-normal text-slate-500">
              We found 12 results
            </span>
          </p>
          <div className="flex items-center mr-4 space-x-2">
            <span className="text-xs font-medium text-slate-500 bg-white py-2 px-3 rounded-xl shadow-lg uppercase hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out">
              Cheapest
            </span>
            <span className="text-xs font-medium text-slate-500 bg-white py-2 px-3 rounded-xl shadow-lg uppercase hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out">
              Shortest
            </span>
            <span className="text-xs font-medium text-white bg-blue-500 py-2 px-3 rounded-xl shadow-lg uppercase">
              Recommended
            </span>
          </div>
        </div>

        <div className="flex mx-4 items-center space-x-3 text-slate-600 mb-6">
          <span className="text-lg font-medium ">London</span>

          <BiRightArrowAlt className="text-2xl text-slate-500" />

          <span className="text-lg font-medium">New York</span>
        </div>
        <Data />
      </div>
      </div>
    </main>
  );
}
