import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & Media - Borbála Nagy | Behind the Scenes & Press Coverage',
  description: 'Press coverage, media resources, and behind-the-scenes content from Borbála Nagy\'s film productions. Download press materials and explore exclusive production photos.',
  keywords: [
    'Borbála Nagy press', 'film press kit', 'media coverage', 'behind the scenes',
    'press photos', 'film production photos', 'press materials', 'media resources',
    'filmmaker press', 'director media', 'film publicity', 'production stills'
  ],
  openGraph: {
    title: 'Press & Media - Borbála Nagy | Behind the Scenes',
    description: 'Press coverage and behind-the-scenes content from acclaimed filmmaker Borbála Nagy\'s productions.',
    url: 'https://borbalanagy.com/press',
    images: [
      {
        url: '/images/behindthescene/image1.png',
        width: 1200,
        height: 630,
        alt: 'Borbála Nagy Press and Behind the Scenes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: 'Press & Media - Borbála Nagy',
    description: 'Press coverage and behind-the-scenes content from filmmaker Borbála Nagy.',
    images: ['/images/behindthescene/image1.png'],
  },
  alternates: {
    canonical: '/press',
  },
}

export default function PressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}