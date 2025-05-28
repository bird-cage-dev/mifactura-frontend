"use client";

import { useEffect, useState } from "react";
import { FacturaItem } from "./components/FacturaItem";

type Factura = {
  id: string;
  concept: string;
  amount: number;
  createdAt: string;
  provider: string;
};

export default function InvoiceListPage() {
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!userId || !token) {
      alert("No se envió el contenido. Ocurrió un error.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/v1/api/bill/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          alert("No se envió el contenido. Ocurrió un error.");
          return null;
        }
        if (!res.ok) throw new Error("Error al obtener las facturas");
        return res.json();
      })
      .then((data) => {
        if (data) setFacturas(data);
      })
      .catch(() => {
        alert("No se envió el contenido. Ocurrió un error.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Cargando facturas...</p>;

  return (
    <div className="space-y-4 p-4">
      {facturas.length === 0 && <p>No hay facturas para mostrar.</p>}
      {facturas.map((factura) => (
        <FacturaItem
          key={factura.id}
          id={factura.id}
          company={factura.provider}
          detail={factura.concept}
          amount={factura.amount.toString()}
          date={new Date(factura.createdAt).toLocaleDateString()}
        />
      ))}
    </div>
  );
}
