import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <hr class="border-t-2 border-gray-300 border-dashed px-8" />

<div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.lp_img} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-black'>Clickwell Private Limited is an Indian e-commerce company, headquartered in Bangalore,
             . The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.

            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>+1-212-456-7890</li>
                <li>contact@Clickwell.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center text-black'>Copyright 2024@ Clickwell.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
