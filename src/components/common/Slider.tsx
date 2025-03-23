
type Props = {
    children: React.ReactNode[];
}
export const Slider = ({ children }: Props) => {

    return (
        <div className="overflow-x-hidden border-2 border-primary-blue">
            <div className="overflow-x-visible flex">
                {
                    children.map(
                        (child, index) => (
                            <div className="w-full flex-none" key={`slider-slide-${index}`}>
                                {child}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}