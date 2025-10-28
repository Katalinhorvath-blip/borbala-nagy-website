import Header from '../components/Header'

export default function Contact() {
  return (
    <div className="page-container-scroll">
      <Header />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="contact-content">
            <h1 style={{
              fontSize: '36px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '700',
              color: '#333333',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Get in Touch
            </h1>
            <p style={{
              fontSize: '16px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '400',
              color: '#666666',
              marginBottom: '48px',
              textAlign: 'center',
              lineHeight: '24px'
            }}>
              Available for collaboration opportunities, screenings, and professional inquiries.
            </p>
          </div>          
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Left Column - Contact Information */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '700',
                color: '#333333',
                marginBottom: '24px'
              }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Email
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666'
                  }}>
                    contact@borbalanagy.com
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Location
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666'
                  }}>
                    Berlin, Germany
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Professional Links
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a 
                      href="https://www.instagram.com/borbalanagy_filmmaker" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: '400',
                        color: '#F1574D',
                        textDecoration: 'none'
                      }}
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/borbala-nagy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: '400',
                        color: '#F1574D',
                        textDecoration: 'none'
                      }}
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://www.imdb.com/de/name/nm5980531/?ref_=fn_all_nme_1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: '400',
                        color: '#F1574D',
                        textDecoration: 'none'
                      }}
                    >
                      IMDb
                    </a>
                    <a 
                      href="https://www.crew-united.com/de/Borbala-Nagy_348171.html#!searchterm=borbala%20nagy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: '400',
                        color: '#F1574D',
                        textDecoration: 'none'
                      }}
                    >
                      Crew United
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Languages & Experience */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '700',
                color: '#333333',
                marginBottom: '24px'
              }}>
                Languages & Experience
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Languages
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: '20px'
                  }}>
                    Hungarian (native), German (fluent), English (fluent), French (beginner)
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Shooting Experience
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: '20px'
                  }}>
                    Germany, Hungary, France, Denmark, Romania
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Representation
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: '20px'
                  }}>
                    For professional inquiries and representation details, please reach out via email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Background - Full Width */}
          <div style={{
            maxWidth: '1000px',
            margin: '60px auto 0 auto'
          }}>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '700',
                color: '#333333',
                marginBottom: '24px'
              }}>
                Professional Background
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Industry Associations
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: '20px'
                  }}>
                    Alumni of Cannes Cinéfondation Residence, Berlinale Talents, and Talents Sarajevo
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '8px'
                  }}>
                    Film Festivals
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: '20px'
                  }}>
                    Available as curator and jury member for international film festivals
                  </p>
                </div>
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