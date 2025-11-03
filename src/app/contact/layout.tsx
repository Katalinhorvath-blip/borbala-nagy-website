import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Borbála Nagy - Filmmaker & Director | Collaboration Inquiries',
  description: 'Get in touch with Borbála Nagy for film projects, collaborations, and directing opportunities. Contact the award-winning filmmaker for your next cinema project.',
  keywords: [
    'contact Borbála Nagy', 'filmmaker contact', 'director contact', 'film collaboration',
    'hire filmmaker', 'film projects', 'directing services', 'cinema collaboration',
    'female director contact', 'European filmmaker', 'film production contact'
  ],
  openGraph: {
    title: 'Contact Borbála Nagy - Filmmaker & Director',
    description: 'Get in touch with award-winning filmmaker Borbála Nagy for film projects and collaborations.',
    url: 'https://borbalanagy.com/contact',
  },
  twitter: {
    title: 'Contact Borbála Nagy - Filmmaker',
    description: 'Get in touch with award-winning filmmaker Borbála Nagy for film projects.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}