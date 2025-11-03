'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Award {
  festival?: string
  award: string
  year: string
  location: string
  highlighted?: boolean
  featured?: boolean
  image?: string
}

interface Nomination {
  festival: string
  nomination: string
  year: string
  location: string
  highlighted?: boolean
  image?: string
}

interface Invitation {
  name: string
  festival?: string
  location?: string
  year?: string
  highlighted?: boolean
  image?: string
}

interface FilmData {
  id: string
  title: string
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
  fundedBy?: string[]
  
  // Awards and recognition
  awards?: Award[]
  nominations?: Nomination[]
  nominee?: string
  specialMention?: string
  
  // Festival information
  festivals?: string[]
  invitations?: (string | Invitation)[]
  
  // Producer logos
  producerLogos?: string[] // deprecated - use productionLogos and financingLogos
  productionLogos?: string[]
  financingLogos?: string[]
  
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
            <div className="film-modal-meta">
              <span>{film.type || 'Film'}</span>
              {film.duration && <><span> | </span><span>{film.duration}</span></>}
              {film.year && <><span> | </span><span>{film.year}</span></>}
              <br />
              {film.language && <span>Language: {film.language}</span>}
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
              
              {/* Featured Awards - Top two awards using highlighted style */}
              {film.awards.some(award => award.featured) && (
                <div className="highlighted-items-container featured-two-items">
                  {film.awards
                    .filter(award => award.featured)
                    .map((award, index) => (
                      <div key={`featured-${index}`} className="highlighted-item">
                        {award.image && (
                          <div className="highlight-image">
                            <Image
                              src={award.image}
                              alt={`${award.award} - ${award.festival}`}
                              width={200}
                              height={133}
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        )}
                        <div className="award-text">
                          <p><strong>{award.award}</strong></p>
                          <p>{award.festival}</p>
                          {(award.location || award.year) && (
                            <p>{[award.location, award.year].filter(Boolean).join(', ')}</p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
              
              {/* Other Highlighted Awards - 3 per row */}
              {film.awards.some(award => award.highlighted && !award.featured) && (
                <div className="highlighted-items-container three-items">
                  {film.awards
                    .filter(award => award.highlighted && !award.featured)
                    .map((award, index) => (
                      <div key={`highlighted-${index}`} className="highlighted-item">
                        {award.image && (
                          <div className="highlight-image">
                            <Image
                              src={award.image}
                              alt={`${award.award} - ${award.festival}`}
                              width={150}
                              height={100}
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        )}
                        <div className="award-text">
                          <p><strong>{award.award}</strong></p>
                          <p>{award.festival}</p>
                          {(award.location || award.year) && (
                            <p>{[award.location, award.year].filter(Boolean).join(', ')}</p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
              
              {/* Regular Awards */}
              <div>
                {film.awards
                  .filter(award => !award.highlighted)
                  .map((award, index) => (
                    <div key={`regular-${index}`}>
                      <p><strong>{award.award}</strong></p>
                      <p>{award.festival}</p>
                      {(award.location || award.year) && (
                        <p>{[award.location, award.year].filter(Boolean).join(', ')}</p>
                      )}
                    </div>
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

          {/* Nominations */}
          {film.nominations && film.nominations.length > 0 && (
            <div className="film-modal-section">
              <h3>Nominations</h3>
              
              {/* Highlighted Nominations in a row */}
              {film.nominations.some(nomination => nomination.highlighted) && (
                <div className={`highlighted-items-container ${
                  (film.nominations?.filter(nomination => nomination.highlighted).length === 2) ? 'two-items' : ''
                }`}>
                  {film.nominations
                    .filter(nomination => nomination.highlighted)
                    .map((nomination, index) => (
                      <div key={`highlighted-${index}`} className="highlighted-item">
                        {nomination.image && (
                          <div className="highlight-image">
                            <Image
                              src={nomination.image}
                              alt={`${nomination.nomination} - ${nomination.festival}`}
                              width={(film.nominations?.filter(nomination => nomination.highlighted).length === 2) ? 200 : 150}
                              height={(film.nominations?.filter(nomination => nomination.highlighted).length === 2) ? 133 : 100}
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        )}
                        <div className="nomination-text">
                          <p><strong>{nomination.nomination}</strong></p>
                          <p>{nomination.festival}</p>
                          {(nomination.location || nomination.year) && (
                            <p>{[nomination.location, nomination.year].filter(Boolean).join(', ')}</p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
              
              {/* Regular Nominations */}
              <div>
                {film.nominations
                  .filter(nomination => !nomination.highlighted)
                  .map((nomination, index) => (
                    <div key={`regular-${index}`}>
                      <p><strong>{nomination.nomination}</strong></p>
                      <p>{nomination.festival}</p>
                      {(nomination.location || nomination.year) && (
                        <p>{[nomination.location, nomination.year].filter(Boolean).join(', ')}</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Invitations */}
          {film.invitations && film.invitations.length > 0 && (
            <div className="film-modal-section">
              <h3>Invitations</h3>
              
              {/* Highlighted Invitations in a row */}
              {film.invitations.some(invitation => 
                typeof invitation === 'object' && invitation.highlighted
              ) && (
                <div className={`highlighted-items-container ${
                  (() => {
                    const highlightedCount = film.invitations.filter(invitation => 
                      typeof invitation === 'object' && invitation.highlighted
                    ).length;
                    if (highlightedCount === 2) return 'two-items';
                    if (highlightedCount === 4) return 'four-items';
                    return '';
                  })()
                }`}>
                  {film.invitations
                    .filter(invitation => 
                      typeof invitation === 'object' && invitation.highlighted
                    )
                    .map((invitation, index) => {
                      const inv = invitation as Invitation;
                      const highlightedCount = film.invitations?.filter(invitation => 
                        typeof invitation === 'object' && invitation.highlighted
                      ).length || 0;
                      return (
                        <div key={`highlighted-${index}`} className="highlighted-item">
                          {inv.image && (
                            <div className="highlight-image">
                              <Image
                                src={inv.image}
                                alt={`${inv.name} invitation`}
                                width={highlightedCount === 2 ? 200 : highlightedCount === 4 ? 120 : 150}
                                height={highlightedCount === 2 ? 133 : highlightedCount === 4 ? 80 : 100}
                                style={{ objectFit: 'contain' }}
                              />
                            </div>
                          )}
                          <div className="invitation-text">
                            <p><strong>{inv.name}</strong></p>
                            {inv.festival && <p>{inv.festival}</p>}
                            {(inv.location || inv.year) && (
                              <p>{[inv.location, inv.year].filter(Boolean).join(', ')}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
              
              {/* Regular Invitations */}
              <div>
                {film.invitations
                  .filter(invitation => 
                    typeof invitation === 'string' || 
                    (typeof invitation === 'object' && !invitation.highlighted)
                  )
                  .map((invitation, index) => {
                    if (typeof invitation === 'string') {
                      return <p key={`regular-string-${index}`}>{invitation}</p>
                    } else {
                      const inv = invitation as Invitation;
                      return (
                        <div key={`regular-object-${index}`}>
                          <p><strong>{inv.name}</strong></p>
                          {inv.festival && <p>{inv.festival}</p>}
                          {(inv.location || inv.year) && (
                            <p>{[inv.location, inv.year].filter(Boolean).join(', ')}</p>
                          )}
                        </div>
                      )
                    }
                  })}
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
              <h3>Crew</h3>
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
                <p>
                  <strong>
                    {film.coProducers && film.coProducers.length > 0 ? 'Producers:' : 'Producer:'}
                  </strong> {film.producer}
                </p>
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
            
            {/* Production Logos */}
            {film.productionLogos && film.productionLogos.length > 0 && (
              <div className="highlighted-items-container">
                {film.productionLogos.map((logo, index) => (
                  <div key={`production-logo-${index}`} className="highlighted-item">
                    <div className="highlight-image">
                      <Image
                        src={logo}
                        alt={`Production company logo ${index + 1}`}
                        width={150}
                        height={100}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
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

          {/* Funded By */}
          {film.fundedBy && film.fundedBy.length > 0 && (
            <div className="film-modal-section">
              <div>
                {film.fundedBy.map((funder, index) => (
                  <p key={index}>{funder}</p>
                ))}
              </div>
            </div>
          )}

          {/* Financing Logos at Bottom */}
          {film.financingLogos && film.financingLogos.length > 0 && (
            <div className="financing-logos-bottom">
              {film.financingLogos.map((logo, index) => {
                const isNFI = logo.includes('nfi.png');
                return (
                  <div key={`financing-logo-${index}`} className="financing-logo-item">
                    <Image
                      src={logo}
                      alt={`Financing organization logo ${index + 1}`}
                      width={isNFI ? 60 : 80}
                      height={isNFI ? 40 : 53}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                );
              })}
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