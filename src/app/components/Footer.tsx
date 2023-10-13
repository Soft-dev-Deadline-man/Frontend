"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex justify-center space-x-32 bg-[#276968] p-4">
      <div className="flex flex-col">
        <a className="text-white">Link</a>
        <a className="text-xs text-white p-2">Stays</a>
        <a className="text-xs text-white p-2">Discover</a>
        <a className="text-xs text-white p-2">About us</a>
        <a className="text-xs text-white p-2">Contact</a>
      </div>
      <div className="flex flex-col">
        <a className="text-white">Our Activities</a>
        <a className="text-xs text-white p-2">Ocean Trip</a>
        <a className="text-xs text-white p-2">Shopping</a>
        <a className="text-xs text-white p-2">Historical and Cultural</a>
        <a className="text-xs text-white p-2">Zoo & Water Park & Amusement Park</a>
        <a className="text-xs text-white p-2">Museum and Learning</a>
      </div>
      <div className="flex flex-col">
        <a className="text-white">About Us</a>
        <a className="text-xs text-white p-2">Our Story</a>
        <a className="text-xs text-white p-2">Work with us</a>
      </div>
      <div className="flex flex-col">
        <a className="text-white">Contact</a>
        <a className="text-xs text-white p-2">Address : Chonburi 101010</a>
        <a className="text-xs text-white p-2">Phone : 099-9999999</a>
        <a className="text-xs text-white p-2">Email : roadtripinchon@gmail.com</a>
        <a className="text-xs text-white p-2">Maps : Chonburi City,Thailand</a>
      </div>
    </div>
    
  )
}
