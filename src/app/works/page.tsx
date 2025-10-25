'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { content } from '../content'
import FilmModal from '../components/FilmModal'

export default function Works() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null)

  const openModal = (filmId: string) => {
    setSelectedFilm(filmId)
  }

  const closeModal = () => {
    setSelectedFilm(null)
  }

  const selectedFilmData = selectedFilm 
    ? content.films.find(film => film.id === selectedFilm)
    : null

  return (
    <div className="works-container">
      <Header />
      
      {/* Main Content */}
      <div className="works-main-content">
        {/* Works Grid Container */}
        <div className="works-grid-container">
          {/* Grid Layout: 3 films per row for first 6, then 2 centered */}
          <div className="works-top-grid">
            {content.films.slice(0, 6).map((film) => (
              <div 
                key={film.id} 
                className="film-card"
                onClick={() => openModal(film.id)}
              >
                <Image
                  src={film.images[0]}
                  alt={film.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={`film-info-overlay ${film.type === 'Feature' ? 'compact' : ''}`}>
                  <div className="film-category">{film.type.toUpperCase()}</div>
                  <div>
                    <h3 className="film-title">{film.title}</h3>
                    {film.subtitle && <p className="film-subtitle">{film.subtitle}</p>}
                    <p className="film-details">{film.duration}, {film.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 films centered */}
          <div className="works-bottom-grid">
            {content.films.slice(6, 8).map((film) => (
              <div 
                key={film.id} 
                className="film-card"
                onClick={() => openModal(film.id)}
              >
                <Image
                  src={film.images[0]}
                  alt={film.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="film-info-overlay">
                  <div className="film-category">{film.type.toUpperCase()}</div>
                  <div>
                    <h3 className={`film-title ${!film.subtitle ? 'compact' : ''}`}>{film.title}</h3>
                    {film.subtitle && <p className="film-subtitle">{film.subtitle}</p>}
                    <p className="film-details">{film.duration}, {film.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="works-copyright-footer">
        © 2025 Borbála Nagy. All rights reserved.
      </div>

      {/* Film Modal */}
      {selectedFilmData && (
        <FilmModal
          film={selectedFilmData}
          onClose={closeModal}
          onNavigate={(direction) => {
            const currentIndex = content.films.findIndex(f => f.id === selectedFilm)
            let nextIndex
            
            if (direction === 'next') {
              nextIndex = currentIndex === content.films.length - 1 ? 0 : currentIndex + 1
            } else {
              nextIndex = currentIndex === 0 ? content.films.length - 1 : currentIndex - 1
            }
            
            setSelectedFilm(content.films[nextIndex].id)
          }}
        />
      )}
    </div>
  )
}