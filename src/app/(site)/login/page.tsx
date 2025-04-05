import { Back } from "@/components/common/Back"
import { LoginForm } from "@/components/Home/LoginForm"
import Link from "next/link"

export default function Login() {
  return (
    <div>
      <Back to="/" />
      <LoginForm />
      <Link href="/register" className="absolute bottom-1 right-2 font-bold text-xl hover:underline">
        Crear cuenta
      </Link>
    </div>
  )
}