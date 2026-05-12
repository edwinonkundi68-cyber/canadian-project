const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-3 ">Educate. Empower. Build Peace</h1>
        <p className="text-sm max-w-xl mx-auto mb-5">
          Our computer-assisted learning (CAL) programs, peacemaking initiatives, and development support work together to create resilient, just, and content shalom communities
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-medium">
          Learn More →
        </button>
      </div>
    </div>
  )
}

export default Hero