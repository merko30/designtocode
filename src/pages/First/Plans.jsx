import { twMerge } from "tailwind-merge";
import Button from "./Button";

const PLANS = [
  {
    id: 1,
    image: "/Free.svg",
    name: "Free Plan",
    price: 0,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    id: 2,
    image: "/Standard.svg",
    name: "Standard Plan",
    price: 9,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
  },
  {
    id: 3,
    image: "/Premium.svg",
    name: "Premium Plan",
    price: 12,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
  },
];

const Plans = () => (
  <div className="container pt-20 px-4 md:px-0">
    <h2 className="text-4xl text-center font-semibold leading-normal mb-5">
      Choose Your Plan
    </h2>
    <p className="text-gray-600 text-center mb-15">
      Let's choose the package that is best for you and explore it happily and
      cheerfully.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12.5">
      {PLANS.map((plan, i) => (
        <div
          key={plan.id}
          className={twMerge(
            "flex flex-col items-center flex-1 bg-white border-2 border-gray-200 rounded-lg py-8",
            i === 2 ? "border-primary" : ""
          )}
        >
          <div className="py-20">
            <img
              src={plan.image}
              alt={plan.name}
              className="w-32 h-32 mx-auto mb-7.5"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-7.5">
              {plan.name}
            </h3>
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 mb-2.5">
                <img src="/check_blank.svg" alt="check" className="w-6 h-6" />
                <p className="text-gray-600 text-sm">{feature}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mb-5 mt-auto">
            <p className="text-3xl font-semibold text-gray-800">
              ${plan.price}
            </p>
            <p className="text-gray-500">/ mo</p>
          </div>
          <Button
            className="rounded-full py-2"
            variant={i === 2 ? "primary" : "outline"}
          >
            Select
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default Plans;
