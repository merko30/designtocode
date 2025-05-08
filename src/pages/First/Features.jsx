const FEATURES = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const Features = () => (
  <div className="container flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-0 pb-20">
    <img
      src="/section_2.svg"
      alt="computer-guy"
      className="w-full h-auto flex-1 max-w-full md:max-w-1/2"
    />
    <div className="flex-1 md:ml-24 max-w-96">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 leading-normal">
        We Provide Many Features You Can Use
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        You can explore the features that we provide with fun and have their own
        functions each feature.
      </p>
      <ul className="w-full flex flex-col pl-20 md:pl-0">
        {FEATURES.map((feature, index) => (
          <li key={index} className="flex items-center gap-4 mb-5">
            <img src="/check.svg" alt="check" className="w-6 h-6" />
            <p className="text-gray-600 text-sm">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Features;
