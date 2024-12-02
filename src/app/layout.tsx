import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Gloria_Hallelujah } from 'next/font/google';

const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gloria.className}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}