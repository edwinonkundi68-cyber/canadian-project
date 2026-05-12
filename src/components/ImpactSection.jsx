import ImpactCard from "./ImpactCard"

const ImpactSection = () => {
  const impacts = [
    {
      title: "Education",
      subtitle: "Computer-Assisted Learning Programs",
      description: "Self-paced, affordable education through digitized curricula on computers. Empowering learners of all ages to access quality education and develop essential skills for the modern world.",
      image: "/card 1.jpg",
      borderColor: "border-purple-600"
    },
    {
      title: "Peacemaking",
      subtitle: "Nonviolence Peace Leadership",
      description: "Values-based peace-leadership workshops and personal transformation programs. Building peaceful communities through conflict resolution, trauma healing, and nonviolent communication.",
      image: "/card2.jpg",
      borderColor: "border-green-600"    
    },
    {
      title: "Development",
      subtitle: "Food Security & Economic Projects",
      description: "Practical initiatives like beekeeping projects in Madiany, Kenya. Creating sustainable income opportunities and improving food security through community-driven economic empowerment.",
      image: "/card3.jpg",
      borderColor: "border-orange-600"  
    }
  ]

  return (
    <div className="bg-white py-12 px-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Impact Areas</h2>
        <p className="text-sm text-gray-500 mt-2">
          We focus on three interconnected pillars to create sustainable community transformation
        </p>
      </div>

      <div className="flex gap-6 max-w-5xl mx-auto">
        {impacts.map((item, index) => (
          <ImpactCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ImpactSection