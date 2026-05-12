import { useState } from "react"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <nav className="bg-white shadow-md px-6 py-6 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="\logo-cpi-icon.png" alt="logo" className="h-12 w-auto" />
      </div>

      {/* Nav Links */}
      <ul className="flex gap-6 text-sm font-medium text-gray-700 items-center">
        <li className="text-green-700 font-semibold cursor-pointer">Home</li>

        <li className="relative cursor-pointer" onClick={() => toggleDropdown("about")}>
          <span>About Us ▾</span>
        </li>

        <li className="relative cursor-pointer" onClick={() => toggleDropdown("cal")}>
          <span>CAL Hubs ▾</span>
        </li>

        <li className="cursor-pointer">News</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>

      {/* Donate Button */}
      <button className="bg-green-600 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-700">
        Donate Now
      </button>

    </nav>
  )
}

export default Navbar