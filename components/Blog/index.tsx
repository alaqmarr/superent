import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";

const Blog = async () => {
  const res = await fetch("https://mystore.alaqmar.dev/api/super-enterprises/products", {
    method: "GET",
    cache: "no-store",
  });
  const BlogData = await res.json();
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Our Products`,
              subtitle: `View our latest products`,
              description: `
              
              `,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
