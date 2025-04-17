import React from 'react'

const JobListFooter = () => {
  return (
    <div className="Joblist-footer border-b-2 border-white/5 p-2 flex justify-between items-center gap-36 pl-2 pr-2 bg-white/5 ">
        <div className="email-enter">
            <input className='bg-white/5 p-1.5 rounded-md text-sm' type="email" placeholder="Enter your email address"/>
            <button className="btn ml-4 bg-black/25 p-1.5 rounded-md">Subscribe</button>
        </div>
        <div className="job-Data flex gap-8 justify-between text-center  items-center">
            <p className='text-gray-200'>1280 <br/> <b>Live Jobs</b></p>
            <p className='text-gray-200'>14 <br/> <b>Companies</b></p>
            <p className='text-gray-200'>31 <br/> <b> Candidates</b></p>
            <p className='text-gray-200'>1280 <br/> <b>Live Jobs</b> </p>
        </div>
    </div>
  )
}

export default JobListFooter
