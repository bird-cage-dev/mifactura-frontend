import clsx from "clsx";
import { MouseEventHandler } from "react";

type Props = {
    text: string;
    handleClick?: MouseEventHandler;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
}
export const Button = ({ text, handleClick, type, className = "" }: Props) => {
    return (
        <button
            onClick={handleClick}
            type={type}
            className={clsx("p-2 rounded cursor-pointer font-bold text-white shadow-[2px_1px_10px_black] btn z-10", className)}
        >
            {text}
        </button>
    )
}