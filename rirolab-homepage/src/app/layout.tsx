import React from 'react';
import 'src/app/globals.css';
import Header from 'src/components/main/Header';
import Footer from 'src/components/main/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className="font-custom">
      <body>
        <Header />
        <div className="w-screen md:w-3/5 md:min-w-[768px] mx-auto px-4 pt-12 md:pt-14 flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
