const About = () => {
  const companyInfo = {
    name: "TechX Solutions",
    founded: 2010,
    mission: "Yangi texnologiyalar orqali biznesni rivojlantirish",
    description:
      "TechX Solutions innovatsion yechimlar va xizmatlar taklif etadi, biznesga samarali texnologiyalarni integratsiya qilishda yordam beradi.",
  };

  return (
    <div id="about" className="container mx-auto py-12 px-4 min-h-[60vh]">
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                        <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                    </div>
                    <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span class="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                    </button>
                </div>
                <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
            </div>
        </div>
    </section>
    </div>
  );
};

export default About;
