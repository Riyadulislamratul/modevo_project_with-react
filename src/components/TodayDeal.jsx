import React from 'react'
import todayDeal from '../assets/todayDeal1.jpg'
import todayDeal2 from '../assets/todayDeal2.jpg'
import todayDeal3 from '../assets/todayDeal3.jpg'
import DiscountCard from "./DiscountCard";

const TodayDeal = () => {
    const bgImage = {
        background: `url(${todayDeal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  
    return (
    <section className='mt-20'>
        <div className="container">
            <div className='items-center text-center'>
                <p className='font-jost mb-2 text-[18px] leading-[27px] text-gray-75'>Today Deal's</p>
                <h2 className='font-jost mb-4 text-[40px] leading-[55px] text-black-222'>Deal of the day</h2>
                <p className='font-jost mb-[45px] text-[18px] leading-[27px] text-gray-75'>Limited-time styles at unbeatable prices, Shop today’s hottest picks before they’re gone!</p>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <div className='relative h-150' style={bgImage}>

                </div>
                <div className='flex flex-col gap-12'>
                    <DiscountCard
                        title={"It’s in the Bag: Limited Deals"}
                        discount={"SALE UP TO 25%"}
                        img={todayDeal2}
                    />
                    <DiscountCard
                        title={"Make a Statement This Season"}
                        discount={"SALE UP TO 25%"}
                        img={todayDeal3}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TodayDeal