'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import FilmModal from '../components/FilmModal'
import { films } from '../content'

// Note: For client components, metadata should be handled in layout.tsx or via head tags
// This is handled by the parent layout

export default function About() {
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
    <div className="page-container-scroll">
      <Header />
      <div className="main-content">
        <div className="content-wrapper-about">
          <div className="horizontal-layout">
            {/* Director Photo */}
            <div className="image-container">
              <Image
                src="/images/about/ABOUT IMAGE.jpg"
                alt="Borbála Nagy - Director"
                width={450}
                height={585.27}
                className="director-image"
                priority
              />
              <div className="image-credit">
                Photo: Sára Salamon
              </div>
            </div>
            
            {/* Biography Text */}
            <div className="text-container">
              <div className="bio-text">
                <span className="bio-text-span">
                  Borbála Nagy is an acclaimed scriptwriter-director, dividing her time between Berlin and Budapest. She develops feature and series projects while also open to collaborating with other artists.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Born into a family of dancers in Hungary, she studied Literature, Linguistics, and Movie Sciences in Budapest and Utrecht. After graduating, she began her career as a cultural journalist. Upon moving to Germany, she first worked as a film festival organizer before successfully applying to the German Film and Television Academy Berlin (DFFB).
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Since then, her films have been invited to festivals worldwide. Her latest short, the political satire{' '}
                  <button 
                    onClick={() => openModal('land-of-glory')}
                    className="film-link-button"
                  >
                    Land of Glory
                  </button>
                  , won both the German Short Film Award and the Hungarian Film Critics&apos; Prize, and was then broadcasted on HBO and MDR.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Member of the German Film Academy and the EWA - European Women&apos;s Audiovisual Network, alumna of Cannes Cinéfondation Residence and Berlinale Talents, curator for various international film festivals.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  She has recently completed her first feature{' '}
                  <button 
                    onClick={() => openModal('mambo-maternica')}
                    className="film-link-button"
                  >
                    Mambo Maternica
                  </button>
                  —a co-production between Hungary, France, and Germany. Her debut offers a subtle yet sharp exploration of women&apos;s maternal choices in societies with traditional gender roles.
                </span>
              </div>
            </div>
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