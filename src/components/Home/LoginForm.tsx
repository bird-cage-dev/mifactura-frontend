'use client'
import { FormEvent } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { useForm } from "@/hooks/useForm";
import Link from "next/link";
import clsx from "clsx";
const initialForm = {
    email: '',
    password: '',
}
export const LoginForm = () => {
    const { form, handleChange } = useForm(initialForm);
    const { email, password } = form;
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="w-11/12 m-auto flex flex-col gap-4 mt-64">
            <Input handleChange={handleChange} name="email" label="Email" type="email" value={email} />
            <Input handleChange={handleChange} name="password" label="Contraseña" type="password" value={password} />
            <div className="self-center flex-col flex items-center gap-1">
                <Button text="Ingresar" type="submit" className="w-44 h-12 text-[1.1rem] mt-4" />
                <Link href={'/reset-password'} className={clsx("z-10 text-ternary-gray", "hover:underline")}>Olvide mi contraseña</Link>
            </div>
        </form>
    )
}