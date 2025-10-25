import Header from '../components/Header'

export default function Contact() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="contact-content">
            <p className="contact-text">
              Get in touch for collaboration opportunities, screenings, or inquiries about Borbála Nagy&apos;s work.
            </p>
          </div>          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px'
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '700',
                color: '#333333',
                marginBottom: '24px'
              }}>
                Get in Touch
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

            {/* Professional Networks */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: '700',
                color: '#333333',
                marginBottom: '24px'
              }}>
                Professional Networks
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