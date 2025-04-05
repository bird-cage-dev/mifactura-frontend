import clsx from "clsx"
import Link from "next/link"

type Props = {
  text: string;
  to: string;
  className?: string;
}

export const ButtonLink = ({ text, to, className }: Props) => (
  <Link href={to} className={clsx("cursor-pointer font-bold text-white btn btn-link", className)}>
    {text}
  </Link>
)