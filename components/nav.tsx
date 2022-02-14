import React from 'react'
import Image from 'next/image'
import logo from '../asstst/logo.svg'
import israelFlag from '../asstst/israelFlag.svg'
import ukFlag from '../asstst/ukFlag.svg'
import etyopyaFlag from '../asstst/etyopyaFlag.svg'
import aritreyFlag from '../asstst/aritreyFlag.svg'
import arabFlag from '../asstst/arabFlag.svg'
import Link from 'next/link'
import { Router } from 'next/router'
import About from 'pages/about'

export default function Nav() {
  return (
    <div className="full-width flex justify-center">
      <div className="bg-light rounded-md columns-8  mx-auto h-[10%] flex flex-row absolute">
        <div className=" place-items-center flex justify-around">
          <div id="logo" className="m-4">
            <Image src={logo} alt={'logo'} />
          </div>
          <div className="m-4">
            <Link href="/#home">
              <a className="hover:font-bold hover:text-cyan-600">בית</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="/#about">
              <a className="hover:font-bold hover:text-cyan-600">
                אודות המרפאה
              </a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="/#contact_us">
              <a className="hover:font-bold hover:text-cyan-600">צרו קשר</a>
            </Link>
          </div>
          <div className="m-4">
            <Link href="/#">
              <a className="hover:font-bold hover:text-cyan-600">תמכו בנו</a>
            </Link>
          </div>
        </div>
        <div className="place-items-center  flex justify-around mr-20">
          <div id="arabFlag" className="m-2">
            <Image src={arabFlag} alt={'arab_flag'} />
          </div>
          <div id="israelFlag" className="m-2">
            <Image src={israelFlag} alt={'israel_flag'} />
          </div>
          <div id="ukFlag" className="m-2">
            <Image src={ukFlag} alt={'uk_flag'} />
          </div>
          <div id="etyopyaFlag" className="m-2">
            <Image src={etyopyaFlag} alt={'etyopya_flag'} />
          </div>
          <div id="aritreyFlag" className="m-2">
            <Image src={aritreyFlag} alt={'aritrey_flag'} />
          </div>
        </div>
      </div>
    </div>
  )
}
