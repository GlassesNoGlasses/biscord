
import React from 'react'

export const HomeIcon = () => {
    
    const controllerImagePath = '../../images/controller.jpeg'

  return (
    <div>
        <img src={require(controllerImagePath)} alt='homeIcon' className='w-full h-full'/>
    </div>
  )
}

