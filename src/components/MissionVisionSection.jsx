const MissionVisionSection = () => {
  return (
    <div className="bg-white py-10 px-10">
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">

        {/* Mission Card */}
        <div className="flex-1 border border-gray-900 p-6 rounded">
          <h2 className="text-base font-bold mb-3 text-3xl">Our Mission</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            To partner with individuals and local communities facing violence and
            poverty to enhance access to appropriate education, foster personal
            peace-leadership, improve food security, and create economic
            opportunities that lead to self-sufficiency.
          </p>
        </div>

        {/* Vision Card */}
        <div className="flex-1 border border-gray-900 p-6 rounded">
          <h2 className="text-base font-bold mb-3 text-3xl">Our Vision</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A world where all people in violence-affected, impoverished, and
            underdeveloped communities can live in dignity, security, and
            well-being.
          </p>
        </div>

      </div>
    </div>
  )
}

export default MissionVisionSection