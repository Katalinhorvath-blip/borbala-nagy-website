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
                  &ldquo;The power of cinema is a catalyst for meaningful change. Narratives shaped by the female gaze create space for more complex, authentic, and diverse portrayals of human experience—fostering empathy and expanding our understanding of the world.&rdquo;
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  In her work, Borbála Nagy challenges unjust social structures with the aim of provoking a dialogue, reshaping collective narratives and contributing to a more equitable world.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Questions on loneliness, identity, and self-ownership keep emerging in her movies, while exploring gender, migration, the impact of oppression, and the possibilities of resistance.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  In her stories as well as on the film set, she advocates for an open, conscious and inclusive society.
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