import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Profile from '@/Image/Shiyam.png'
import Html5 from '@/Image/html5.png'
import css from '@/Image/css3.png'
import js from '@/Image/js.png'
import php from '@/Image/php.png'
import wp from '@/Image/wordpress.png'
import magento from '@/Image/magento.png'
import node from '@/Image/node.png'
import express from '@/Image/express.png'
import mysql from '@/Image/mysql.png'
import react from '@/Image/react.png'
import teanso from '@/Image/teanso.png'
import kaandhal from '@/Image/Kaandhal.png'
import dokan from '@/Image/dokan.png'

export default function Home() {
  return (
    <>
<div className='banner'>
    <div className="container">
<div className="row">

  <div className="col-sm-4">
    <div className='personal-info'>
    <p className='personal-role'> I'M <span className='person-name'>Shiyam Lawrence</span><br></br>Full Stack Web Developer</p>
       <button type="button" className="btn btn-outline-primary contact-me-btn">Contact Me</button>
  </div>
  </div>
  <div className="col-sm-8">
  <Image
   src={Profile}
   width={200}
   height={200}
   alt="Picture of the author"
 />
  </div>
  <div className="col-sm">
  
  </div>
</div>
</div>
   </div>



   <div id='about' className='about-us'>
   <div className="container">
<div className="row">
<div className="col-sm-12">
<div className='about-content'>
    <h2 className='about-title'>About</h2> 
    <p className='about-description'>
  <hr
    style={{
      background: '#F0BF6C',
      width: '32px',
      color: '#F0BF6C',
      borderColor: '#F0BF6C',
      height: '3px',
      display: 'inline-block', // Keeps the hr and text on the same line
      margin: '5px 10px', // Adjust margin as needed
    }}
  />
  I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.
</p>

  </div>
</div>
  </div>
  </div>
   </div>

   <div id='skills' className='Skills'>
   <div className="container">
<div className="row">
<div className="col-sm-12">
<div className='skill-content'>
    <h2 className='skill-title'>My Skills</h2>
  </div>
</div>

<div className="col-sm-12">
  <div className='row'>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={Html5}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>HTML</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={css}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>CSS</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={js}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>JavaScript</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={php}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Php</p>
  </div>
  </div>
</div>
</div>
</div>

<div className="col-sm-12">
  <div className='row box2'>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={wp}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Wordpress</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={magento}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Magento2</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={node}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Node.js</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={express}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Next.js</p>
  </div>
  </div>
</div>
</div>
<div className="col-sm-12">
  <div className='row box3'>
  <div className='col-sm-2'>
    </div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={mysql}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Mysql</p>
  </div>
</div>
<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={react}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>React.js</p>
  </div>
</div>

<div className='col-sm-3'>
  <div className='skill-box'>
  <Image
   src={Html5}
   width={31}
   height={31}
   alt="Picture of the author"
 />
 <p>Woocommerce</p>
  </div>
  </div>
</div>
</div>
</div>

</div>
  
   <div id='portfolio' className='Portfolio'>
   <div className="container portfolio-projects">

<h3 className='portfolio-title'>Portfolio</h3>
<div className="row">

<div className="col-sm-4">

<a href='http://www.teanso.com' className="portfolio-link">
  <div className="portfolio-container">
    <Image
      src={teanso}
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
      src={kaandhal}
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
<a href='Plugins' className="portfolio-link">
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

  </div>
  </div>
   </div>


   <div className='experince'>
   <div className="container">
<div className="row">
<h3 className='experince-title'>Experince</h3>

<div className="col-sm-10">
 <div className='experince-company'>
  <ul>
    <li>
    <h4 className='role-company'>Full Stack Web Developer</h4>
    <h5 className='company-name'>Teanso technologies Pvt.Ltd  Feb 2023 - Present</h5>
    <p className='location-company'>Chennai,TamilNadu</p>
    <p className='role-description'>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.</p>
    </li>
    <li>
    <h4 className='role-company'>Full Stack Web Developer</h4>
    <h5 className='company-name'>BestWebMastersz  Oct 2022 - Jan 2023</h5>
    <p className='location-company'>Salem,TamilNadu</p>
    <p className='role-description'>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.</p>
    </li>
  </ul>
 </div>
</div>
  </div>
  </div>
   </div>

   
   </>
 
  )
}
