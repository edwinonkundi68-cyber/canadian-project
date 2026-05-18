import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md px-6 py-3"> 
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="/logo-cpi-icon.png" alt="logo" className="h-12 w-auto" />
        </Link>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
          <li><Link to="/" className="text-green-700 font-semibold">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-700">About Us</Link></li>
          <li><Link to="/cal-hubs" className="hover:text-green-700">CAL Hubs</Link></li>
          <li><Link to="/news" className="hover:text-green-700">News</Link></li>
          <li><Link to="/contact" className="hover:text-green-700">Contact Us</Link></li>
        </ul>

        {/* Donate Button */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-700">
          Donate Now
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium border-t pt-4">
          <Link to="/" className="text-green-700 font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-gray-700" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/cal-hubs" className="text-gray-700" onClick={() => setIsOpen(false)}>CAL Hubs</Link>
          <Link to="/news" className="text-gray-700" onClick={() => setIsOpen(false)}>News</Link>
          <Link to="/contact" className="text-gray-700" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <button className="bg-green-600 text-white px-5 py-2 rounded text-sm font-semibold">
            Donate Now
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar