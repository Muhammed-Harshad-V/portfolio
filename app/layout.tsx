import './globals.css'; // Import global styles
import Navbar from './components/navbar/navbar';
import LoadingScreen from './components/home/loadingScreen';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
