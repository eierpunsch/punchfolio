import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PawPrints from './components/PawPrints'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import MealKitUpselling from './pages/MealKitUpselling'
import ResubscriptionStrategy from './pages/ResubscriptionStrategy'
import PaymentRetry from './pages/PaymentRetry'
import ProductReturnPortal from './pages/ProductReturnPortal'

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

function AboutPage() {
  return (
    <main>
      <About />
    </main>
  )
}

export default function App() {
  return (
    <div className="bg-cream min-h-screen relative">
      <PawPrints />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/meal-kit-upselling" element={<MealKitUpselling />} />
        <Route path="/work/resubscription-strategy" element={<ResubscriptionStrategy />} />
        <Route path="/work/payment-retry" element={<PaymentRetry />} />
        <Route path="/work/product-return-portal" element={<ProductReturnPortal />} />      </Routes>
      <Footer />
    </div>
  )
}
