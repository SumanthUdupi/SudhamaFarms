import { Inter } from 'next/font/google';
import './../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'SuDhama Farm - A Good Home. A Good Life.',
  description: 'A natural farm in the heart of Udupi, reclaiming the slow life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
