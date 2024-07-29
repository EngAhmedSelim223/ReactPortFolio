
import React from 'react'
import ImgeHome from '../../assets/images/skills-01.jpg'






export default function Home() {
  return (


<div className="bg-sky-600 py-12 text-center  flex-col ">
<img className='pt-6 inline-block   rounded-full' src={ImgeHome} alt="" />
<div className="icons d-flex align-items-center justify-content-center py-4">
<span className='span text-white  mr-3'>____</span>
<i className="fa-solid fa-star fs-3  mt-4  text-white"></i>
<span className='span text-white ml-3'>____</span>
 </div>
 <h2 className=' py-3 text-white'>START FRAMEWORK</h2>
 <p className='py-3 text-white'>Graphic Artist - Web Designer - Illustrator</p>
</div>
  )
}
