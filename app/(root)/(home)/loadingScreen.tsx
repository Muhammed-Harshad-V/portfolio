"use client";
import { useGlobal } from "../(context)/GlobalProvider";

export default function LoadingScreen() {
  const { isLoading } = useGlobal(); // Loading state from the global context


  return (
    <>
      {isLoading && (
         <div className="w-full h-screen bg-black flex items-center justify-center flex-col">
            <p className="font-mono text-retroOrange text-[40px] font-bold fade-in-out-right leading-none">Harshad</p>
            <p className="font-mono text-retroWhite text-[20px] fade-in-out-left mt--4 leading-none">portfolio</p>
         </div>

      )}
    </>
  );
}
