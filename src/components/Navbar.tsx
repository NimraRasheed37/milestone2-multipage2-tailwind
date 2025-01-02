'use client';

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaList, FaBars, FaRocket } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Recipes", path: "/recipes", icon: <FaList /> },
    { name: "Sign Up", path: "/signup", icon: <FaRocket /> },
  ];

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 sm:px-14 py-3">
        <Link href="/" className="text-xl font-bold text-pink-600">
          F<span className="text-black">oo</span>dily Ever After
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`uppercase text-sm tracking-wide px-3 py-2 relative ${
                pathname === link.path
                  ? "font-bold text-pink-600"
                  : "text-gray-500"
              } hover:text-pink-600`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-pink-600 transform scale-x-0 ${
                  pathname === link.path ? "scale-x-100" : ""
                } transition-transform duration-300`}
              ></span>
            </Link>
          ))}
        </div>
        <button
          onClick={toggleSidebar}
          className="block md:hidden text-gray-800"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="text-right p-4">
          <button
            onClick={closeSidebar}
            className="text-lg font-bold text-gray-800"
          >
            ×
          </button>
        </div>
        <div className="space-y-4 px-6">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              onClick={closeSidebar}
              className={`flex items-center space-x-3 px-4 py-2 text-lg ${
                pathname === link.path
                  ? "border-l-4 border-pink-600 text-pink-600"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              <span className="text-gray-600">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
}
