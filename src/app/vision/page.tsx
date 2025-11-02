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
                  &ldquo;I believe that stories shaped by the female gaze create space for more honest and complex portrayals of human experience—fostering empathy and expanding our understanding of the world.&rdquo;
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  In her work, Borbála Nagy examines the social structures that shape our lives, questioning power and inequality. She aims to provoke dialogue, reshape collective narratives, and contribute to a more equitable world. For her, cinema is more than storytelling–it's a catalyst for reflection and change.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Both in her films and on set, she advocates for an open, conscious, and inclusive society. Questions of loneliness, identity, and self-ownership frequently emerge in her movies, alongside themes of gender, migration, the impact of oppression, and the possibilities of resistance.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Fascinated by human nature, she explores how true character emerges when faced with a moral dilemma. These pivotal moments of self-confrontation, seen against the societal mirror, reveal the essence of the individual.
                </span>
                <br/><br/>
                <span className="bio-text-span">
                  Despite the weight of her subjects, she finds humor in everyday absurdities, looking at the world through a lens of irony.
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