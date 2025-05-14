import { useState } from "react";

import Button from "./Button";

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
  {
    id: 4,
    name: "Alice Johnson",
    rating: 4.5,
    location: "New York, USA",
    feedback:
      "A game changer! This product has made my life so much easier. I can't imagine going back to how things were before.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Bob Brown",
    rating: 4.5,
    location: "New York, USA",
    feedback:
      "Fantastic product! The quality is outstanding and the results are incredible.",
    image: "https://via.placeholder.com/150",
  },
];

const WIDTH = 384;

const CustomerFeedbacks = () => {
  const [translationX, setTranslationX] = useState(0);

  const onPrevious = () => {
    setTranslationX((prev) => {
      const newValue = prev + WIDTH;
      return newValue > 0 ? 0 : newValue;
    });
  };
  const onNext = () => {
    setTranslationX((prev) => {
      const newValue = prev - WIDTH;
      return newValue < -(WIDTH * (FEEDBACKS.length - 1))
        ? -(WIDTH * (FEEDBACKS.length - 1))
        : newValue;
    });
  };

  return (
    <div className="relative md:px-0 overflow-hidden">
      <div className="container flex flex-col items-center max-w-full md:max-w-1/2 lg:max-w-1/3">
        <h2 className="text-4xl text-center font-semibold leading-normal mb-5">
          Trusted by Thousands of Happy Customers
        </h2>
        <p className="text-gray-600 text-center mb-15">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="h-48" />

      <div
        className="px-4 sm:pl-20 flex h-48 gap-4 absolute top-64 left-0 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${translationX}px)`,
        }}
      >
        {FEEDBACKS.map((feedback, index) => (
          <div
            key={index}
            className="w-96 h-full border-2 border-gray-200 rounded-md p-7.5"
          >
            <div className="w-full flex items-center justify-between gap-2 mb-5">
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
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm">"{feedback.feedback}"</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center gap-2 mt-10">
        <Button
          onClick={onPrevious}
          variant="outline"
          className="rounded-full size-10 flex items-center justify-center p-0 drop-shadow-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6 transform rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
        <Button
          onClick={onNext}
          className="rounded-full size-10 flex items-center justify-center p-0 drop-shadow-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default CustomerFeedbacks;
