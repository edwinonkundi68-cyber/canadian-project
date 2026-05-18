  import { Swiper , SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { FaBalanceScale, FaCog, FaCrown,FaHandsHelping, FaLightbulb, FaHandshake, FaShieldAlt,FaStar, FaCross, FaBook  } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TopBar from "../components/TopBar"

function AboutUs() {
  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <div className="bg-blue-100 py-20 text-center px-6 shadow-md-top-downshadow">
        <h1 className="text-3xl font-bold mb-2">
          About Canadian Peacemakers International
        </h1>
        <div className="w-30 h-1 bg-green-600 mx-auto mb-4"></div>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Committed to nonviolent peace-building and sustainable community 
          development since 2009
        </p>
      </div>
      {/* Mission & Vision */}
<div className="bg-white py-12 px-6">
  <div className="flex flex-col gap-6 max-w-4xl mx-auto">

    {/* Mission */}
    <div className="bg-white border border-gray-700 rounded p-15">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Our Mission</h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        Canadian Peacemakers International partners with individuals and
        local communities facing violence and poverty to enhance access to
        appropriate education, foster personal peace-leadership, improve
        food security, and create economic opportunities that lead to
        self-sufficiency. We believe in community-driven solutions that
        respect local knowledge and empower people to build their own futures.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-white border border-gray-700 rounded p-15">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Our Vision</h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        We envision a world where all people in violence-affected,
        impoverished, and underdeveloped communities can live in dignity,
        security, and well-being. Where access to education is universal,
        peace is cultivated from within, and economic opportunities allow
        communities to thrive sustainably for generations to come.
      </p>
    </div>

    {/* Our Journey */}
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Our Journey</h2>
      <div className="w-16 h-1 bg-green-600 mx-auto mb-10"></div>

      {/* 2009 - text RIGHT */}
      <div className="flex items-start mb-10">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center font-bold text-sm">2009</div>
          <div className="w-0.5 h-20 bg-gray-300 mt-2"></div>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded shadow-sm">
          <h3 className="font-bold mb-2">Launch in Honduras</h3>
          <p className="text-sm text-gray-600">Canadian Peacemakers International began its Computer-Assisted Learning (CAL) program in Honduras, pioneering self-paced digital education for underserved communities.</p>
        </div>
      </div>

      {/* 2021 - text LEFT */}
      <div className="flex items-start mb-10">
        <div className="flex-1 bg-gray-50 p-4 rounded shadow-sm text-right">
          <h3 className="font-bold mb-2">Expansion to Africa</h3>
          <p className="text-sm text-gray-600">Expanded operations to Democratic Republic of Congo, Rwanda, Kenya, and Tanzania establishing partnerships with local communities and launching integrated education, peacemaking, and development programs.</p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold text-sm">2021</div>
          <div className="w-0.5 h-20 bg-gray-300 mt-2"></div>
        </div>
        <div className="flex-1"></div>
      </div>

      {/* Today - text RIGHT */}
      <div className="flex items-start">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center mx-4">
          <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center font-bold text-white text-sm">Today</div>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded shadow-sm">
          <h3 className="font-bold mb-2">Focus on Sub-Saharan Africa</h3>
          <p className="text-sm text-gray-600">Now operating primarily in Sub-Saharan Africa with key hubs in Kenya. Running comprehensive programs including CAL education, peace leadership workshops and economic development projects.</p>
        </div>
      </div>
    </div>
    
    {/* Core Values */}
<div className="bg-white py-12 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-2">Our Core Values</h2>
    <div className="w-16 h-1 bg-green-600 mx-auto mb-10"></div>

    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        { icon: <FaBalanceScale size={30} className="text-green-700 mb-3" />, title: "Justice and Peace", text: "At CPI, we are commitment to fairness, reconciliation, and peaceful resolution of conflict in line with both ethical, spiritual teachings and human rights." },
        { icon: <FaCog size={30} className="text-green-700 mb-3" />, title: "Missional Servant Leadership", text: "Ours is to affirm leadership expressed through purposeful service, modeled on the example of Christ and other servant leaders." },
        { icon: <FaCrown size={30} className="text-green-700 mb-3" />, title: "Dignity and Respect for All", text: "Every one is made in the image of God and deserves respect, regardless of gender, ethnicity, religion, or socio-economic background." },
        { icon: <FaHandsHelping size={30} className="text-green-700 mb-3" />, title: "Holistic Empowerment", text: "At CPI, we empower individuals and communities socially, economically and spiritually for long-term sustainability." },
        { icon: <FaLightbulb size={30} className="text-green-700 mb-3" />, title: "Innovation Rooted in Context", text: "Creativity and innovation are essential, but must be culturally appropriate and rooted in local knowledge and wisdom." },
        { icon: <FaHandshake size={30} className="text-green-700 mb-3" />, title: "Partnership & Collaboration", text: "We place great value in relationships and mutual accountability among local faith-based NGOs, governments, and community stakeholders." },
        { icon: <FaShieldAlt size={30} className="text-green-700 mb-3" />, title: "Stewardship & Accountability", text: "We institutionalise responsible management of resources, finances, and relationships as a form of truth and trust." },
        { icon: <FaStar size={30} className="text-green-700 mb-3" />, title: "Hope & Transformation", text: "We believe in the potential for positive change, even in the most difficult circumstances, inspired by spiritual faith." },
        { icon: <FaCross size={30} className="text-green-700 mb-3" />, title: "Faith & Spiritual Integrity", text: "Our work is rooted in a strong belief in God. We work for a greater purpose beyond our personal desires." },
        { icon: <FaBook size={30} className="text-green-700 mb-3" />, title: "Learning & Adaptability", text: "We take a posture of humility and continuous improvement informed by local feedback, monitoring, and faith-reflection." },
      ].map((value, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 text-left">
            {value.icon}
            <h3 className="font-bold text-base mb-2">{value.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{value.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div> 
  </div>
</div>

      <Footer />
    </div>
  )
}

export default AboutUs