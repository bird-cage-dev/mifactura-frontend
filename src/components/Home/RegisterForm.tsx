"use client"

import { useForm } from "@/hooks/useForm"
import { FormEvent, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Input } from "../common/Input"
import { InputWithSelect, Option } from "../common/InputWithSelect"
import { Button } from "../common/Button"
import { signUp } from "@/server/user"
import { toast } from "react-toastify"

const initialForm = {
  identification: "",
  identificationType: "",
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: ""
}

const identificationTypes: Option[] = [
  { id: "identification-type-cc", text: "CC", value: "cc" },
  { id: "identification-type-ti", text: "TI", value: "ti" },
  { id: "identification-type-ce", text: "CE", value: "ce" }
]

export const RegisterForm = () => {
  const { form, handleChange } = useForm(initialForm)
  const router = useRouter()
  const { name, identification, identificationType, email, phone, password, confirmPassword } = form

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden")
      return
    }

    try {
      const res = await signUp({
        name,
        email,
        password,
        identification,
        identificationType,
        phoneNumber: phone
      })

      toast.success("¡Registro exitoso!", {
        onClose: () => {
          router.push("/dashboard")
        }
      })

    } catch (error) {
      console.error("Error al registrar:", error)
      toast.error("Correo electrónico ya registrado. Intenta de nuevo con otro correo.")
    }
  }, [form, router])

  return (
    <form onSubmit={handleSubmit} className="w-11/12 m-auto flex flex-col gap-3">
      <InputWithSelect
        name="identification"
        selectName="identificationType"
        value={identification}
        selectValue={identificationType}
        handleChange={handleChange}
        label="Identificación"
        options={identificationTypes}
      />
      <Input handleChange={handleChange} name="name" label="Nombre" value={name} />
      <Input handleChange={handleChange} name="email" label="Email" type="email" value={email} />
      <Input handleChange={handleChange} name="phone" label="Celular" type="tel" value={phone} />
      <Input handleChange={handleChange} name="password" label="Contraseña" type="password" value={password} />
      <Input handleChange={handleChange} name="confirmPassword" label="Confirmar Contraseña" type="password" value={confirmPassword} />
      <Button text="Registrarme" type="submit" className="w-44 h-12 self-center text-[1.1rem] mt-4" />
    </form>
  )
}
