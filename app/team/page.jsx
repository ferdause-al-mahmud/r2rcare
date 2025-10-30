import Image from "next/image";
import alex from "@/assets/alex.jpg";
import olivia from "@/assets/olivia.jpg";
import umar from "@/assets/umar.jpg";

const TeamPage = () => {
  const filters = [
    "All",
    "Founders",
    "Customer Success",
    "Product",
    "Marketing",
    "Sales",
    "People & Finance",
    "Consultants",
    "Board Members",
  ];

  const teamMembers = [
    {
      name: "Olivia Knight",
      title: "Senior People Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: olivia,
    },
    {
      name: "Alex Chaimo",
      title: "Senior Revenue Operations Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: alex,
    },
    {
      name: "Umar Aziz",
      title: "Chief Financial Officer (CFO)",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: umar,
    },
    {
      name: "Olivia Knight",
      title: "Senior People Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: olivia,
    },
    {
      name: "Alex Chaimo",
      title: "Senior Revenue Operations Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: alex,
    },
    {
      name: "Umar Aziz",
      title: "Chief Financial Officer (CFO)",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: umar,
    },
    {
      name: "Olivia Knight",
      title: "Senior People Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: olivia,
    },
    {
      name: "Alex Chaimo",
      title: "Senior Revenue Operations Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: alex,
    },
    {
      name: "Umar Aziz",
      title: "Chief Financial Officer (CFO)",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: umar,
    },
  ];

  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 py-12 sm:py-16 text-center font-sans">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5">
        Meet The Team
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-[120px] leading-relaxed">
        Discover the passionate team behind Log my Care, dedicated to
        transforming social care with intuitive technology and person-centred
        solutions. Meet the people making a real difference.
      </p>

      {/*  Filters */}
      <div className="flex justify-center mb-10 sm:mb-12">
        <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-4 bg-[#E6D7FF] px-3 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-full shadow-sm overflow-x-auto no-scrollbar">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              className={`px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
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

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-1 bg-[#f9f9f9]"
          >
            {/* Image + Overlay Container */}
            <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Purple Overlay */}
              <div className="absolute inset-0 bg-[#77429AD9] border border-[#FFFFFF6B] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-white text-sm mb-4 opacity-90">
                  {member.title}
                </p>
                <p className="text-white text-xs leading-relaxed max-w-[85%] opacity-90">
                  {member.desc}
                </p>
              </div>

              {/* Floating Info Box */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-white rounded-xl shadow-md py-3 px-5 w-[85%] transition-all duration-300 group-hover:opacity-0">
                <h3 className="text-[#161C52] font-semibold text-base sm:text-lg">
                  {member.name}
                </h3>
                <p className="text-[#5F5D75] text-xs sm:text-sm mt-1">
                  {member.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
