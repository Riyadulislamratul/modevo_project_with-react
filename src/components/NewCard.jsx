import React from 'react'

const NewCard = ({ image, title, price }) => {
  return (
        <div className='items-center'>
            <img src={image} alt="" className=' h-75 rounded-2xl'/>
            <h4 className='font-jost text-4 font-medium mt-4'>{title}</h4>
            <p className='font-jost text-4 font-medium mt-2.5'>{price}</p>
        </div>
  )
}

export default NewCard