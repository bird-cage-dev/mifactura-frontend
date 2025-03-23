import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx";
import Link from "next/link"

type Props = {
    to: string;
    className?: string;
}
export const Back = ({ to, className }: Props) => {
    return (
        <Link href={to} className={clsx("relative top-4 text-2xl my-4 inline-block", className)}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
    )
}