import { Slider } from "@/components/common/Slider";
import { FormRegister } from "@/components/Home/FormRegister";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Register'
}
export default function Register() {
    return (
        <div>
            <Slider>
                <div>1</div>
                <div>2</div>
            </Slider>
            <h2 className="text-2xl font-bold my-4 ml-1">Da el primer paso en tu salud financiera...</h2>
            <FormRegister />
        </div>
    )
}