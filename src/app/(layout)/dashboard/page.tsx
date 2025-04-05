"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FacturaItem } from "@/components/Invoices/FacturaItem"
import Link from "next/link"

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
    <div className="relative flex flex-col h-[calc(100vh-126px)]  w-screen overflow-hidden">
      <div className="flex-grow bg-white w-full p-4">
        <div className="relative w-full h-[150px] flex items-center justify-center bg-white rounded-2xl border-2 border-[#0A5967] shadow-xl overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-2 text-gray-700 text-xl p-2 rounded-full"
            type="button"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="text-lg font-bold text-primary-blue">{slides[currentSlide]}</div>
          <button
            onClick={nextSlide}
            className="absolute right-2 text-gray-700 text-xl p-2 rounded-full"
            type="button"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* TODO: Add this to the dashboard */}
        {/* <div className="flex justify-between mt-4">
          {["Variables", "Fijos"].map((title, index) => (
            <div
              key={index}
              className="w-[48%] bg-white border-2 border-[#0A5967] p-6 text-center text-[#0A5967] font-bold text-xl rounded-2xl shadow-xl"
            >
              {title}
            </div>
          ))}
        </div> */}
        <div className="mt-6">
          <div className="flex justify-between font-bold">
            <p className="text-left text-black">Tus últimas facturas :)</p>
            <Link href="/invoices" className="text-primary-blue cursor-pointer">Ver más...</Link>
          </div>
          <div className="mt-2 space-y-2">
            <FacturaItem company="Movistar" detail="Plan Móvil" amount="$31.000" date="2025-01-30" id={1} />
            <FacturaItem company="EPM" detail="Servicios Públicos" amount="$300.000" date="2025-01-30" id={2} />
            <FacturaItem company="Tienda de conveniencia" detail="Mercado General" amount="$150.200" date="2025-01-30" id={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
