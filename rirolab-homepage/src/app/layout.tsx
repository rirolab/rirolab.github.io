import React from 'react';
import 'src/styles/globals.css';
import Header from 'src/components/main/Header';

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
