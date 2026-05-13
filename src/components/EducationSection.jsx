const EducationSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* Left - Text */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 leading-snug">
            CAL Education: Empowering Communities in Sub-Saharan Africa
            through CAL education for peace
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover how Computer-Assisted Learning (CAL) is providing access to
            education and peace-building to communities across Sub-Saharan Africa.
            Watch our vision for empowering learners and creating lasting change by
            2031.
          </p>
        </div>

        {/* Right - YouTube Video */}
        <div className="flex-1">
          <iframe
            className="w-full h-52 border border-gray-300 rounded"
            src="https://www.youtube.com/embed/5jK75vSX5PE"
            title="CAL for Africa Vision"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  )
}

export default EducationSection