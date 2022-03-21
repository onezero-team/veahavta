import React from 'react'
import { Button } from '../button'
import Image from 'next/image'
import { PageHeader } from '../text'
import Nav from '../nav'
import Img1 from '../../assets/images/img1.svg'
import Img2 from '../../assets/images/img2.svg'
import Img3 from '../../assets/images/img3.svg'
import Img4 from '../../assets/images/img4.svg'
import Img5 from '../../assets/images/img5.svg'
import Img6 from '../../assets/images/img6.svg'
import Img7 from '../../assets/images/img7.svg'
import { PageType } from 'pages'

export default function Banner({ data }: PageType) {
  const [title, moreInfo] = data.homepage.title.split('-')
  return (
    <div
      id="banner"
      className="relative py-5 bg-gradient-to-l
    from-cyan-600 via-cyan-500  to-cyan-100  
    w-full h-screen overflow-hidden"
    >
      <div
        id="img1"
        className="absolute border-light h-1/4 w-1/6 right-[27vh] top-16"
      >
        <Image src={Img1} alt={'img_1'} />
      </div>
      <div
        id="img2"
        className="absolute border-light h-1/4 w-1/6 top-[32vh] left-[175vh]"
      >
        <Image src={Img2} alt={'img_2'} />
      </div>
      <div
        id="img3"
        className="absolute border-light h-1/4 w-1/6 top-[70vh] left-[135vh]"
      >
        <Image src={Img3} alt={'img_3'} />
      </div>
      <div
        id="img4"
        className="absolute border-light h-1/4 w-1/6 top-0 left-[75vh]"
      >
        <Image src={Img4} alt={'img_4'} />
      </div>
      <div
        id="img5"
        className="absolute border-light h-1/4 w-1/6 top-0 left-[20vh]"
      >
        <Image src={Img5} alt={'img_5'} />
      </div>
      <Nav />
      <div
        id="img6"
        className="absolute border-light h-1/4 w-1/6 top-[35vh] right-[180vh]"
      >
        <Image src={Img6} alt={'img_6'} />
      </div>
      <div
        id="img7"
        className="absolute border-light h-1/4 w-1/6 top-[70vh] left-[50vh]"
      >
        <Image src={Img7} alt={'img_7'} />
      </div>

      <div className="mt-48">
        <div className={`font-bold text-5xl text-center`}>
          <PageHeader>
            {title} - <br /> {moreInfo}
          </PageHeader>
        </div>
        <div className="mt-8 text-center">
          <p>{data.homepage.description}</p>
        </div>
        <div className="text-center">
          <Button
            className="bg-primary 
            text-light mt-10 
            hover:bg-light 
            hover:text-primary"
          >
            {data.homepage.getToKnowUsButton}
          </Button>
        </div>
      </div>
    </div>
  )
}
