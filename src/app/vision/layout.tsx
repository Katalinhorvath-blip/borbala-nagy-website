import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vision - Borbála Nagy | Female Gaze in Cinema & Directing Philosophy',
  description: 'Discover Borbála Nagy\'s directing vision and philosophy. Learn about her approach to storytelling through the female gaze and commitment to powerful, authentic cinema.',
  keywords: [
    'Borbála Nagy vision', 'female gaze', 'directing philosophy', 'cinema vision',
    'female perspective film', 'storytelling approach', 'director philosophy',
    'authentic cinema', 'women in film', 'feminist cinema', 'European art house'
  ],
  openGraph: {
    title: 'Vision - Borbála Nagy | Female Gaze in Cinema',
    description: 'Discover the directing vision and philosophy of acclaimed filmmaker Borbála Nagy and her approach to storytelling through the female gaze.',
    url: 'https://borbalanagy.com/vision',
    images: [
      {
        url: '/images/vision/image1.png',
        width: 1200,
        height: 630,
        alt: 'Borbála Nagy Vision - Female Gaze in Cinema',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: 'Vision - Borbála Nagy | Female Gaze in Cinema',
    description: 'Discover the directing vision of acclaimed filmmaker Borbála Nagy.',
    images: ['/images/vision/image1.png'],
  },
  alternates: {
    canonical: '/vision',
  },
}

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}