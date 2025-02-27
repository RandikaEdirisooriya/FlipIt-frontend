"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, User, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 const navigate=useNavigate()



  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => navigate("/home")}>
              <ChevronLeft className="h-6 w-6" />
              <span className="ml-2 font-medium">Back to FlipIt</span>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <button
              onClick={() => setIsSignInOpen(!isSignInOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <User className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <User className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

     

     
    </nav>
  )
}


