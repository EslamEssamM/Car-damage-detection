// src/components/Navbar.tsx
import React from "react";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/shared/ModeToggle";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Car Damage Detector
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">
            اكتشاف الأضرار
          </Link>
          <Link to="/report" className="hover:text-gray-300">
            الابلاغ
          </Link>
          <Link to="/cars" className="hover:text-gray-300">
             السيارات
          </Link>
          <Link to="/warranty" className="hover:text-gray-300">
            شركات التأمين
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
