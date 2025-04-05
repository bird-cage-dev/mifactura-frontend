'use client'
import { signInGoogle } from "@/utils/auth-client"
import { Button } from "./Button"

export const ButtonGoogle = () => {
    return (
        <Button className="" text="Ingrese con Google" handleClick={() => { signInGoogle() }} />
    )
}