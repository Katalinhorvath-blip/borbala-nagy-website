'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Award {
  festival: string
  award: string
  year: string
  location: string
}

interface FilmData {
  id: string
  title: string
  subtitle?: string
  type: string
  duration: string
  year: string
  language: string
  originalTitle?: string
  synopsis: string
  images: string[]
  awards?: Award[]
  trailer?: string
  cast?: string[]
  crew?: { role: string; name: string }[]
  festivals?: string[]
  financedBy?: string[]
}

interface FilmModalProps {
  film: FilmData
  onClose: () => void
  onNavigate: (direction: 'next' | 'prev') => void
}

const FilmModal = ({ 
  film, 
  onClose, 
  onNavigate 
}: FilmModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when film changes and ensure valid index
  useEffect(() => {
    if (!film.images || film.images.length === 0) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(0)
    }
  }, [film.id, film.images])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onNavigate('prev')
          break
        case 'ArrowRight':
          onNavigate('next')
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [onClose, onNavigate])

  // Reset image index when film changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [film])

  if (!film) return null

  return (
    <div className="film-modal-overlay">
      <div className="film-modal-container">
        {/* Navigation and Close Buttons */}
        <div className="film-modal-nav">
          <button 
            onClick={onClose}
            className="film-modal-close"
            aria-label="Close modal"
          >
            ✕
          </button>
          
          <button 
            onClick={() => onNavigate('prev')}
            className="film-modal-arrow film-modal-prev"
            aria-label="Previous film"
          >
            ←
          </button>
          
          <button 
            onClick={() => onNavigate('next')}
            className="film-modal-arrow film-modal-next"
            aria-label="Next film"
          >
            →
          </button>
        </div>

        {/* Modal Content */}
        <div className="film-modal-content">
          {/* Back Button */}
          <button onClick={onClose} className="film-modal-back">
            ← Back
          </button>

          {/* Film Header */}
          <div className="film-modal-header">
            <h1 className="film-modal-title">{film.title}</h1>
            {film.subtitle && (
              <p className="film-modal-subtitle">{film.subtitle}</p>
            )}
            <div className="film-modal-meta">
              <span>{film.type}</span> | <span>{film.duration}</span> | <span>{film.year}</span>
              <br />
              <span>{film.language}</span>
              {film.originalTitle && (
                <>
                  <br />
                  <span className="film-modal-original">Original title: {film.originalTitle}</span>
                </>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {film.images && film.images.length > 0 && film.images[currentImageIndex] && (
            <div className="film-modal-gallery">
              <div className="film-modal-main-image">
                <Image
                  src={film.images[currentImageIndex]}
                  alt={`${film.title} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Gallery Navigation */}
                {film.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentImageIndex(prev => {
                        const newIndex = prev === 0 ? film.images.length - 1 : prev - 1
                        return Math.max(0, Math.min(newIndex, film.images.length - 1))
                      })}
                      className="gallery-nav gallery-prev"
                    >
                      ←
                    </button>
                    <button 
                      onClick={() => setCurrentImageIndex(prev => {
                        const newIndex = prev === film.images.length - 1 ? 0 : prev + 1
                        return Math.max(0, Math.min(newIndex, film.images.length - 1))
                      })}
                      className="gallery-nav gallery-next"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Film Description */}
          <div className="film-modal-description">
            <p>{film.synopsis}</p>
          </div>

          {/* Awards Section */}
          {film.awards && film.awards.length > 0 && (
            <div className="film-modal-awards">
              <h3>Awards & Selections</h3>
              <div className="awards-grid">
                {film.awards.map((award, index) => (
                  <div key={index} className="award-item">
                    <div className="award-festival">{award.festival}</div>
                    <div className="award-title">{award.award}</div>
                    <div className="award-location">{award.location}</div>
                    <div className="award-year">{award.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Festivals */}
          {film.festivals && film.festivals.length > 0 && (
            <div className="film-modal-festivals">
              <h3>Festivals</h3>
              <p>{film.festivals.join(', ')}</p>
            </div>
          )}

          {/* Trailer */}
          {film.trailer && (
            <div className="film-modal-trailer">
              <h3>Trailer</h3>
              <div className="trailer-container">
                <iframe
                  src={film.trailer}
                  title={`${film.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Cast & Crew */}
          <div className="film-modal-credits">
            <div className="credits-row">
              {film.cast && film.cast.length > 0 && (
                <div className="credits-column">
                  <h4>Cast</h4>
                  <ul>
                    {film.cast.map((actor, index) => (
                      <li key={index}>{actor}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {film.crew && film.crew.length > 0 && (
                <div className="credits-column">
                  <h4>Crew</h4>
                  <ul>
                    {film.crew.map((person, index) => (
                      <li key={index}>
                        <strong>{person.role}:</strong> {person.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Financed By */}
          {film.financedBy && film.financedBy.length > 0 && (
            <div className="film-modal-financed">
              <h4>Financed by</h4>
              <p>{film.financedBy.join(', ')}</p>
            </div>
          )}

          {/* Copyright */}
          <div className="film-modal-footer">
            <p>Written & directed by Borbála Nagy</p>
            <p>© 2025 Borbála Nagy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmModal