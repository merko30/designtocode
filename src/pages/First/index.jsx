import Header from "./Header";
import Hero from "./Hero";
import Statistics from "./Statistics";
import Features from "./Features";
import Plans from "./Plans";
import Map from "./Map";
import Clients from "./Clients";
import CustomerFeedbacks from "./CustomerFeedbacks";
import Footer from "./Footer";

const First = () => {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Features />
      <div className="pb-20 bg-linear-to-b from-gray-50 to-white">
        <Plans />
        <Map />
        <Clients />
        <CustomerFeedbacks />
      </div>
      <Footer />
    </>
  );
};

export default First;
