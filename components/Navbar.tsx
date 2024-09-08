"use client";

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import Button from './Button'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
           <Image src="/hilink-logo.svg" alt='logo' width={74} height={29}></Image> 
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link, index) => (
                <Link className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </ul>
        <div className='lg:flexCenter hidden'>
            <Button
                type='button'
                title='Login'
                icon='/user.svg'
                variant='btn_dark_green'
            />
        </div>
        <Image
            src={toggle ? "/close-black.svg" : "/menu.svg"}
            alt='menu'
            width={40}
            height={40}
            className='inline-block cursor-pointer lg:hidden bg-green-200 p-2 rounded-full'
            onClick={() => {
                if (toggle) {
                    setToggle(false);
                } else {
                    setToggle(true);
                }
            }}
        ></Image>
        {toggle && (
            <div className='flex gap-12 lg:hidden flex-col z-50 absolute top-[72px] right-5 bg-gray-200 rounded-[20px] py-5 px-6 '>
                <ul>
                    {NAV_LINKS.map((link, index) => (
                        <Link className={`regular-16 text-black flexCenter cursor-pointer py-3
                         transition-all hover:font-bold ${index !== NAV_LINKS.length - 1 ? "border-b-[1px] border-b-green-500" : "border-none"} `} href={link.href} key={link.key}>{link.label}</Link>
                    ))}
                </ul>
                <div className='lg:hidden flexCenter'>
                    <Button
                        type='button'
                        title='Login'
                        icon='/user.svg'
                        variant='btn_dark_green'
                    />
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar