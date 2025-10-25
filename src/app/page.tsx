'use client'

import { useState } from 'react'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import FilmModal from './components/FilmModal'
import { content } from './content'

export default function Home() {
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
    <div className="page-container">
      {/* Header Navigation */}
      <Header />
      
      <div className="main-content">
        <div className="home-main">
          {/* Hero Content */}
          <div className="hero-content">
          {/* Hero Text */}
          <div className="hero-text">
            <span className="hero-text-span">
              Borbála Nagy is a Berlin based filmmaker with Hungarian origins, graduate of the German Film and Television Academy Berlin. Her first feature &quot;
            </span>
            <span className="hero-text-bold">
              Mambo Maternica
            </span>
            <span className="hero-text-span">
              &quot; is in post-production.
            </span>
          </div>

          {/* CTA Button */}
          <div className="cta-container">
            <button 
              onClick={() => openModal('mambo-maternica')} 
              className="cta-button"
            >
              <div className="cta-button-text">
                ABOUT THE NEW MOVIE
              </div>
            </button>
          </div>
        </div>

        {/* Hero Image Gallery */}
        <div className="hero-gallery">
          <div className="gallery-container">
            <ImageSlider
              images={[
                '/mambo-1.jpg',
                '/mambo-2.jpg',
                '/mambo-3.jpg'
              ]}
              alt="Mambo Maternica film stills"
              autoSlideInterval={5000}
            />
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
    </div>
  )
}