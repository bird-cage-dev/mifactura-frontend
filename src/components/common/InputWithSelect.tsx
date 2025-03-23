import { ChangeEventHandler, HTMLInputTypeAttribute, useId } from "react";
export type Option = {
    id: string;
    text: string;
    value: string;
}
type Props = {
    label: string;
    selectName: string;
    selectValue: string;
    name: string;
    value: string;
    options: Option[];
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
}
export const InputWithSelect = ({ label, value, selectName, selectValue, placeholder, name, options, handleChange, type = "text", required = true }: Props) => {
    const id = useId();
    return (
        <div className="flex flex-col relative">
            <label htmlFor={id} className="font-bold">{label}{required && <span className="text-primary-yellow">*</span>}:</label>

            <select name={selectName} value={selectValue} onChange={handleChange} className="absolute bottom-2 left-1.5 font-bold outline-none">
                {
                    options.map(({ id, text, value }) => (
                        <option value={value} key={id} className="text-primary-blue bg-white">{text}</option>
                    ))
                }
            </select>

            <input
                type={type}
                id={id}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                required={required}
                className="border-2 border-white rounded-lg h-9 outline-none pl-16"
            />
        </div>
    )
}