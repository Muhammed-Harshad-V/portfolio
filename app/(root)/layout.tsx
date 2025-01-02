import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Footer from '../components/footer/footer'
import LoadingScreen from './(home)/loadingScreen'

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
           <LoadingScreen/>
            <Navbar/>
          {children}
            <Footer/>
        </div>
      )
    }
