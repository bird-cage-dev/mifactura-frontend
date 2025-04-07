import { Metadata } from "next"
import { MobileMenu } from "@/components/common/MobileMenu"
import MainHeader from "@/components/common/MainHeader"

export const metadata: Metadata = {
  title: "Dashboard"
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen">
      <MainHeader />
      {children}
      {/* <div className="absolute bottom-0 left-0 w-full h-[60px] overflow-hidden z-10">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(-160)">
              <stop offset="21%" stopColor="#2C938E" />
              <stop offset="77%" stopColor="#0A5967" />
            </linearGradient>
          </defs>
          <path d="M0,0 C150,50 350,100 500,0 L500,150 L0,150 Z" fill="url(#gradient)" />
        </svg>
      </div> */}
      <MobileMenu />
    </div>
  )
}