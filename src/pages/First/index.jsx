import Header from "./Header";
import Hero from "./Hero";
import Statistics from "./Statistics";
import Features from "./Features";
import Plans from "./Plans";

const First = () => {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Features />
      <div className="bg-linear-to-b from-gray-50 to-white">
        <Plans />
      </div>
      <div className="py-80" />
    </>
  );
};

export default First;
