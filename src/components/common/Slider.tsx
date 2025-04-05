"use client"

import { useState } from "react"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  children: React.ReactNode[];
}

export const Slider = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { length } = children

  const handleChangeSlide = (change: number) => {
    if (change > 0 && currentSlide === length - 1) {
      setCurrentSlide(0)

      return
    }

    if (change < 0 && currentSlide === 0) {
      setCurrentSlide(length - 1)

      return
    }

    setCurrentSlide(currentSlide + change)
  }

  return (
    <div className="overflow-x-hidden border-[3px] border-primary-blue relative h-28 rounded-2xl">
      <FontAwesomeIcon icon={faChevronLeft} className="absolute left-4 top-12 z-20" onClick={() => {
        handleChangeSlide(-1)
      }}
      />
      <div className="overflow-x-visible flex h-full duration-300" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
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
      <FontAwesomeIcon icon={faChevronRight} className="absolute right-4 top-12 z-20" onClick={() => {
        handleChangeSlide(1)
      }}
      />
    </div>
  )
}