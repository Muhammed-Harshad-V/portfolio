import { GlobalProvider } from './(root)/(context)/GlobalProvider';
import './globals.css'; // Import global styles
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'harshad',
  description: 'portfolio websiite of harshad',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <GlobalProvider>
      <body>
        {children}
      </body>
      </GlobalProvider>
    </html>
  )
}
