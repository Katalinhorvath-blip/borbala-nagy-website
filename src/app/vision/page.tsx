import Header from '../components/Header'
import Image from 'next/image'

export default function Vision() {
  return (
    <div className="page-container-scroll">
      <Header />
      <div className="main-content">
        <div className="content-wrapper-about">
          <div className="horizontal-layout">
            {/* Vision Text */}
            <div className="text-container">
              <div className="bio-text">
                <span className="vision-quote">
                  &ldquo;I&apos;m captivated by human nature—people fascinate me. I believe that a person&apos;s true essence is revealed when faced with a moral dilemma. I delve into these pivotal moments, exploring self-confrontation through the societal mirror.&rdquo;
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Dialogue is my playground, where I explore the expressive power of language. My linguistics studies revealed the many facets of languages, which I now use to uncover my characters&apos; inner lives. Language, as a reflection of our history, society, and psyche, is the perfect tool for this exploration.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  With patient camerawork, I offer the audience time to observe. My background as a stage dancer influenced my understanding of choreography in three dimensions. This experience shapes how I work with actors and the space around them today.
                </span>
              </div>
            </div>

            {/* Director Photo */}
            <div className="image-container">
              <Image
                src="/images/vision/VISION IMAGE.jpg"
                alt="Borbála Nagy"
                width={500}
                height={600}
                className="director-image"
                priority
              />
              <div className="image-credit">
                Photo: Sára Salamon
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