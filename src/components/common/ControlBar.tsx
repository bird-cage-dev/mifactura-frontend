import clsx from "clsx";
import Image from "next/image";
import { faChartSimple, faUser, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    className?: string;
}
export const ControlBar = ({ className }: Props) => {
    return (
        <div className={clsx(className, "fixed -bottom-1 w-full")}>
            <div className="absolute flex justify-between w-11/12 bottom-4 items-baseline left-4">
                <FontAwesomeIcon icon={faChartSimple} className="w-7 h-7 text-primary-blue bg-white rounded p-1" />
                <FontAwesomeIcon icon={faCirclePlus} className="w-16 h-16 bg-primary-blue-dark text-white rounded-full border-[6px] outline-4 border-primary-blue-dark" />
                <FontAwesomeIcon icon={faUser} className="w-7 h-7 text-primary-blue bg-white rounded p-1" />
            </div>
            <Image src={'/control-bar.svg'} alt="control-bar" width={340} height={61} className="w-full" />
        </div>
    )
}