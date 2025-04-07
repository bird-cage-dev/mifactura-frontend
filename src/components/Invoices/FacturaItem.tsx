"use client"

import { useRouter } from "next/navigation"

type FacturaItemProps = {
  company: string;
  detail: string;
  amount: string;
  date: string;
  id: number;
}

export const FacturaItem = ({ company, detail, amount, date, id }: FacturaItemProps) => {
  const router = useRouter()

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-full" onClick={() => router.push(`/invoices/${id}`, undefined)}>
      <p className="text-[#0A5967] font-bold">{company}</p>
      <p className="text-gray-600 text-sm">{detail}</p>
      <div className="flex justify-between items-center mt-1">
        <p className="text-[#0A5967] font-bold text-lg">{amount}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  )
}
