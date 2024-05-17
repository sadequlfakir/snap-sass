import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: 'SnapSass AI',
  description:
    'SnapSass AI, the AI-powered ultimate app for giving your images a sassy twist! Our cutting-edge AI transforms ordinary photos into hilarious, snarky masterpieces with just a few taps. Whether you’re looking to add a witty caption, a cheeky comment, or a playful comeback, SnapSass AI has got you covered.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#624cf5',
        },
      }}
    >
      <html lang="en">
        <body className={cn('font-ibmPlex antialiased', ibmPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
