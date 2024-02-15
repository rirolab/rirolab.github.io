import React from 'react';
import 'src/app/globals.css';
import Header from 'src/components/main/Header';
import Footer from 'src/components/main/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className="font-custom">
      <body className="w-full h-full md:w-3/5 md:min-w-[768px] mx-auto px-4 pt-14 md:pt-16 flex items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
