import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'serif']
});

