import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray-200 py-20 px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <img src="/logo-cpi-icon.png" alt="logo" className="h-12 mb-3" />
          <p className="text-xs text-gray-500 leading-relaxed">
            Building peace and empowering communities in Sub-Saharan Africa 
            through education, nonviolence, and sustainable development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm mb-3">Quick Links</h4>
          <ul className="text-xs text-gray-500 space-y-2">
            <li className="cursor-pointer hover:text-green-700">About Us</li>
            <li className="cursor-pointer hover:text-green-700">CAL In Honduras</li>
            <li className="cursor-pointer hover:text-green-700">CAL In Congo</li>
            <li className="cursor-pointer hover:text-green-700">CAL In Kenya</li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-bold text-sm mb-3">Get Involved</h4>
          <ul className="text-xs text-gray-500 space-y-2">
            <li className="cursor-pointer hover:text-green-700">Contact Us</li>
            <li className="cursor-pointer hover:text-green-700">Donate</li>
            <li className="cursor-pointer hover:text-green-700">Partner With Us</li>
            <li className="cursor-pointer hover:text-green-700">Sponsor a Program</li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h4 className="font-bold text-sm mb-3">Stay Updated</h4>
          <p className="text-xs text-gray-500 mb-3">
            Subscribe to our newsletter for latest updates and stories
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-3 py-2 text-xs mb-2 outline-none bourder-gray-600 rounded"
          />
          <button className="w-full bg-green-600 text-white py-2 text-xs hover:bg-green-700 bourder border-green-600 rounded    ">
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t pt-4">
        © 2026 Canadian Peacemakers International. All rights reserved.By Edwin Onkundi.
        <pre/>
        <span className="ml-4 text-green-600 cursor-pointer">Privacy Policy</span>
        <span className="ml-4 text-green-600 cursor-pointer">Terms of Service</span>
      </div>

    </div>
  )
}

export default Footer