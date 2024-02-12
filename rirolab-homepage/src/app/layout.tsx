import React from 'react';
import 'src/styles/globals.css';
import Header from 'src/components/main/Header';
import Footer from 'src/components/main/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
