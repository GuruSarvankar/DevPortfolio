import nngLogo from "../assets/images/nngLogo.jpg";
const AboutMe = () => {
  return (
    <section className="antialiased md:py-16">
      <div className="mx-auto grid container  lg:grid-cols-12 lg:gap-8  xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0 relative">
          <a href="#">
            <img
              className="w-full rounded-[30px] border-[1px] border-solid border-[#eee]"
              src="http://gurusarvankar.com/portfolio/assets/images/GuruSarvankar.png"
              alt="Gurunath Sarvankar"
            />
          </a>
          <div className="absolute bottom-[0] right-[0] h-[160px] w-[200px] bg-[#fff] pt-[16px] pl-[16px] rounded-tl-[30px]">
            <div className="relative"></div>
            <img
              src={nngLogo}
              alt="NNG UX Certified"
              className="w-[180px] h-[140px] rounded-[20px] border-[1px] border-solid border-[#eee]"
            />
          </div>
        </div>
        <div className="me-auto place-self-center lg:col-span-7">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
            Save $500 today on your purchase <br />
            of a new iMac computer.
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Reserve your new Apple iMac 27” today and enjoy exclusive savings
            with qualified activation. Pre-order now to secure your discount.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {" "}
            Pre-order now{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
