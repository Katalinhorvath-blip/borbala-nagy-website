import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Film Works - Borbála Nagy Portfolio | Award-Winning Films',
  description: 'Explore the film portfolio of Borbála Nagy featuring award-winning short films and features including Mambo Maternica, Asphalt Flowers, and Nothing to See Here. Discover powerful cinema through the female gaze.',
  keywords: [
    'Borbála Nagy films', 'film portfolio', 'short films', 'feature films',
    'Mambo Maternica', 'Asphalt Flowers', 'Nothing to See Here', 'Hannah',
    'female gaze cinema', 'award-winning films', 'European cinema', 'independent films',
    'film gallery', 'director portfolio', 'cinema works'
  ],
  openGraph: {
    title: 'Film Works - Borbála Nagy Portfolio | Award-Winning Films',
    description: 'Explore award-winning films by Borbála Nagy including Mambo Maternica, Asphalt Flowers, and more. Powerful cinema through the female gaze.',
    url: 'https://borbalanagy.com/works',
    images: [
      {
        url: '/images/mambo-maternica/image1.png',
        width: 1200,
        height: 630,
        alt: 'Borbála Nagy Film Portfolio - Award-Winning Cinema',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: 'Film Works - Borbála Nagy Portfolio',
    description: 'Explore award-winning films by acclaimed filmmaker Borbála Nagy.',
    images: ['/images/mambo-maternica/image1.png'],
  },
  alternates: {
    canonical: '/works',
  },
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}