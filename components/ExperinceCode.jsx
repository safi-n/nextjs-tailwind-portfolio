import React from 'react'

const ExperinceCode = () => {
  return (
    <div className='w-[60vw] mx-auto text-white'>
      <div className="experince-title">
        <p className="l-header"><span id='speciality-font'>5+</span>YEARS OF <br /> EXPERIENCE</p>
      </div>
      <div className="flex experience-content justify-between gap-8 mt-6 max-[800px]:flex-col">
        <p className='w-[30rem] max-[800px]:w-[20rem]'>An experienced multimedia designer with more than 5 years in the field, who has also developed frontend skills with 4 years of experience. Has a background in creating various multimedia designs and has expertise in combining design and technology to build engaging user experiences.</p>
        <div className="my-codes text-lg flex flex-col space-y-1 border-l-[1px] pl-3 ">
          <p>… Honor commitments and deadlines</p>
          <p>… Provide quality work</p>
          <p>… Communicate effectively</p>
          <p>… Be open to feedback and criticism.</p>
        </div>
      </div>
    </div>
  )
}

export default ExperinceCode