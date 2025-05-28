"use client";

import { useRef, useState } from "react";

export const CreateFacturaForm = () => {
  const [identificationOwner, setIdentificationOwner] = useState("");
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [provider, setProvider] = useState("");
  const [observations, setObservations] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Debes subir un archivo (PDF o imagen)");
      return;
    }

    const formData = new FormData();
    formData.append("bill", file);
    formData.append("identificationOwner", identificationOwner);
    formData.append("concept", concept);
    formData.append("amount", amount);
    formData.append("type", type);
    formData.append("provider", provider);
    formData.append("observations", observations);

    try {
      const res = await fetch("http://localhost:3000/v1/api/bill", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          alert("No se envió el contenido. Ocurrió un error.");
        } else {
          alert(data.message || "Error al crear la factura.");
        }
        return;
      }

      alert("Factura creada con éxito.");
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("Hubo un error al enviar la solicitud.");
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded shadow-md text-black"
    >
      <input
        type="text"
        placeholder="Número de identificación del cliente"
        value={identificationOwner}
        onChange={(e) => setIdentificationOwner(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      />
      <input
        type="text"
        placeholder="Concepto"
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      />
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      />
      <input
        type="text"
        placeholder="Tipo de factura"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      />
      <input
        type="text"
        placeholder="Proveedor"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      />
      <input
        type="text"
        placeholder="Observaciones (opcional)"
        value={observations}
        onChange={(e) => setObservations(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      />

      <div>
        <button
          type="button"
          onClick={handleFileClick}
          className="bg-[#0A5967] text-white py-2 px-4 rounded hover:bg-[#08434e] text-lg"
        >
          {file ? "Cambiar archivo" : "Subir archivo"}
        </button>

        <input
          type="file"
          accept=".pdf,image/*"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
        />

        {file === null && (
          <p className="text-red-500 text-sm mt-1">
            Por favor, sube un archivo.
          </p>
        )}

        {file && (
          <p className="text-black-600 text-sm mt-2">
            Archivo seleccionado: {file.name}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#0A5967] text-white py-2 px-4 rounded hover:bg-[#08434e] text-lg"
      >
        Crear factura
      </button>
    </form>
  );
};
