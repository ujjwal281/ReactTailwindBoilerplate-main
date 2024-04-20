import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faArrowRight, faCheck, faCircleInfo, faRotateLeft, faShield } from '@fortawesome/free-solid-svg-icons';
import Card from '../assets/Card';

const PricingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className='flex flex-col justify-center items-center bg-violet-100 w-screen pt-5 gap-4'>
        <h1 className='flex font-bold text-3xl'>Wix Premium Plans</h1>
        <p className=' px-96 flex justify-center items-center'>Wix gives you 100s of template unlimited pages and top grade hosting FREE . Upgrade to Premium and get even more.</p>
        <button className=' bg-purple-600 rounded-3xl p-2 px-6 text-white'>Get Started Today</button>
        <div className='flex'>
          <section className='flex flex-col justify-center items-center p-4 border-l border-r border-t bg-white rounded-t-xl text-purple-600'>
            <b>Website Plans</b>
            <div>Great for showing the proportional site</div>
          </section>
          <section className='flex flex-col justify-center items-center p-4 border-l border-r border-t  rounded-t-xl bg-violet-200'>
            <b>Business and eCommernce Plans </b>
            <div>Essential for accepting online payments</div>
          </section>
        </div>
      </div>

      <div className="flex p-10">

        <PricingTable
          name=" s"
          usage="ss "
          price="s "
          features={['Custom domain', 'Free domain for 1 year', 'Bandwidth' , 'Storage space', 'Video hours' , 'Yandev voucher', <div className> <div>Site Booster app <div/> <div  className=' text-xs'>Free for 1 year</div> </div></div> , <div> <div>Visitor Analytics App<div/> <div className=' text-xs'>Free for 1 year</div> </div></div> ,'Professional logo','Social media logo files','Csutomer care' ]}
          extra={['','','','','','','Free for 1 year','Free for 1 year','','','']}
        />

        <PricingPlan
          name="VIP"
          usage="First Priority Support"
          price="500"
          features={[ <FontAwesomeIcon icon={faCheck}/> ,<FontAwesomeIcon icon={faCheck} />, 'Unlimted', '35 GB', '5 hours' ,<FontAwesomeIcon icon={faCheck} />,<FontAwesomeIcon icon={faCheck} />,<FontAwesomeIcon icon={faCheck} />,<FontAwesomeIcon icon={faCheck} />,<FontAwesomeIcon icon={faCheck} /> , 'Priority customer care']}
        />

        <PricingPlan
          name="Unlimited"
          usage="Entrepreneues & Freelancers"
          price="250"
          features={[ <FontAwesomeIcon icon={faCheck}/> ,<FontAwesomeIcon icon={faCheck} />, 'Unlimted', '10 GB', '1 hours' ,<FontAwesomeIcon icon={faCheck} />,<FontAwesomeIcon icon={faCheck} />,<FontAwesomeIcon icon={faCheck} />,'-','-' , '24/7 customer care']}
        />

        <PricingPlan
          name="Combo"
          usage="For Personal Use"
          price="150"
          features={[ <FontAwesomeIcon icon={faCheck}/> ,<FontAwesomeIcon icon={faCheck} />, '2GB', '3 GB', '30 minutes' ,'-','-','-','-','-' , '24/7 customer care']}
        />

        <PricingPlan
          name="Correct Domanin"
          usage="Most Basic"
          price="90"
          features={[ <FontAwesomeIcon icon={faCheck}/> ,'-', '1 GB', '500 MB', '-' ,'-','-','-','-','-' , '24/7 customer care']}
        />
      </div>

      <div className='flex w-screen py-6 px-36 flex-start' >
        <div className=' flex flex-col bg-purple-100 gap-5 p-9'>
          <b className=' text-2xl b'>Business & eCommernce plans</b>
          <section>Gorw and manhe your online business with a custom storefont , catalog and order management , shipping and taxes , integrated sales channels and more. </section>
          <a href="/" className=' text-blue-600 hover:text-blue-500'>See Business Plans <FontAwesomeIcon className=' ml-3' icon={faArrowRight} /> </a>
        </div>
      </div>


      <div className='px-36 my-7 flex w-screen'>
        <div className='flex border-b-2 pb-14'>
        Display price are for yearly subscriptions, paid in full at the time of purchase. Prices do not include applicable taxes,  which are determined according to our billing address. 
        The final price can be seen on the purchase page , before payment is completed.  
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div className='flex mx-10 gap-10 w-screen justify-center items-center px-32'>
        <div className='flex flex-col p-6'>
          <section>Accepted Payment Method</section>
          <section>
            <Card/>
          </section>
        </div>

        <div>
          |
        </div>

        <div className='flex gap-8 p-6'>
          <section className='flex justify-center items-center' ><FontAwesomeIcon icon={faRotateLeft} className='h-10' /></section>
          <section>
            <div>MONEY BACK GUARANTEE</div>
            <div className=' text-sm'>Try Wix for 14 days and if you're not 100% satisfied , get your money back</div>
          </section>
        </div> 

        <div>
          |
        </div>

        <div className='flex gap-8 p-6'>
          <section className='flex justify-center items-center'><FontAwesomeIcon icon={faShield} className='h-10' /></section>
          <section>
            <div>SSL SECURE PAYMENT</div>
            <div className='text-sm mt-2'> Your information by 256-bit SSL encrption.</div>
          </section>
        </div>

      </div>



      <div>
        <div className='flex p-8 w-screen justify-center items-start bg-slate-100'>
          <section className='p-10'>
            <b className=' text-2xl my-2'>Frequently Asked Questions</b>
            <p>Haven't found what you are looking for ? Try Wix Help Center or Contact us</p>
          </section>
          <section>
            <Options
              heading = "What is a premium Plans?"
              info="Creating your website is free . With a Premium Plan you can connect your own domanin , remove Wix ads from your site and more . Most Premium Plasn include a 1 year free domain voucher . For best value , we recommend oru Yearly or Multi- Year Plans."
            />
            <Options
              heading = "Can i try a Wix Premium Plans for free?"
              info="Yes. Try any Wix Premium Plans and if you decide it's not for you , you can cancel within 14 days and receive a full refund-- no questions asked . This applies to the initial upgrade to a Premium Plan."
            />
            <Options
              heading = "How d i get my domain?"
              info = "Most Yearly or Multi-Year Premium Plans come with a 1 year domain voucher . You can choose your own domain name with suffixes such as .com , .net , .org and more . Once you find the perfect domain for your site , your voucher will be waiting for you at checkout."
            />
            <Options
              heading = "Why do i need a custom domain?"
              info = "A custom domain , like mystunningwebsite.com , is a great way to get found online and promote your brand. Replace your free Wix URL (username.website.com/sitename) with a custom domain you purchased from Wix , or one you alredy own."
            />
            <Options
              heading = "How can i get my own presonalized email address?"
              info ="Once you have your domain , you can purchase a Google Workspace plans and get a custom email address using your domain , like info @mystunningwebiste.com . We've partenerd with Google to give you 30GB fo Drive storage , as well as Google Calender , Docs , Sheets and Slides."

            />
            <Options
              heading = "Where can i find my billing information?"
              info="Sign into your Wix account and coose BIlling & Payments from the main menu at the top-right of the page . You'll see all your subscriptions and billing history right there"
            />
            <Options
              heading = "What online payments are accepted?"
              info="Wix accepts allmajor credit cards and debit cards , including Visa , Mastercard , American Express , Discover , JCB and Dinners . Additional payments options may be in your specific location."
            />

          </section>

        </div>
      </div>


    </div>
  );
};





