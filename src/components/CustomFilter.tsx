"use client"

import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {Listbox, Transition} from '@headlessui/react'
import { CustomFilterProps } from '@/types'

const CustomFilter = ({title, options}:CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e)=>setSelected(e)}>
        <div className='relative w-fit z-10'>
          <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border" >
            <span className="block truncate">{selected.title}</span>
            <Image src="/chevron-up-down.svg" width={20} height={20} alt="" className='ml-4 object-contain' />
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter