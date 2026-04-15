'use client'

import Image from 'next/image'

import './BeforeAfterSlider.css'
import React, { MouseEventHandler, TouchEventHandler, useEffect, useRef, useState } from 'react'

interface Image {
  imageUrl: string
  alt?: string
}

interface BeforeAfterSliderProps {
  firstImage: Image
  secondImage: Image
  className?: string
}

export function BeforeAfterSlider({
  firstImage,
  secondImage,
  className = '',
}: BeforeAfterSliderProps) {
  const refContainer = useRef<HTMLDivElement>(null)
  const firstImageRef = useRef<HTMLImageElement>(null)

  const [imagesWidth, setImagesWidth] = useState<number | null>(null)
  const [delimiterPercentPosition, setDelimiterPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerPosition, setContainerPosition] = useState({ top: 0, left: 0 })

  const updateContainerWidth = () => {
    if (!refContainer.current) return
    const containerWidth = refContainer.current.offsetWidth
    setImagesWidth(containerWidth)
  }

  const updateContainerPosition = () => {
    if (!refContainer.current) return
    const containerCoords = refContainer.current.getBoundingClientRect()
    setContainerPosition({
      top: containerCoords.top + window.pageYOffset,
      left: containerCoords.left + window.pageXOffset,
    })
  }

  useEffect(() => {
    updateContainerWidth()
    if (firstImageRef.current?.complete) {
      updateContainerWidth()
    }

    window.addEventListener('resize', updateContainerWidth)
    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [])

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    updateContainerPosition()
    setIsDragging(true)
  }

  const onTouchStart: TouchEventHandler<HTMLDivElement> = () => {
    updateContainerPosition()
    setIsDragging(true)
  }

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false)
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !imagesWidth) return
      const X = e.pageX - containerPosition.left
      const newPosition = Math.max(0, Math.min(imagesWidth, X))
      setDelimiterPosition((newPosition / imagesWidth) * 100)
    }

    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [isDragging, imagesWidth, containerPosition.left])

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !imagesWidth) return
    const X = e.touches[0].pageX - containerPosition.left
    const newPosition = Math.max(0, Math.min(imagesWidth, X))
    setDelimiterPosition((newPosition / imagesWidth) * 100)
  }

  const onTouchEnd = () => setIsDragging(false)

  const imgStyle = imagesWidth ? { width: `${imagesWidth}px` } : undefined

  return (
    <div
      ref={refContainer}
      className={`before-after-slider relative w-full overflow-hidden select-none ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="before-after-slider__first-photo-container w-full">
        <Image
          src={firstImage.imageUrl}
          ref={firstImageRef}
          draggable={false}
          alt={firstImage.alt || ''}
          className="w-full max-w-none"
          onLoad={updateContainerWidth}
          width={2732}
          height={2048}
        />
      </div>

      {imagesWidth && (
        <div
          className="before-after-slider__second-photo-container absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${delimiterPercentPosition}%` }}
        >
          <Image
            src={secondImage.imageUrl}
            style={imgStyle}
            draggable={false}
            alt={secondImage.alt || ''}
            className="h-full max-w-none object-cover"
            width={2732}
            height={2048}
          />
        </div>
      )}

      {imagesWidth && (
        <div
          className="before-after-slider__delimiter absolute top-0 flex h-full w-[3px] cursor-ew-resize items-center justify-center bg-white/80"
          style={{ left: `${delimiterPercentPosition}%` }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
            <div className="flex size-4 rounded-full bg-white"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BeforeAfterSlider
