"use client";

import { MobileMenu } from "@/components/common/MobileMenu";
import { useRouter } from "next/navigation";

export default function UserView() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/v1/api/auth/sign-out", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {

        localStorage.removeItem("userId");

        router.push("/login");
      } else {
        console.error("Error al cerrar sesión:", res.status);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="relative flex flex-col h-[calc(100vh-126px)] w-screen">
      <MobileMenu />
      <div className="bg-white w-full p-4">
        <div className="flex flex-col space-y-4">
          <button type="button" className="px-4 py-2 btn rounded-md">
            Ajustes
          </button>
          <button type="button" className="px-4 py-2 btn rounded-md">
            Ayuda
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 btn rounded-md"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  );
}
