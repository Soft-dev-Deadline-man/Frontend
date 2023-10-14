import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMap,
  faStar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Search() {
  return (
    <div className=" justify-center flex mt-8 mb-16 text-xs font-light flex-wrap flex-row items-center gap-10 text-black bg-white p-2 px-4 rounded-md">
      <Link href="#">
        <FontAwesomeIcon icon={faCreditCard} />
        <span className="ml-2">Categories</span>
      </Link>
      <span>|</span>
      <Link href="#">
        <FontAwesomeIcon icon={faStar} />
        <span className="ml-2">Popular</span>
      </Link>
      <div className="">
        <span>|</span>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link href="#">
          <FontAwesomeIcon icon={faMap} />
          <span className="ml-2">Map</span>
        </Link>
        <Link href="#" className="p-2 px-4 bg-[#29AAA8] rounded-sm">
          <span className="mr-2">Search</span>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
      </div>
    </div>
  );
}
