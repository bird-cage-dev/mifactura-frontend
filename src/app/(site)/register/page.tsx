import { Back } from "@/components/common/Back";
import { RegisterForm } from "@/components/Home/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: 'Register'
}
export default function Register() {
    return (
        <div>
            <Back to="/" />
            <h2 className="text-2xl font-bold my-4 ml-1">Da el primer paso en tu salud financiera...</h2>
            <RegisterForm />
            <Link href={'/login'} className="absolute bottom-1 right-2 font-bold text-xl hover:underline">
                Ya tengo cuenta
            </Link>
        </div>
    )
}