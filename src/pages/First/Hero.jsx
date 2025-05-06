import Button from "./Button";

const Hero = () => (
  <div className="container px-4 md:px-0 flex flex-col-reverse md:flex-row justify-between items-center py-22 gap-8 md:gap-48">
    <div className="flex-1">
      <h1 className="text-4xl font-semibold text-gray-800 mb-5 leading-normal">
        Want anything to be easy with{" "}
        <span className="font-bold">LaslesVPN</span>.
      </h1>
      <p className="text-gray-600 mb-12.5">
        Provide a network for all your needs with ease and fun using LaslesVPN
        discover interesting features from us.
      </p>
      <Button className="w-full md:w-auto">Get Started</Button>
    </div>
    <img src="/hero_1.svg" alt="Hero" className="flex-1 w-full h-auto" />
  </div>
);

export default Hero;
