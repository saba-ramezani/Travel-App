import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexBetween max-container mb-10'>
      <div className='get-app'>
        <div className='w-[100%] sm:w-[50%] flex-col gap-[50px]'>
          <h1 className='bold-40 lg:bold-64 w-[100%] my-5'>Get for FREE now!</h1>
          <p className='regular-16 text-gray-10 my-5'>Available on iOS and Android</p>
          <div className='flex flex-col gap-3 xl:flex-row'>
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp