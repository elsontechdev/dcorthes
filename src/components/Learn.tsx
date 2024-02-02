import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Drup } from '.'

function Learn() {
  return (
    <section className='bg-gray-100 sm:bg-yellow-300'>

      <Drup/>
      {/* <div className="px-8 py-12 max-w-md mx-auto">
      <Image className="h-10" width={1000} height={800} alt="main" src="/assets/svgs/beach-logo.svg" />
      <Image className="mt-6 rouded-lg shadow-xl" width={1000} height={800} alt="main" src="/assets/images/beach-work.jpg" />
      <h1 className="mt-6 text-2xl text-gray-900 font-bold">You can work from anywhere. <span className="block text-indigo-500">Take advantage of it</span></h1>
      <p className="mt-2 text-gray-600">Workcation helps you find work-friendly rentals in beatiful locations so you 
        can enjoy some nice weather even when you're not on vacation
      </p>
      <div className="mt-4 border">
      <Link className="inline-block bg-indigo-500 py-3 px-5 text-white rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm" href="#" >Book your escape</Link>

      </div>
     </div> */}

    </section>
  )
}

export default Learn