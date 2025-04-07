"use client"

import { FacturaItem } from "@/components/Invoices/FacturaItem"
import Link from "next/link"
import { Slider } from "@/components/common/Slider"
import Image from "next/image"

const slides = ["https://placehold.co/398x112.png", "https://placehold.co/398x112.png", "https://placehold.co/398x112.png"]

export default function Dashboard() {
  return (
    <div className="relative flex flex-col h-[calc(100vh-126px)]  w-screen overflow-hidden">
      <div className="flex-grow bg-white w-full p-4">
        <Slider>
          {slides.map((slide, index) => (
            <Image key={index} src={slide} alt={slide} width={398} height={112} />
          ))}
        </Slider>

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
