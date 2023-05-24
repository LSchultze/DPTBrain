import React from 'react'
import Image from 'next/image'
import style from '@/styles/Header.module.css'
import Link from "next/link";
import { BiBrain } from 'react-icons/Bi'
const Header = () => {
    return (
       <div className='text-white p-6' >
            <div className='text-center mt-20' >
                <h2 className='font-bold text-2xl '>Digital PT Brain </h2>
                
                <div className='flex justify-center mt-12 mb-12'>
                    <BiBrain size={150}/>
                </div>
                <div className='flex items-center justify-center mr-8'>
                    <h2 className='text-center'>Nathaniel Giovanni Yomogida, SPT</h2>
                    <h2 className='text-4xl ml-4'>/</h2>
                    <h2 className='ml-4 text-center'>Landon Kenneth Schultze, BSC</h2>
                </div>
                <div className='mt-6'> 
                    <h2 className='font-bold text-2xl '>SDSU </h2>
                    <h2 className='font-bold text-2xl '>CSULB</h2>
                </div>
                <div className="flex items-center justify-center">
                    <div className='bg-malibu-500 w-1/3 p-12 rounded-lg'>    
                        <Link href = '/' className="bg-gray-800 hover:bg-gray-600 flex justify-center items-center lg:p-4 p-2 rounded-lg cursor-pointer ">
                            <p className="font-bold">Begin</p>
                        </Link>
                    </div>
                </div>
                
                

                
            
            </div>
            
       </div>
    )
}

export default Header