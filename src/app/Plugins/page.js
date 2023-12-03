import React from 'react'
import dokan from '@/Image/colorss.png'
import dokanpro from '@/Image/pan.png'
import dokans from '@/Image/dokan.png'
import Image from 'next/image'

export default function page() {
  return (
    <>
    <div id='portfolio' className='Portfolio-dokan'>
   <div className="container portfolio-projects">

<h3 className='portfolio-title'>Wordpress Plugins</h3>
<div className="row">

<div className="col-sm-4">

<a href='http://www.teanso.com' className="portfolio-link">
  <div className="portfolio-container">
    <Image
      src={dokan}
      width={400}
      height={230}
      className="portfolio-image"
      alt="Picture of the author"
    />
    <div className="overlay">
      <p>View</p>
    </div>
  </div>
</a>
</div>
<div className="col-sm-4">
<a href='http://www.kaandhal.in' className="portfolio-link">
  <div className="portfolio-container">
    <Image
      src={dokanpro}
      width={400}
      height={230}
      className="portfolio-image"
      alt="Picture of the author"
    />
    <div className="overlay">
      <p>View</p>
    </div>
  </div>
</a>
</div>
<div className="col-sm-4">
<a href='Dokan' className="portfolio-link">
  <div className="portfolio-container">
    <Image
      src={dokans}
      width={400}
      height={230}
      className="portfolio-image"
      alt="Picture of the author"
    />
    <div className="overlay">
      <p>View</p>
    </div>
  </div>
</a>
</div>

  </div>
  </div>
   </div>
    
    
    </>
  )
}
