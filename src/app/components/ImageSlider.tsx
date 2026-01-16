'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageSliderProps {
  images: string[]
  alt: string
  autoSlideInterval?: number
}

const ImageSlider = ({ 
  images, 
  alt, 
  autoSlideInterval = 5000
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
        setIsTransitioning(false)
      }, 150)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  if (images.length === 0) return null

  return (
    <div className="image-slider-container">
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Image
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          fill={true}
          className="image-slider-image"
          style={{
            transition: 'opacity 300ms ease-in-out',
            opacity: isTransitioning ? 0.7 : 1,
            objectFit: 'cover'
          }}
        />
      </div>

      {images.length > 1 && (
        <div className="image-slider-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 150)
              }}
              className={`image-slider-dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageSlider
