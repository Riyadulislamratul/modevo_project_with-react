import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <section className='mt-20'>
        <div className='flex justify-center items-center gap-[38px] text-center py-[57px] bg-gray-75'>
            <h2 className='font-jost text-[32px] leading-[48px] text-white'>Exlusive Member - plus 8% reward and free shipping</h2>
            <Button TagName="a" href="/shop" primary= {false}>Shop Now</Button>
        </div>
    </section>
  )
}

export default Subscribe