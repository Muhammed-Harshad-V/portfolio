'use client';
import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Footer from '../components/footer/footer'
// import LoadingScreen from './(home)/loadingScreen'
// import { useGlobal } from './(context)/GlobalProvider'

export default function HomeLayout({children}: {children: React.ReactNode}) {
    // const {isLoading} = useGlobal(); 

    return (
      <>
           {/* <LoadingScreen/> */}
        <div
        //  className={`${isLoading ? 'hidden' : 'block'}`}
         >
            <Navbar/>
          {children}
            <Footer/>
        </div>
      </>
      )
    }
