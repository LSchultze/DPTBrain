import React from 'react'
import Image from 'next/image'
import style from '@/styles/Header.module.css'
import Link from "next/link";
import { BiBrain } from 'react-icons/Bi'
const Header = () => {
    return (
       <div className='text-white p-6' >
            <div className='text-center ' >
                <h2 className='font-bold text-2xl '>Digital PT Brain </h2>
                
                <div className='flex justify-center'>
                    <BiBrain className="fill-green-500" size={150}/>
                </div>
                <div className='flex items-center justify-center mr-8'>
                    <h2 className='text-center'>Nathaniel Giovanni Yomogida, SPT</h2>
                    <h2 className='text-4xl ml-4'>/</h2>
                    <h2 className='ml-4 text-center'>Landon Kenneth Schultze, BSCS</h2>
                </div>
                <div className=''> 
                    <h2 className='font-bold text-2xl '>SDSU </h2>
                    <h2 className='font-bold text-2xl '>CSULB</h2>
                </div>
                <div className="flex items-center justify-center">
                    <div className='w-1/3 p-12'>    
                        <Link href = '/' className="bg-green-500 hover:bg-gray-600 flex justify-center items-center lg:p-4 p-2 rounded-lg cursor-pointer ">
                            <p className="font-bold">Begin</p>
                        </Link>
                    </div>
                </div>
                
            
            </div>

                <div className='grid grid-cols- gap-4'>
                    <h2 className={style.header}>Preface</h2>
                    <div>
                        <p className={style.paragraph}>This is a compilation of notes from the articles, 
                        experiences, and lectures from my experience in PT school. 
                        This document is not designed to be completed, but rather to be ever evolving as I progress through 
                        school and the field of physical therapy.</p>
                    </div>

                    <div>
                        <h2 className={style.header}>User Guide</h2>
                        <p className={style.paragraph}>This is designed to be an interactive document.  
                        Many of the terms are hyperlinks, which will allow you to quickly reference definitions. 
                        Adobe PDF is recommended for IPAD viewing. 
                        In addition, navigation is more efficient when using the bookmark tab. 
                        The table of contents at the beginning will let you quickly reference sections \& \ subsections, 
                        but I have included a more specific table of contents at the beginning of each section 
                        which contains more bookmarks.</p>

                    </div>

                </div>
                <div className='p-10'>
                    <ul class="list-disc">
                        <li className='italic text-base'>General Terms</li>
                    </ul>
                </div>
            
       </div>
    )
}

export default Header