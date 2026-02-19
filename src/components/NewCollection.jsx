import React from 'react'
import Button from './Button'
import NewCard from './NewCard' 
import New1 from '../assets/new1.jpg'
import New2 from '../assets/new2.jpg'
import New3 from '../assets/new3.jpg'
import New4 from '../assets/new4.jpg'
import New5 from '../assets/new5.jpg'

const NewCollection = () => {
  return (
    <section className='mt-20'>
        <div className="container">
            <div className='grid grid-cols-2 gap-17.25'>
                <div>
                <h2 className='font-jost text-[40px] leading-10.5 text-black-222 mb-4'>
                    New Arrival Collection
                </h2>
                <p className='font-jost text-[18px] text-black-222 mb-7.5 leading-[27px]'>
                    Step into the season with fresh essentials. From statement heels to everyday accessories — curated to elevate your style in every detail.
                </p>
                <Button TagName="a" href="/shop" >
                    Shop Now
                </Button>
                <img src={New1} alt="" className='h-147.5 w-full mt-12' />
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <NewCard
                    image={New2}
                    title="Golden Strappy Heels"
                    price="$129.99"
                />
                <NewCard
                    image={New3}
                    title="Floral Embossed Cream Tote"
                    price="$249.000"
                    />
                <NewCard
                    image={New4}
                    title="Slim Matte Black Belt"
                    price="$79.000"
                />
                <NewCard
                    image={New5}
                    title="Bold Frame Sunglasses"
                    price="80.000"
                />
            </div>
            </div>
        </div>
    </section>
  )
}

export default NewCollection