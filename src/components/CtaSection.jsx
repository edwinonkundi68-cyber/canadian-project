const CtaSection = () => {
  return (
    <div className="bg-green-600 py-14 px-10 text-center text-white">

      <h2 className="text-2xl font-bold mb-3">
        Join Us in Making a Difference
      </h2>

      <p className="text-sm mb-8 max-w-xl mx-auto">
        Your support can transform lives and build peaceful, thriving 
        communities. Together, we can create lasting change.
      </p>

      <div className="flex gap-4 justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded font-medium text-sm">
          Donate Now
        </button>
        <button className="text-white hover:bg-gray-200 px-10 py-4 rounded font-medium text-sm">
          Partner With Us
        </button>
      </div>

    </div>
  )
}

export default CtaSection