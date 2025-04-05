"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useStatusBar from "@/hooks/useStatusBar"
import { HEADER_HEIGHT } from "@/utils/constants/layout"

export const StatusBar = () => {
  // Deleted clsx is not nesary, can be archived on just contaned string
  const { getTitle } = useStatusBar()
  const router = useRouter()

  return (
    <div
      style={{ height: HEADER_HEIGHT }}
      className="w-full flex items-center justify-between py-4 sticky top-0 left-0 status-bar px-4"
    >
      {/* <Back to={} className="my-0 static" /> */}
      <div className="relative   text-2xl my-4 inline-block" onClick={() => router.back()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="font-bold text-2xl">{getTitle()}</div>
      <div className="flex gap-4">
        <Link href="/notifications">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
        </Link>
        <Link href="/configurations">
          <FontAwesomeIcon icon={faGear} className="text-xl" />
        </Link>
      </div>
    </div>
  )
}