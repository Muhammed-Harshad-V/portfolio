'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center z-50">
          <p className="text-white">Loading...</p>
          <div className="loader"></div>
        </div>
      ) : (
         null
      )}
    </>
  );
}
