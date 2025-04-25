"use client"

import { FormEvent, useCallback } from "react"
import { Button } from "../common/Button"
import { Input } from "../common/Input"
import { useForm } from "@/hooks/useForm"
import Link from "next/link"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { signIn } from "@/server/user"

const initialForm = {
  email: "",
  password: "",
}

export const LoginForm = () => {
  const { form, handleChange } = useForm(initialForm)
  const { email, password } = form
  const router = useRouter()

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await signIn({ email, password })

      if (res?.token && res?.user) {
        setTimeout(() => {
          router.push("/dashboard")
        }, 1000)
      } else {

        toast.error("Credenciales incorrectas. Intenta de nuevo.", {
          position: "top-center",
        })
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error, {
        position: "top-center",
      })
      toast.error("Correo y/o contraseña Incorrectos. Intenta de nuevo.", {
        position: "top-center",
      })
    }
  }, [email, password, router])

  return (
    <form onSubmit={handleSubmit} className="w-11/12 m-auto flex flex-col gap-4 mt-64">
      <Input handleChange={handleChange} name="email" label="Email" type="email" value={email} />
      <Input handleChange={handleChange} name="password" label="Contraseña" type="password" value={password} />
      <div className="self-center flex-col flex items-center gap-1">
        <Button text="Ingresar" type="submit" className="w-44 h-12 text-[1.1rem] mt-4" />
        <Link href="/reset-password" className={clsx("z-10 text-ternary-gray", "hover:underline")}>Olvidé mi contraseña</Link>
      </div>
    </form>
  )
}
