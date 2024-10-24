// src/components/Navbar.tsx
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Car Damage Detector
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/detection" className="hover:text-gray-300">
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
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/detection" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">
              اكتشاف الأضرار
            </Link>
            <Link to="/report" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">
              الابلاغ
            </Link>
            <Link to="/cars" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">
              السيارات
            </Link>
            <Link to="/warranty" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">
              شركات التأمين
            </Link>
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}