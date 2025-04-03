import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Back } from "./Back"
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import clsx from "clsx"

type Props = {
  title: string;
  back?: string;
}

export const StatusBar = ({ title, back }: Props) => (
  <div className={clsx("w-full flex items-center justify-between py-4 px-2 fixed top-0 left-0", "status-bar")}>
    <Back to={back || "/"} className="my-0 static" />
    <div className="font-bold text-2xl">{title}</div>
    <div className="flex gap-2">
      <Link href="/notifications">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
      </Link>
      <Link href="/configurations">
        <FontAwesomeIcon icon={faGear} className="text-xl" />
      </Link>
    </div>
  </div>
)