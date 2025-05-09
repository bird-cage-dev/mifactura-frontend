"use client"

import { MobileMenu } from "@/components/common/MobileMenu"

export default function UserView() {
  return (
    <div className="relative flex flex-col h-[calc(100vh-126px)] w-screen">
      <MobileMenu />
      <div className=" bg-white w-full p-4">
        <div className="flex flex-col space-y-4">
          <button type="button" className="px-4 py-2 bg-primary-blue rounded-md">
            Ajustes
          </button>
          <button type="button" className="px-4 py-2 bg-primary-blue rounded-md">
            Ayuda
          </button>
          <button type="button" className="px-4 py-2 bg-primary-blue rounded-md">
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}
