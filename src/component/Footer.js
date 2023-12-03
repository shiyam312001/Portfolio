import React from 'react'
import Image from 'next/image'
import mobile from '@/Image/phone.png'
import location from '@/Image/location.png'
import mail from '@/Image/mail.png'
export default function Footer() {
  return (
    <>
    <div id='contact' className='contact'>
   <div className="container">
<div className="row">

  <p className='contact-header'>Contact Me</p>
  
<div className="col-sm-3"> 
</div>
<div className="col-sm-3"> 
<div className='personal-mail'>
  <p className='mail-icon'> <Image
   src={mail}
   width={20}
   height={20}
   alt="mail"
   id="mail"
 /> &nbsp; shiyam312001@gmail.com</p>
</div>
</div>
<div className="col-sm-3"> 
<div className='personal-mail'>
  <p className='mail-icon'> <Image
   src={mobile}
   width={20}
   height={20}
   alt="mobile"
   id="mobile"
 /> &nbsp; 8122315788</p>
</div>
</div>
<div className="col-sm-3"> 
</div>
<div className='col-sm-3'></div>
<div className='col-sm-1'></div>
<div className='col-sm-3'>
 <div className='personal-location'>
  <p className='mail-icon'> <Image
   src={location}
   width={20}
   height={20}
   alt="mobile"
   id="mobile"
 /> &nbsp;Dharmapuri,TamilNadu</p>
</div></div>
  </div>
  </div>
  
  </div>
 
    </>
  )
}


