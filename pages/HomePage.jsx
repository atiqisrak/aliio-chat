import React from 'react'
import Image from 'next/image'
import aliiologo from "./assets/images/aliio.png"

const HomePage = () => {
  return (
    <>
     <h1>This is homepage</h1>
     <Image
      src={aliiologo}
      alt="Aliio official logo"
      width="150px"
      height="100px"
    />
    </>
  )
}

export default HomePage