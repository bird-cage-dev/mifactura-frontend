"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faGear, faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FacturaItem } from "@/components/Home/FacturaItem"

const slides = ["Foto 1", "Foto 2", "Foto 3"]

export default function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative flex flex-col h-screen w-screen overflow-hidden">
      <div className="home fixed top-0 left-0 z-10 flex items-center px-4 h-[126px] w-full bg-[#0A5967] text-white">
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <FontAwesomeIcon icon={faCircleUser} className="text-[50px]" />
        </div>
        <div className="ml-3">
          <p className="text-lg font-bold">Hola, (Usuario)</p>
          <p className="text-sm">Has ahorrado: ($0)</p>
        </div>
        <div className="ml-auto flex space-x-4">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          <FontAwesomeIcon icon={faGear} className="text-xl" />
        </div>
      </div>

      <div className="flex-grow bg-white w-full mt-[126px] p-4">
        <div className="relative w-full h-[150px] flex items-center justify-center bg-white rounded-2xl border-2 border-[#0A5967] shadow-xl overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-2 text-gray-700 text-xl p-2 rounded-full"
            type="button"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="text-lg font-bold text-[#0A5967]">{slides[currentSlide]}</div>
          <button
            onClick={nextSlide}
            className="absolute right-2 text-gray-700 text-xl p-2 rounded-full"
            type="button"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="flex justify-between mt-4">
          {["Variables", "Fijos"].map((title, index) => (
            <div
              key={index}
              className="w-[48%] bg-white border-2 border-[#0A5967] p-6 text-center text-[#0A5967] font-bold text-xl rounded-2xl shadow-xl"
            >
              {title}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between font-bold">
            <p className="text-left text-black">Tus últimas facturas :)</p>
            <p className="text-[#0A5967] cursor-pointer">Ver más...</p>
          </div>
          <div className="mt-2 space-y-2">
            <FacturaItem empresa="Movistar" detalle="Plan Móvil" monto="$31.000" fecha="2025-01-30" />
            <FacturaItem empresa="EPM" detalle="Servicios Públicos" monto="$300.000" fecha="2025-01-30" />
            <FacturaItem empresa="Tienda de conveniencia" detalle="Mercado General" monto="$150.200" fecha="2025-01-30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[60px] overflow-hidden z-10">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(-152)">
              <stop offset="21%" stopColor="#2C938E" />
              <stop offset="77%" stopColor="#0A5967" />
            </linearGradient>
          </defs>
          <path d="M0,0 C150,100 350,100 500,0 L500,150 L0,150 Z" fill="url(#gradient)" />
        </svg>
      </div>
    </div>
  )
}
