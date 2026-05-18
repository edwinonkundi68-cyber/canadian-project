import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import News from "./pages/News"
import CalHubs from "./pages/CalHubs"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/news" element={<News />} />
      <Route path="/cal-hubs" element={<CalHubs />} />
    </Routes>
  )
}

export default App