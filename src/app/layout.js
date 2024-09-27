"use client";

import { Provider } from 'react-redux';
import store from '../redux/store';
import localFont from 'next/font/local';
import './globals.css';
import { metadata } from './metadata';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  
  return (
    
    <Provider store={store}>
      
      <html lang="en">

        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>

      </html>
      
    </Provider>

  );
}
