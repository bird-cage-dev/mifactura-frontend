import Image from "next/image"

type Props = {
    url: string;
}
export const BackgroundImage = ({ url }: Props) => {
    return (
        <div>
            <Image src={url} alt="background-image" width={520} height={390} className="image object-cover w-full h-40" />
            <svg width={0} height={0}>
                <defs>
                    <clipPath id="my-image-background" clipPathUnits='objectBoundingBox'>
                        <path d="M 0 0 C 0.3 1.5 .4 1 1 0Z">
                        </path>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}