import { ButtonLink } from "@/components/common/ButtonLink";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="absolute top-1/4">
        <h3 className="relative text-5xl font-bold ml-2 mt-2">
          Nos importa tu salud financiera, cuidate con Nosotros :)
        </h3>
        <ButtonLink text="Crear cuenta" to="/register" className="relative top-64 left-[30%]" />
      </div>
      <Link href={'/login'} className="absolute bottom-1 right-2 font-bold text-xl hover:underline">
        Ya tienes cuenta?
      </Link>
    </div>
  );
}
