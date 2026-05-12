const NewsLetter = () => {
  return (
    <div className="bg-white py-14 px-10 text-center ">

      <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
      <p className="text-sm text-gray-500 mb-6">
        Subscribe to our newsletter for inspiring stories, project updates, 
        and ways to get involved.
      </p>

      <div className="max-w-lg mx-auto flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-700 px-4 py-3 text-sm outline-none rounded"
        />
        <button className="w-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-400 border border-gray-900 rounded">
          Subscribe →
        </button>
      </div>

    </div>
  )
}

export default NewsLetter