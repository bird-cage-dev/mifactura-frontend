import { Metadata } from "next"

export const metadata: Metadata = {
  title: "dashboard"
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen">
      {children}
    </div>
  )
}