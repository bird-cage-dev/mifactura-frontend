import Link from "next/link";
import { FacturaItem } from "@/components/Invoices/components/FacturaItem";

export default function Invoices() {
  return (
    <div className="flex flex-col p-4 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-primary-blue">Ordenar por: </p>
        <p className="text-lg font-bold text-black">Fecha</p>
      </div>

      <div className="flex justify-end mb-2">
        <Link
          href="/invoices/new"
          className="text-white bg-primary-blue px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Crear nueva factura
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2 mt-1 overflow-y-auto">
        <FacturaItem company="Movistar" detail="Plan Móvil" amount="$31.000" date="2025-01-30" id="1" />
        <FacturaItem company="EPM" detail="Servicios Públicos" amount="$300.000" date="2025-01-30" id="2" />
        <FacturaItem company="Tienda de conveniencia" detail="Mercado General" amount="$150.200" date="2025-01-30" id="3" />
        <FacturaItem company="Movistar" detail="Plan Móvil" amount="$31.000" date="2025-01-30" id="4" />
        <FacturaItem company="EPM" detail="Servicios Públicos" amount="$300.000" date="2025-01-30" id="5" />
        <FacturaItem company="Tienda de conveniencia" detail="Mercado General" amount="$150.200" date="2025-01-30" id="6" />
        <FacturaItem company="Movistar" detail="Plan Móvil" amount="$31.000" date="2025-01-30" id="7" />
        <FacturaItem company="EPM" detail="Servicios Públicos" amount="$300.000" date="2025-01-30" id="8" />
        <FacturaItem company="Tienda de conveniencia" detail="Mercado General" amount="$150.200" date="2025-01-30" id="9" />
      </div>
    </div>
  );
}
