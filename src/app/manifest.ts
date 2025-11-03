import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Borbála Nagy - Filmmaker Portfolio',
    short_name: 'Borbála Nagy',
    description: 'Award-winning filmmaker and director creating powerful stories through the female gaze',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F1574D',
    icons: [
      {
        src: '/images/about/ABOUT IMAGE.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'maskable'
      },
      {
        src: '/images/about/ABOUT IMAGE.jpg',
        sizes: '512x512',
        type: 'image/jpeg'
      }
    ],
    categories: ['entertainment', 'photo', 'productivity'],
    lang: 'en-US',
    orientation: 'portrait-primary'
  }
}