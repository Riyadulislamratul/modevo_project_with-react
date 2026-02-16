import React from 'react'
import aboutImage from "../assets/about.jpg"
import Button from './Button'

const About = () => {

    const bgImage = {
        background : `url(${aboutImage})`,
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover"
    }

  return (
    <section className='bg-gray-f3'>
        <div className= "container">
            <div className='grid grid-cols-2'>
                <div className='pt-[190px] pb-[132px] pr-26'>
                <h3 className='text-gray-75 font-jost pb-2 text-[18px]'>About US</h3>
                <h1 className='font-jost text-[40px] pb-4'>Designed to Empower, Crafted to Last</h1>
                <p className='font-jost text-[18px] text-gray-75 pb-7.5'>At Modevo, we blend timeless design with modern flair — creating pieces that inspire confidence, 
                    celebrate individuality, and redefine everyday elegance. From detail to silhouette, 
                    every piece tells a story of quality and character.</p>
                <Button TagName="a" href="/shop" primary= {false}>Shop Now</Button>
            </div>
            <div style={bgImage} className="">

            </div>
            </div>
        </div>
    </section>
  )
}

export default About