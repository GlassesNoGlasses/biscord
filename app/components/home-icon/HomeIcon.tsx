
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const HomeIcon = () => {

  return (
    <Link
    href={"/"}>
      <Image
        src="/images/controller.jpeg"
        alt="Home Icon"
        width={180}
        height={37}
      />
    </Link>
  )
}

