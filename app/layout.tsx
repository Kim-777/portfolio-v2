import React from 'react';
import type { Metadata } from 'next';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/reset.css';

export const metadata: Metadata = {
  title: 'portfolio 2022',
  description: 'kimyechan portfolio',
  openGraph: {
    title: 'Kim yechan Portfolio',
    description: '김예찬의 포트폴리오',
    url: 'https://kimyechan.website',
    type: 'website',
    images: [
      {
        url: '/circle-among.jpeg',
      },
    ],
  },
  icons: '/circle-among.jpeg',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <title>kim-skills</title>
        <meta name='description' content='kimyechan portfolio index page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='Kim yechan Portfolio' />
        <meta property='og:url' content='https://kimyechan.website' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/among.jpeg' />
        <meta property='og:description' content='김예찬의 포트폴리오' />
        <link rel='icon' href='/circle-among.png' />
      </Head>
      <body>{children}</body>
    </html>
  );
}
