import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Borbála Nagy - Award-Winning Filmmaker & Director',
  description: 'Learn about Borbála Nagy, acclaimed filmmaker and director. Graduate of DFFB Berlin, winner of German Short Film Award and Hungarian Film Critics Prize, creating powerful cinema through the female gaze.',
  keywords: [
    'Borbála Nagy biography', 'filmmaker bio', 'female director', 'DFFB Berlin',
    'Hungarian filmmaker', 'German cinema', 'female gaze', 'director biography',
    'film education', 'award-winning director', 'European cinema', 'independent filmmaker'
  ],
  openGraph: {
    title: 'About Borbála Nagy - Award-Winning Filmmaker & Director',
    description: 'Learn about acclaimed filmmaker Borbála Nagy, her journey from Hungary to Berlin, and her award-winning films exploring stories through the female gaze.',
    url: 'https://borbalanagy.com/about',
    images: [
      {
        url: '/images/about/ABOUT IMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'Borbála Nagy - Filmmaker and Director Portrait',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    title: 'About Borbála Nagy - Award-Winning Filmmaker',
    description: 'Learn about acclaimed filmmaker Borbála Nagy and her award-winning journey in cinema.',
    images: ['/images/about/ABOUT IMAGE.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}