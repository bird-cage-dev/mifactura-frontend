import { usePathname } from "next/navigation"

const useStatusBar = () => {
  const pathname = usePathname()

  const getTitle = () => {
    switch (true) {
      case pathname === "/invoices":
        return "Mis Facturas"

      case Boolean(pathname.match(/^\/invoices\/[a-zA-Z0-9]+$/)):
        return "Factura"

      default:
        return "Dashboard"
    }
  }

  return { getTitle }
}

export default useStatusBar