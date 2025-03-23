import clsx from "clsx";
import Link from "next/link"

type Props = {
    text: string;
    to: string;
    className?: string;
}
export const ButtonLink = ({ text, to, className }: Props) => {
    return (
        <Link href={to} className={clsx("p-2 rounded cursor-pointer font-bold text-white shadow-[2px_1px_10px_black] btn", className)}>
            {text}
        </Link>
    )

}