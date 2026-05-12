const ImpactCard = ({ title, subtitle, description, image, borderColor }) => {
  return (
    <div className={`flex-2 ${borderColor} border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md`}>
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-xs text-green-700 font-medium mb-3">{subtitle}</p>
        <p className="text-xs text-gray-600 leading-relaxed flex-1">{description}</p>
        <p className="text-green-600 text-sm mt-4 cursor-pointer hover:underline">
          Learn More →
        </p>
      </div>
    </div>
  )
}

export default ImpactCard