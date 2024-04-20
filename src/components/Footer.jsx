import { faWix } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Icon from '../assets/Icon'


const Footer = () => {
  return (
    <div className='flex justify-center pt-7 px-36 w-screen gap-10'>
        <Credit heading = "Product" extras = { ['Template' ,'Exlore','Features ', 'Website-Builder' , 'Web Accessibility' , 'Velo' , 'Wix Playground' , 'My Sites','Premium Plans', 'Wix SEO' , 'Logo Maker', 'Create a Blog' , 'Online Store' , 'Wix Bookings' , 'Restaurants' , 'App Market' , 'Domains' ,'Business Email' , 'Web Hosting' , 'Developers' ,'Enterprise' , 'Email Marketing' , 'Website Design ' ,'Professional Tools' , 'Email Marketing' , 'Website Design' , 'Professional Tools', 'Email Marketing' , 'Website Design ', 'Professional Tools'  ] }/>
        <Credit heading = "Company"  extras={['About Wix' , 'Press Room' , 'Investor Relations ', 'Wix Jobs', 'Design Assets' , 'Terms of Use' , 'App Market Terms' , 'Privacy Policy' , 'Privacy and Security Hub ' , 'Accessibility Statement' , 'Abuse' , 'Affiliates' , 'Wix Capital' , 'Upadtes & releases' , 'Contact Us ', 'Patent Notice ', 'Sitemap']}/>
        <Credit heading = "Community" extras={['Wix BLog ' ,'Wix Makrketplace' , 'Student Website' , 'Wix Encyclopedia ', 'Partner Community']}/>
        <Credit heading = "Support" extras={['Support Center' , 'Getting Started Guide', 'Wix Learn' ,'Status Page']}/>
        <div>
            <b className='mb-2'><FontAwesomeIcon icon={faWix} className='h-14'/></b>
            <p>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools-enabling anyone to create and grow online.</p>
            <div className='mt-2'><FontAwesomeIcon icon={faCopyright} className='pr-2' />2006-2022 Wix.com, inc</div>
            <div><Icon/></div>
        </div>
    </div>
  )
}

const Credit = ({heading , extras}) => {
    return(
        <div className='flex flex-col mb-3 w-96 m-2'>
            <div className=''>{heading}</div>
            <div>
            {extras.map((extra, index) => (
                <div key={index} className="mt-1 text-sm py-1">{extra}</div>
            ))}
            </div>
        </div>
    )
}

export default Footer