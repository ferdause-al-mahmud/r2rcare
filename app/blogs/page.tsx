import BlogCard from "@/components/Cards/BlogCard";
import { blogs } from "@/const/blogs";

const BlogPage = () => {
  const filters = [
    "All",
    "Service efficiency",
    "Staff productivity",
    "Going digital",
    "Regulatory compliance",
    "Product updates",
    "Case studies",
  ];

  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 py-12 sm:py-16 text-center font-sans">
      {/*  Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5">
        Blogs
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-[120px] leading-relaxed">
        Get advice from our community of medical care experts. Read about
        everyday research, discover new trends, and learn best practices.
      </p>

      {/*  Filters */}
      <div className="flex justify-center mb-10 sm:mb-12">
        <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-4 bg-[#E6D7FF] px-3 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-full shadow-sm overflow-x-auto no-scrollbar">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              className={`px-4  cursor-pointer sm:px-6 py-2 sm:py-3 whitespace-nowrap text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
                idx === 0
                  ? "bg-[#77429A] text-white shadow-sm"
                  : "text-[#161C52] hover:text-[#77429A] hover:bg-[#F3E8FF]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/*  Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      {/*  Pagination */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-10 sm:mt-12 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 sm:w-9 sm:h-9 cursor-pointer rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              num === 1
                ? "bg-[#77429A] text-white"
                : "text-[#77429A] hover:bg-[#E6D7FF]"
            }`}
          >
            {num}
          </button>
        ))}
        <span className="text-[#77429A] font-medium text-lg cursor-pointer hover:text-[#6B3C8B]">
          &gt;
        </span>
      </div>
    </section>
  );
};

export default BlogPage;
