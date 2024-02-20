import React from 'react';
import 'src/app/globals.css';
import Header from 'src/components/main/Header';
import Footer from 'src/components/main/Footer';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | KAIST RIRO Lab',
    default: 'KAIST RIRO Lab', 
  },
  description: "Robust Intelligence and Robotics Laboratory in the School of Computing, KAIST led by Professor Daehyung Park, Ph.D.",
  metadataBase: new URL('https://rirolab.kaist.ac.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KAIST RIRO Lab',
    description: 'Robust Intelligence and Robotics Laboratory in the School of Computing, KAIST led by Professor Daehyung Park, Ph.D."',
    url: 'https://rirolab.kaist.ac.kr',
    siteName: 'KAIST RIRO Lab Homepage',
    images: '/images/main/og.png',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className="font-custom">
      <body>
        <Header />
        <div className="w-screen md:w-3/5 md:min-w-[768px] md:max-w-[1080px] mx-auto px-4 pt-12 md:pt-14 flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
