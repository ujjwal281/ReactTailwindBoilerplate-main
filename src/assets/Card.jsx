import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = () => {
  return (
    <div className='flex p-4'>
        <FontAwesomeIcon className='h-6 m-4' icon={faCcVisa} />
        <FontAwesomeIcon className='h-6 m-4' icon={faCcMastercard} />
    </div>
  )
}

export default Card