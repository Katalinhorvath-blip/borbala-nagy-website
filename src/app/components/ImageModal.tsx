'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  imageSrc: string
  imageAlt: string
  onClose: () => void
}

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="image-modal-close"
          onClick={onClose}
          aria-label="Close image"
        >
          ×
        </button>
        
        <div className="image-modal-content">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            style={{ 
              objectFit: 'contain',
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
            priority
          />
        </div>
      </div>
    </div>
  )
}