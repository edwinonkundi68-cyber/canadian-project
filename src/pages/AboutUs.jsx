 import{Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Navigation ,Pagination } from "swiper/modules" 
 import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TopBar from "../components/TopBar"

function AboutUs() {
  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero */}
          <div className="bg-blue-50 py-17 text-center px-17">
        <h1 className="text-3xl font-bold mb-2">
          About Canadian Peacemakers International
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Committed to nonviolent peace-building and sustainable community
          development since 2009
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-20 px-20">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-700 rounded p-15 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Our Mission</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Canadian Peacemakers International partners with individuals and
              local communities facing violence and poverty to enhance access to
              appropriate education, foster personal peace-leadership, improve
              food security, and create economic opportunities that lead to
              self-sufficiency.
            </p>
          </div>
          <div className="bg-white border border-gray-700 rounded p-15 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Our Vision</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We envision a world where all people in violence-affected,
              impoverished, and underdeveloped communities can live in dignity,
              security, and well-being.
            </p>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="bg-gray-50 py-12 px-15">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Our Journey</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-10"></div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start">
              <div className="flex-1"></div>
              <div className="flex flex-col items-center mx-4">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center font-bold text-sm">2009</div>
                <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
              </div>
              <div className="flex-1 bg-gray-100 p-10 rounded shadow-sm">
                <h3 className="font-bold mb-2">Launch in Honduras</h3>
                <p className="text-sm text-gray-600">Canadian Peacemakers International began its CAL program in Honduras, pioneering self-paced digital education for underserved communities.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-1 bg-gray-100 p-10 rounded shadow-sm text-right">
                <h3 className="font-bold mb-2">Expansion to Africa</h3>
                <p className="text-sm text-gray-600">Expanded operations to DRC, Rwanda, Kenya, and Tanzania establishing partnerships with local communities.</p>
              </div>
              <div className="flex flex-col items-center mx-4">
                <div className="w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold text-sm">2021</div>
                <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex items-start">
              <div className="flex-1"></div>
              <div className="flex flex-col items-center mx-4">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center font-bold text-white text-sm">Today</div>
              </div>
              <div className="flex-1 bg-gray-100 p-10 rounded shadow-sm">
                <h3 className="font-bold mb-2">Focus on Sub-Saharan Africa</h3>
                <p className="text-sm text-gray-600">Now operating primarily in Sub-Saharan Africa with key hubs in Kenya running CAL education and peace leadership programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
<div className="bg-white py-12 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-2">Our Core Values</h2>
    <div className="w-16 h-1 bg-green-600 mx-auto mb-10"></div>

    <Swiper
      modules={[Navigation,Pagination]}
      spaceBetween={20}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        { title: "Justice and Peace", text: "At CPI, we are commitment to fairness, reconciliation, and peaceful resolution of conflict." },
        { title: "Missional Servant Leadership", text: "Leadership expressed through purposeful service modeled on Christ and other servant leaders." },
        { title: "Dignity and Respect for All", text: "Every person is made in the image of God and deserves respect regardless of background." },
        { title: "Holistic Empowerment", text: "Empowering individuals and communities socially, economically and spiritually for long-term sustainability." },
        { title: "Innovation Rooted in Context", text: "Creativity must be culturally appropriate and rooted in local knowledge and wisdom." },
        { title: "Partnership & Collaboration", text: "Mutual accountability among local NGOs, governments, and community stakeholders." },
        { title: "Stewardship & Accountability", text: "Responsible management of resources, finances, and relationships." },
        { title: "Hope & Transformation", text: "Belief in potential for positive change inspired by spiritual faith." },
        { title: "Faith & Spiritual Integrity", text: "Our work is rooted in strong belief in God working for a greater purpose." },
        { title: "Learning & Adaptability", text: "Continuous improvement informed by local feedback, monitoring, and faith-reflection." },
      ].map((value, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 border border-gray-100 rounded shadow-sm min-h-48">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-700 font-bold text-lg">✦</span>
            </div>
            <h3 className="font-bold text-sm mb-2">{value.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{value.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
      {/* Our Approach */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Our Approach</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          <div className="border border-gray-600 rounded p-8 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              At CPI, we believe in <strong>community-driven, values-based solutions.</strong> We
              partner with local communities to co-create sustainable paths forward.
            </p>
            <ul className="text-sm text-gray-600 leading-relaxed space-y-2">
              <li>• <strong>Innovative Education:</strong> Using CAL to make quality education accessible for all ages.</li>
              <li>• <strong>Personal Peace-Leadership:</strong> Fostering nonviolent conflict resolution and trauma healing.</li>
              <li>• <strong>Economic Empowerment:</strong> Creating opportunities for food security and income generation.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUs