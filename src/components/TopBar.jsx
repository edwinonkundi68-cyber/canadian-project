
import { FaFacebookF, FaYoutube, FaLinkedinIn , FaInstagram} from "react-icons/fa"

const TopBar = () => {
  return (
    <div className="w-full bg-green-600 text-white text-xs">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left - Address */}
        <span className="text-bold ">42123 Millbourne, Edmonton, AB</span>

        {/* Center - Email */}
        <span className="text-bold ">info@canadianpeacemakers.org</span>

        {/* Right - Social Icons */}
        <div className="flex gap-3 items-center">
          <FaFacebookF className="cursor-pointer hover:opacity-75" size={14} />
          <FaYoutube className="cursor-pointer hover:opacity-75" size={14} />
          <FaLinkedinIn className="cursor-pointer hover:opacity-75" size={14} />
          <FaInstagram className="cursor-pointer hover:opacity-75" size={14} />
        </div>

      </div>
    </div>
  )
}

export default TopBar;