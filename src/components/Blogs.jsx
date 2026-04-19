import React from "react";
import BlogCard from "./BlogCard";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const Blogs = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="font-jost text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-4">
            Our Latest News & Blogs
          </h2>

          <p className="font-jost text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            Stay inspired with trend stories, expert styling tips, and fresh fashion insights — all curated just for you.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BlogCard
            image={blog1}
            title="Effortless Style Made Easy"
            date="March 15, 2024"
            description="Look stylish with minimal effort using versatile basics perfect for everyday wear."
            user="Jane Doe"
          />

          <BlogCard
            image={blog2}
            title="Oversized Denim Looks Are In"
            date="March 18, 2024"
            description="From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."
            user="John Smith"
          />

          <BlogCard
            image={blog3}
            title="Sustainable Fashion Trends"
            date="March 20, 2024"
            description="Discover eco-friendly fashion choices that are both stylish and responsible."
            user="Emily Johnson"
          />
        </div>

      </div>
    </section>
  );
};

export default Blogs;