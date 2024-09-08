import { FEATURES } from '@/constants';
import Image from 'next/image'
import React from 'react'

interface FeatureProps {
  title: string;
  icon: string;
  description: string;
}


const FeatureCard = ({title, icon, description}: FeatureProps) => (
  <div className='flex w-full flex-1 flex-col items-start'>
    <div className='bg-green-50 rounded-full p-4'>
      <Image src={icon} alt="icon" width={32} height={32}/>
    </div>
    <h1 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h1>
    <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
  </div>
)

const Features = () => {
  return (
    <section className='flex-col bg-feature-bg bg-center bg-no-repeat flexCenter mt-[100px] py-[50px] px-[50px]'>
      <div className='flex-col justify-start relative'>
        <Image className='absolute top-[-25px] left-[-5px] lg:top-[-15px] lg:left-[3px]' src="/camp.svg" alt="camp" width={40} height={40} />
        <h1 className="bold-40 lg:bold-64">Our Features</h1>
      </div>
      <div className='z-20 flex w-full flex-row '>
        <div className='lg:w-[40%] justify-center items-center flexCenter hidden'  >
          <Image src="/phone.png" alt="phone" width={300} height={150} className='rotate-[15deg] hidden lg:flex' />
        </div>
        <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 lg:w-[60%]'>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title} 
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features