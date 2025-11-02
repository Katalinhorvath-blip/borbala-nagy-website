'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { films } from '../content'
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
    ? films.find(film => film.id === selectedFilm)
    : null

  return (
    <div className="works-container">
      <Header />
      
      {/* Main Content */}
      <div className="works-main-content">
        {/* Works Grid Container */}
        <div className="works-grid-container">
          {/* Single responsive grid for all films */}
          <div className="works-grid">
            {films.map((film) => (
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
                    <p className="film-details">
                      {film.duration && film.year ? `${film.duration}, ${film.year}` : 
                       film.duration ? film.duration :
                       film.year ? film.year : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="copyright-footer">
        © 2025 Borbála Nagy. All rights reserved.
      </div>

      {/* Film Modal */}
      {selectedFilmData && (
        <FilmModal
          film={selectedFilmData}
          onClose={closeModal}
          onNavigate={(direction) => {
            const currentIndex = films.findIndex(f => f.id === selectedFilm)
            let nextIndex
            
            if (direction === 'next') {
              nextIndex = currentIndex === films.length - 1 ? 0 : currentIndex + 1
            } else {
              nextIndex = currentIndex === 0 ? films.length - 1 : currentIndex - 1
            }
            
            setSelectedFilm(films[nextIndex].id)
          }}
        />
      )}
    </div>
  )
}