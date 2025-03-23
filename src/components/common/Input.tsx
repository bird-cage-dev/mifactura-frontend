import { ChangeEventHandler, HTMLInputTypeAttribute, useId } from "react";
import { faMobileScreen, faLock, IconDefinition, faFont, faHashtag, faEye } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {
    label: string;
    name: string;
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement>
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
}
export const Input = ({ label, value, placeholder, name, handleChange, type = "text", required = true }: Props) => {
    const id = useId();
    const icons: Record<string, IconDefinition> = {
        password: faLock,
        email: faEnvelope,
        tel: faMobileScreen,
        text: faFont,
        number: faHashtag
    };
    return (
        <div className="flex flex-col relative">
            <label htmlFor={id} className="font-bold">{label}{required && <span className="text-primary-yellow">*</span>}:</label>
            {
                (type in icons) && (<FontAwesomeIcon icon={icons[type]} className="text-xl absolute bottom-2 left-1.5" />)
            }
            <input
                type={type}
                id={id}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                required={required}
                className="border-2 border-white rounded-lg h-9 outline-none pl-7 input"
            />
        </div>
    )
}