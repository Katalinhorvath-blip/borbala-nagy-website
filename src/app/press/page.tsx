'use client'

import { useState } from 'react'
import Header from '../components/Header'
import ImageModal from '../components/ImageModal'

export default function Press() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const behindTheSceneImages = [
    {
      src: '/images/behindthescene/image1.png',
      alt: 'Behind the Scene 1'
    },
    {
      src: '/images/behindthescene/image2.png',
      alt: 'Behind the Scene 2'
    },
    {
      src: '/images/behindthescene/image3.png',
      alt: 'Behind the Scene 3'
    },
    {
      src: '/images/behindthescene/image4.png',
      alt: 'Behind the Scene 4'
    }
  ]

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }
  return (
    <div className="page-container-scroll">
      <Header />
      <div className="main-content">
        <div className="content-wrapper-about">
          <div className="press-content">
            {/* SELECTED PRESS */}
            <div className="press-section">
              <h2 className="press-section-title">Selected Press</h2>
              
              <div className="press-subsection">
                <h3 className="press-subsection-title">
                  In Hungarian
                </h3>
                <div className="press-links">
                  <a href="https://magyar.film.hu/filmhu/magazin/nagy-borbala-interju-tuleltuk-ember-lett-belolunk-pannonia-dicserete.html" target="_blank" rel="noopener noreferrer" className="press-link">Filmhu</a>
                  <a href="https://telex.hu/kult/2021/06/02/nagy-borbala-pannonia-dicserete-interju-magyar-film-rovidfilm-rendezo" target="_blank" rel="noopener noreferrer" className="press-link">Telex</a>
                  <a href="https://magyarnarancs.hu/mikrofilm/elvarazsol-meglep-nyugtalanit-234375" target="_blank" rel="noopener noreferrer" className="press-link">Magyar Narancs</a>
                  <a href="https://recorder.blog.hu/2022/02/22/betetdal_nagy_borbala" target="_blank" rel="noopener noreferrer" className="press-link">Recorder</a>
                  <a href="https://www.klubradio.hu/archivum/hangosfilm-szelesvasznu-verzio-2020-december-05-szombat-1330-14408" target="_blank" rel="noopener noreferrer" className="press-link">Klubrádió</a>
                  <a href="https://www.youtube.com/watch?v=He8aEvefOg8&ab_channel=ATVMagyarorsz%C3%A1g" target="_blank" rel="noopener noreferrer" className="press-link">ATV</a>
                </div>
              </div>

              <div className="press-subsection">
                <h3 className="press-subsection-title">
                  In English
                </h3>
                <div className="press-links">
                  <a href="https://variety.com/2020/film/spotlight/cutting-edge-talent-camp-discovering-germanys-next-generation-of-filmmakers-iffmh-1234824515/" target="_blank" rel="noopener noreferrer" className="press-link">Variety</a>
                  <a href="https://www.filmneweurope.com/news/hungary-news/item/125327-production-borbala-nagy-shoots-debut-feature-about-dilemmas-of-motherhood" target="_blank" rel="noopener noreferrer" className="press-link">Film New Europe</a>
                  <a href="https://cineuropa.org/en/newsdetail/464011" target="_blank" rel="noopener noreferrer" className="press-link">Cineuropa</a>
                </div>
              </div>

              <div className="press-subsection">
                <h3 className="press-subsection-title">
                  In German
                </h3>
                <div className="press-links">
                  <a href="https://www.shortfilm.de/fuenf-fragen-an-borbala-nagy/" target="_blank" rel="noopener noreferrer" className="press-link">Shortfilm</a>
                  <a href="https://beta.blickpunktfilm.de/details/455890" target="_blank" rel="noopener noreferrer" className="press-link">Blickpunktfilm</a>
                  <a href="https://indiefilmtalk.de/episodes/dffb-sessions-der-deutsche-kurzfilmpreis-2020-und-die-sichtbarkeit-des-kurzfilms/" target="_blank" rel="noopener noreferrer" className="press-link">IndieFilmTalk</a>
                  <a href="https://vimeo.com/647639925" target="_blank" rel="noopener noreferrer" className="press-link">Talks&apos;n&apos;Topics</a>
                </div>
              </div>
            </div>
            
            {/* Behind the Scene Images Gallery */}
            <div className="press-gallery-section">
              <div className="press-gallery-grid">
                {behindTheSceneImages.map((image, index) => (
                  <div 
                    key={index}
                    className="press-gallery-item"
                    onClick={() => openImageModal(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="press-gallery-thumbnail"
                    />
                    <div className="press-gallery-overlay">
                      <span className="press-gallery-zoom">+</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Photo Credit */}
              <div className="image-credit">
                Photos: Zsófia Sivák
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="copyright-footer">
        © 2025 Borbála Nagy. All rights reserved.
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          imageSrc={selectedImage}
          imageAlt="Behind the Scene"
          onClose={closeImageModal}
        />
      )}
    </div>
  )
}