import { CreateFacturaForm } from "../../../../components/Invoices/components/CreateFacturaForm";

export default function NuevaFacturaPage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold mb-6 text-[#0A5967]">Crear factura</h1>
      <CreateFacturaForm />
    </div>
  );
}
