import { FOOTER_HEIGHT } from "@/utils/constants/layout"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const MobileMenu = () => (
  <div
    style={{ height: FOOTER_HEIGHT }}
    className="w-full flex items-center justify-center absolute bottom-0 left-0 bg-primary-blue py-4 px-8"
  >
    <div className="flex items-center justify-between w-full">
      <Link href="/">
        <FontAwesomeIcon icon={faChartSimple} className="text-xl" />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </Link>
    </div>
  </div>
)