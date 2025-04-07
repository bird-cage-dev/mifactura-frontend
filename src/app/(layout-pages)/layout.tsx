import { StatusBar } from "@/components/common/StatusBar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mis Facturas | MiFactura"
}

export default function LayoutPages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen">
      <StatusBar />
      {children}
    </div>
  )
}