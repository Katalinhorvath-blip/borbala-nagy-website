import Header from '../components/Header'

export default function Press() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <div className="content-wrapper-about">
          <div className="press-content">
            <div className="press-section">
              <h2 className="press-section-title">Awards & Recognition</h2>
              <div className="press-item">
                <span className="press-highlight">Land of Glory</span> - Winner of German Short Film Award
              </div>
              <div className="press-item">
                <span className="press-highlight">Land of Glory</span> - Winner of Hungarian Film Critics&apos; Prize
              </div>
              <div className="press-item">
                <span className="press-highlight">Land of Glory</span> - Broadcasted on HBO and MDR
              </div>
            </div>

            <div className="press-section">
              <h2 className="press-section-title">Residencies & Programs</h2>
              <div className="press-item">
                Cannes Cinéfondation Residence - Alumna
              </div>
              <div className="press-item">
                Berlinale Talents - Alumna
              </div>
              <div className="press-item">
                Talents Sarajevo - Alumna
              </div>
              <div className="press-item">
                Midpoint Feature Launch - <span className="press-highlight">Mambo Maternica</span>
              </div>
            </div>

            <div className="press-section">
              <h2 className="press-section-title">Current Projects</h2>
              <div className="press-item">
                <span className="press-highlight">Mambo Maternica</span> - Feature film in post-production
              </div>
              <div className="press-item">
                Co-production between Hungary, France, and Germany
              </div>
              <div className="press-item">
                Winner of Peter-Pewas-Prize
              </div>
            </div>

            <div className="press-section">
              <h2 className="press-section-title">Professional Activities</h2>
              <div className="press-item">
                Film festival curator and jury member
              </div>
              <div className="press-item">
                Script consultant for various international projects
              </div>
              <div className="press-item">
                Graduate of German Film and Television Academy Berlin (DFFB)
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