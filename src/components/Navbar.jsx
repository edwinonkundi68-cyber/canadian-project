import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <img src="/logo-cpi-icon.png" alt="logo" className="h-12 w-auto" />

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
          <li className="text-green-700 font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us ▾</li>
          <li className="cursor-pointer">CAL Hubs ▾</li>
          <li className="cursor-pointer">News</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        {/* Donate Button - desktop only */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-700">
          Donate Now
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium text-gray-700 border-t pt-4">
          <span className="text-green-700 font-semibold cursor-pointer">Home</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">CAL Hubs</span>
          <span className="cursor-pointer">News</span>
          <span className="cursor-pointer">Contact Us</span>
          <button className="bg-green-600 text-white px-5 py-2 rounded text-sm font-semibold">
            Donate Now
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar