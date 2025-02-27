import { MouseEvent, MouseEventHandler } from "react";

type Props = {
    text: string;
    handleClick?: MouseEventHandler;
}
export const Button = ({ text, handleClick }: Props) => {
    return (
        <button
        onClick={handleClick}
        className="p-2 rounded cursor-pointer font-bold text-white shadow-[0px_2px_10px_gray] btn"
        >
            {text}
        </button>
    )
}