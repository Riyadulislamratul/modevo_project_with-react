import React from 'react'
import FreshLookImage from '../assets/freshLook.jpg'
import Button from './Button'

const FreshLook = () => {
    const bgImage = {
        background: `url(${FreshLookImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  return (
    <section className='my-20'>
        <div className="container" style={bgImage}>
            <div className=' items-center text-center py-25 px-85'>
                <h2 className='font-jost text-[64px] leading-[80px] text-white mb-5'>Fresh Looks for Sunny Days</h2>
                <p className='text-white text-center font-jost text-[20px] leading-7.5 mb-10'>From breezy suits to playful sets — this season is all about feeling good and looking better. Step into Spring/Summer with pieces that radiate confidence, color, and comfort.</p>
                <Button TagName="a" href="/shop" primary={false}>Shop Now</Button>
            </div>
        </div>
    </section>
  )
}

export default FreshLook