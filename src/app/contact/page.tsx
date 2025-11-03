import Header from '../components/Header'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="page-container-scroll">
      <Header />
      <div className="main-content">
        <div className="content-wrapper-about">
          <div className="contact-grid">
            {/* Left Column - Contact Information */}
            <div className="press-section">              
              <div className="press-subsection">
                <h3 className="press-subsection-title">Email</h3>
                <p className="press-subsection-content">
                  <a className="press-link" href="mailto:mail@borbalanagy.com" >mail@borbalanagy.com</a>
                </p>
              </div>
              <div className="press-subsection">
                <h3 className="press-subsection-title">Professional Links</h3>
                <div className="press-links">
                 <a 
                    href="https://www.instagram.com/bori.nagy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="press-link social-link"
                  >
                    <Image
                      src="/images/social/instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="social-icon"
                    />
                  </a>
                  <a 
                    href="https://vimeo.com/borbalanagy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="press-link social-link"
                  >
                    <Image
                      src="/images/social/vimeo.svg"
                      alt="Vimeo"
                      width={20}
                      height={20}
                      className="social-icon"
                    />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/borb%C3%A1la-nagy-07a55a111/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="press-link social-link"
                  >
                    <Image
                      src="/images/social/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="social-icon"
                    />
                  </a>
                  <a 
                    href="https://www.imdb.com/de/name/nm5980531/?ref_=fn_all_nme_1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="press-link social-link"
                  >
                    <Image
                      src="/images/social/imdb.svg"
                      alt="IMDb"
                      width={20}
                      height={20}
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.crew-united.com/de/Borbala-Nagy_348171.html#!searchterm=borbala%20nagy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="press-link social-link"
                  >
                    <Image
                      src="/images/social/crewunited.svg"
                      alt="Crew United"
                      width={20}
                      height={20}
                      className="social-icon"
                    />
                    Crew United
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Languages & Experience */}
            <div className="press-section">
              <div className="press-subsection">
                <h3 className="press-subsection-title">Languages</h3>
                <p className="press-subsection-content">
                  Hungarian (native), German (fluent), English (fluent), French (beginner)
                </p>
              </div>

              <div className="press-subsection">
                <h3 className="press-subsection-title">Shooting Experience</h3>
                <p className="press-subsection-content">
                  Germany, Hungary, France, Denmark, Romania
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="copyright-footer">
        © 2025 Borbála Nagy. All rights reserved.
      </div>
    </div>
  )
}