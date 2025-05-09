// import { useState } from "react";

const FEEDBACKS = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    location: "New York, USA",
    feedback:
      "This is the best product I have ever used. Highly recommend it to everyone!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4.5,
    location: "New York, USA",
    feedback:
      "Amazing experience! The customer service was top-notch and the product exceeded my expectations.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sam Wilson",
    rating: 4.5,
    location: "New York, USA",
    feedback:
      "I was skeptical at first, but this product really works! I'm so glad I gave it a try.",
    image: "https://via.placeholder.com/150",
  },
];

const CustomerFeedbacks = () => {
  //   const [active, setActive] = useState(0);
  return (
    <div className="relative container px-4 md:px-0">
      <div className="flex flex-col items-center max-w-full md:max-w-1/2 lg:max-w-1/3">
        <h2 className="text-4xl text-center font-semibold leading-normal mb-5">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="text-gray-600 text-center mb-15">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="flex gap-4 absolute top-64 left-0">
        {FEEDBACKS.map((feedback, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-md w-80 p-7.5"
          >
            <div className="flex items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-gray-500">{feedback.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">{feedback.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 bg-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                ></svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm">"{feedback.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedbacks;
