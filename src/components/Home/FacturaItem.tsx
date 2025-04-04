type FacturaItemProps = {
  empresa: string;
  detalle: string;
  monto: string;
  fecha: string;
}

export const FacturaItem = ({ empresa, detalle, monto, fecha }: FacturaItemProps) => (
  <div className="bg-gray-100 p-3 rounded-lg shadow-md">
    <p className="text-[#0A5967] font-bold">{empresa}</p>
    <p className="text-gray-600 text-sm">{detalle}</p>
    <div className="flex justify-between items-center mt-1">
      <p className="text-[#0A5967] font-bold text-lg">{monto}</p>
      <p className="text-gray-500 text-sm">{fecha}</p>
    </div>
  </div>
)
