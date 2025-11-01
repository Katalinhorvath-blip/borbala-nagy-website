'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Award {
  festival: string
  award: string
  year: string
  location: string
}

interface CrewMember {
  role: string
  name: string
}

interface FilmData {
  id: string
  title: string
  subtitle?: string
  type: string
  duration?: string
  year?: string
  language?: string
  originalTitle?: string
  synopsis: string
  images: string[]
  
  // Core production info from your document
  writtenAndDirectedBy?: string
  directedBy?: string
  coAuthor?: string
  script?: string
  producer?: string
  coProducers?: string[]
  directorOfPhotography?: string
  editing?: string
  soundDesign?: string
  originalScore?: string
  
  // Cast information
  mainCast?: string[]
  
  // Financing
  financedBy?: string[]
  
  // Awards and recognition
  awards?: Award[]
  nominee?: string
  specialMention?: string
  
  // Festival information
  festivals?: string[]
  invitations?: string[]
  
  // Additional notes
  basedOn?: string
  
  // Media
  trailer?: string
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

  // Add body class when modal is open to hide header
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  if (!film) return null

  return (
    <div className="film-modal-overlay">
      <div className="film-modal-container">
        {/* Navigation and Close Buttons */}
        <div className="film-modal-nav">
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

                    <button 
            onClick={onClose}
            className="film-modal-close"
            aria-label="Close modal"
          >
            ✕
          </button>
          
        </div>

        {/* Modal Content */}
        <div className="film-modal-content">
          {/* Film Header */}
          <div className="film-modal-header">
            <h1 className="film-modal-title">{film.title || 'Untitled'}</h1>
            {film.subtitle && (
              <p className="film-modal-subtitle">{film.subtitle}</p>
            )}
            <div className="film-modal-meta">
              <span>{film.type || 'Film'}</span>
              {film.duration && <><span> | </span><span>{film.duration}</span></>}
              {film.year && <><span> | </span><span>{film.year}</span></>}
              <br />
              <span>Language: {film.language || 'TBD'}</span>
              {film.originalTitle && (
                <>
                  <br />
                  <span className="film-modal-original">Original title: {film.originalTitle}</span>
                </>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="film-modal-gallery">
            {film.images && film.images.length > 0 ? (
              <div className="film-gallery-container">
                <div className="film-gallery-main">
                  <div className="film-modal-main-image">
                    {film.images[currentImageIndex] ? (
                      <Image
                        src={film.images[currentImageIndex]}
                        alt={`${film.title} - Image ${currentImageIndex + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#666' }}>
                        <p>Image not available</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Gallery Navigation Arrows */}
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
                
                {/* Thumbnail Strip */}
                {film.images.length > 1 && (
                  <div className="film-gallery-thumbnails">
                    {film.images.map((image, index) => (
                      image ? (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        >
                          <Image
                            src={image}
                            alt={`${film.title} - Thumbnail ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </button>
                      ) : null
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="film-modal-main-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                <p>No images available</p>
              </div>
            )}
          </div>

          {/* Synopsis */}
          <div className="film-modal-description">
            <p>{film.synopsis || 'Synopsis to be added'}</p>
            {film.basedOn && (
              <p style={{ fontStyle: 'italic', marginTop: '12px' }}>{film.basedOn}</p>
            )}
          </div>

          {/* Awards */}
          {film.awards && film.awards.length > 0 && (
            <div className="film-modal-section">
              <h3>Awards</h3>
              <div>
                {film.awards.map((award, index) => (
                  <p key={index}>
                    <strong>{award.award}</strong> — {award.festival} ({award.location}, {award.year})
                  </p>
                ))}
              </div>
              
              {film.nominee && (
                <p><strong>Nominee:</strong> {film.nominee}</p>
              )}
              
              {film.specialMention && (
                <p><strong>Special mention:</strong> {film.specialMention}</p>
              )}
            </div>
          )}

          {/* Invitations */}
          {film.invitations && film.invitations.length > 0 && (
            <div className="film-modal-section">
              <h3>Invitations</h3>
              <div>
                {film.invitations.map((invitation, index) => (
                  <p key={index}>{invitation}</p>
                ))}
              </div>
            </div>
          )}

          {/* Trailer */}
          {film.trailer && (
            <div className="film-modal-trailer">
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
            {film.mainCast && film.mainCast.length > 0 && (
              <div className="film-modal-section">
                <h3>Main cast</h3>
                <div className="cast-list-centered">
                  {film.mainCast.map((actor, index) => (
                    <p key={index}>{actor}</p>
                  ))}
                </div>
              </div>
            )}
            
            <div className="film-modal-section">
              <h3>Production team</h3>
              {film.writtenAndDirectedBy && (
                <p><strong>Written & directed by:</strong> {film.writtenAndDirectedBy}</p>
              )}
              {film.directedBy && (
                <p><strong>Directed by:</strong> {film.directedBy}</p>
              )}
              {film.script && (
                <p><strong>Script:</strong> {film.script}</p>
              )}
              {film.coAuthor && (
                <p><strong>Co-author:</strong> {film.coAuthor}</p>
              )}
              {film.producer && (
                <p><strong>Producer:</strong> {film.producer}</p>
              )}
              {film.coProducers && film.coProducers.length > 0 && (
                <p><strong>Co-producers:</strong> {film.coProducers.join(', ')}</p>
              )}
              {film.directorOfPhotography && (
                <p><strong>Director of Photography:</strong> {film.directorOfPhotography}</p>
              )}
              {film.editing && (
                <p><strong>Editing:</strong> {film.editing}</p>
              )}
              {film.soundDesign && (
                <p><strong>Sound Design:</strong> {film.soundDesign}</p>
              )}
              {film.originalScore && (
                <p><strong>Original Score:</strong> {film.originalScore}</p>
              )}
            </div>
          </div>

          {/* Financed By */}
          {film.financedBy && film.financedBy.length > 0 && (
            <div className="film-modal-section">
              <h3>Financed by</h3>
              <div>
                {film.financedBy.map((financier, index) => (
                  <p key={index}>{financier}</p>
                ))}
              </div>
            </div>
          )}

          {/* Festivals */}
          {film.festivals && film.festivals.length > 0 && (
            <div className="film-modal-section">
              <h3>Festivals</h3>
              <p>{film.festivals.join(', ')}</p>
            </div>
          )}

          {/* Copyright */}
          <div className="film-modal-footer">
            <p>© 2025 Borbála Nagy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmModal