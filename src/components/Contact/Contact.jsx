import React from 'react'

export default function Contact() {
  return (
    <>
    
    {/* <div className=" text-center py-5">
      <h2 className='text-slate-900 pt-5 fs-2'>CONATCT SECTION</h2>

<div className="icons d-flex align-items-center justify-content-center ">
  <span className='span text-slate-900  mr-3'>____</span>
   <i className="fa-solid fa-star fs-3  mt-4  text-slate-900"></i>
<span className='span text-slate-900 ml-3'>____</span>
</div>
</div>

    <div className='input-item py-5 d-flex flex-column align-items-center justify-content-center'>
        <input type="text" className='form-control w-50 py-3 mb-3' placeholder='usr Name' />
       <input type="nambar" className='form-control py-3 w-50  mb-3 ' placeholder='usr Age' />
       <input type="email" className='form-control py-3 w-50 mb-3' placeholder='usr Email' />
       <input type="password" className='form-control py-3 w-50 mb-3' placeholder='usr Password' />
       <button className='text-wrap btn btn-success px-5 mb-3 py-3'>send Message</button>
       
       
    </div> */}

    <div className="py-12 text-center">
    <h2 className='text-slate-900 pt-6 text-lg'>CONATCT SECTION</h2>
    <div className="icons d-flex align-items-center justify-content-center ">
  <span className='span text-slate-900  mr-3'>____</span>
   <i className="fa-solid fa-star fs-3  mt-4  text-slate-900"></i>
<span className='span text-slate-900 ml-3'>____</span>
</div>

<div className="container mx-auto px-32">
<div className=" flex flex-col items-center justify-center py-8 ">
<input type="text" className='text-black p-3 mb-4 w-full ' placeholder='usr Name' />
       <input type="nambar" className=' mb-4 p-3 w-full   ' placeholder='usr Age' />
       <input type="email" className=' text-black p-3 w-full ' placeholder='usr Email' />
       <input type="password" className='form-control mb-4 p-3 w-full  ' placeholder='usr Password' />
       <button className='text-white rounded-xl bg-sky-600 px-5 mb-3 py-3'>send Message</button>


</div>
</div>



    </div>
    
    
    
    
    </>

  )
}
