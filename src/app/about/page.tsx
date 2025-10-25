import Image from 'next/image'
import Header from '../components/Header'

export default function About() {
  return (
    <div className="page-container">
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
                  <span className="bio-text-span-bold">Land of Glory</span>
                  {' '}won both the German Short Film Award and the Hungarian Film Critics&apos; Prize, and was then broadcasted on HBO and MDR.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Borbála Nagy is an alumna of Cannes Cinéfondation Residence, Berlinale Talents and Talents Sarajevo. She serves as a curator and jury member for various film festivals. Currently, she is completing her first feature{' '}
                  <span className="bio-text-span-bold">Mambo Maternica</span>
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
    </div>
  )
}