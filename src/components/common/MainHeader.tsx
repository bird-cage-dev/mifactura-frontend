import { faBell } from "@fortawesome/free-solid-svg-icons/faBell"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGear } from "@fortawesome/free-solid-svg-icons/faGear"

import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser"
import Link from "next/link"
import { HEADER_HEIGHT } from "@/utils/constants/layout"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

const MainHeader = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <header
      style={{ height: HEADER_HEIGHT }}
      className="home top-0 left-0 z-10 flex items-center p-4 w-full bg-primary-blue text-white"
    >
      <div className="flex justify-center items-center w-[50px] h-[50px]">
        <FontAwesomeIcon icon={faCircleUser} className="text-[50px]" />
      </div>
      <div className="ml-3">
        <p className="text-lg font-bold">Hola, {session?.user.name}</p>
        <p className="text-sm">¡Hola de nuevo!</p>
      </div>
      <div className="ml-auto flex gap-4">
        <Link href="/notifications">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
        </Link>
        <Link href="/user">
          <FontAwesomeIcon icon={faGear} className="text-xl" />
        </Link>
      </div>
    </header>
  )
}

export default MainHeader