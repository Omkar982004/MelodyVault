import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';
import { Metadata } from 'next';

import React from 'react';
import Header from './Header';


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
      </body>
      <GoogleAnalytics gaId="G-1FVFMZZ0KL" />
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | HashGuard',
    default: 'HashGuard',
  },
  description: 'HashGuard',
};
