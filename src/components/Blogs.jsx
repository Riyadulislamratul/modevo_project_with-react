import React from 'react'
import BlogCard from './BlogCard'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'


const Blogs = () => {
  return (
    <section>
      <div className="container">
        <div className='text-center'>
          <h2 className="text-3xl font-jost text-[40px] leading-13.5 text-center mb-4">Our Latest News & Blogs</h2>
          <p className="font-jost text-[18px] leading-6.75 mb-10 text-gray-75">Stay inspired with trend stories, expert styling tips, and fresh fashion insights — all curated just for you.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <BlogCard
            image={blog1}
            title={"Effortless Style Made Easy"}
            date={"March 15 2024"}
            description={"Look stylish with minimal effort using versatile basics perfect for everyday wear."}
            user={"Jane Doe"}
          />
          <BlogCard
            image={blog2}
            title={"Oversized Denim Looks Are In"}
            date={"March 18"}
            description={"From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."}
            user={"John Smith"}
          />
          <BlogCard
            image={blog3}
            title={"Sustainable Fashion Trends"}
            date={"March 20 2024"}
            description={"Discover eco-friendly fashion choices that are both stylish and responsible."}
            user={"Emily Johnson"}
          />
        </div>
      </div>
    </section>
  )
}

export default Blogs