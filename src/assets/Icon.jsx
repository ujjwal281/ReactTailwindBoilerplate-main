import { faFacebook, faInstagram, faLinkedin, faPinterest, faTiktok, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icon = () => {
  return (
    <div className='p-2 gap-2 flex '>
        <FontAwesomeIcon className='h-6' icon={faFacebook} />
        <FontAwesomeIcon className='h-6' icon={faTwitter} />
        <FontAwesomeIcon className='h-6' icon={faYoutube} />
        <FontAwesomeIcon className='h-6' icon={faPinterest} />
        <FontAwesomeIcon className='h-6' icon={faInstagram} />
        <FontAwesomeIcon className='h-6' icon={faLinkedin} />
        <FontAwesomeIcon className='h-6' icon={faTiktok} />
    </div>
  )
}

export default Icon