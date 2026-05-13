import ImpactCard from "./ImpactCard"
const ImpactSection = () => {
  const impacts = [
    {
      title: "Education",
      subtitle: "Computer-Assisted Learning Programs",
      description: "Self-paced, affordable education through digitized curricula on computers. Empowering learners of all ages to access quality education and develop essential skills for the modern world.",
      image: "/card 1.jpg",
      borderColor: "border-blue-400"
    },
    {
      title: "Peacemaking",
      subtitle: "Nonviolence Peace Leadership",
      description: "Values-based peace-leadership workshops and personal transformation programs. Building peaceful communities through conflict resolution, trauma healing, and nonviolent communication.",
      image: "/card2.jpg",
      borderColor: "border-green-400"
    },
    {
      title: "Development",
      subtitle: "Food Security & Economic Projects",
      description: "Practical initiatives like beekeeping projects in Madiany, Kenya. Creating sustainable income opportunities and improving food security through community-driven economic empowerment.",
      image: "/card3.jpg",
      borderColor: "border-orange-400"
    }
  ]

  return (
    <div className="bg-white py-12 px-6">

      {/* Title - full width centered */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Impact Areas</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
          We focus on three interconnected pillars to create sustainable community transformation
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {impacts.map((item, index) => (
          <ImpactCard key={index} {...item} />
        ))}
      </div>

    </div>
  )
}

export default ImpactSection