const PricingPlan = ({ name, usage, features ,price , extra }) => {
  return (
    <div className="borde hover:mouse transition ease-in-out hover:bg-slate-200 ">
      <div className='border border-black flex flex-col justify-center items-center p-3 w-48 h-40'>
      <h2 className="text-1xl font-semibold">{name}</h2>
      <div className=" text-sm w-24 flex justify-center items-center h-10">{usage}</div>
      <div className=" ">-</div>

      <div className='flex'>
        <div className="text-3xl font-bold ">{price}</div>
        <section className=' text-xs'>
        <div className="">py6</div>
        <div className="">/month</div>
        </section>
      </div>

      </div>

      <ul className="text-sm">
        {features.map((feature, index) => (
          <div key={index} className="border border-black flex justify-center items-center p-5 h-16">
            {feature}
            </div>
        ))}
      </ul>
    </div>
  );
};




const PricingTable = ({ name, usage, features ,price }) => {
  return (
    <div className="borde hover:mouse">
      <div className='border border-black flex flex-col justify-center items-center p-3 w-56 h-40'>

      </div>

      <ul className="text-sm">
        {features.map((feature, index) => (
          <li key={index} className="border border-black flex justify-between items-center p-5 h-16">
            <div>{feature}</div> 
            <div> <FontAwesomeIcon icon={faCircleInfo}/> </div>
            </li>
        ))}
      </ul>
    </div>
  );
};






const Options = ({heading , info}) =>{
  return(
    <div className='p-10 border-t  w-full'>
      <b className='flex justify-between'>
        <div>{heading}</div>
        <div><FontAwesomeIcon icon={faAngleUp} /></div>
      </b>
      <div>
        {info}
      </div>

     </div>
  )
}

export default PricingPage;
