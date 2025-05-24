import { Bricolage_Grotesque, Geist, Space_Grotesk } from 'next/font/google';

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-bricolage',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk'
});

export const geist = Geist({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk'
})
