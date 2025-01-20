import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is VTS Show?",
      answer: "VTS Show is your one-stop platform for booking tickets for movies, live events, plays, sports, and various activities."
    },
    {
      question: "How do I book a ticket?",
      answer: "Browse through our categories, select your desired event, choose your seats, and proceed to payment."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, net banking, mobile wallets, and UPI payments."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page, and follow the instructions to reset your password."
    },
    {
      question: "Are there any ongoing promotions?",
      answer: "Check our 'Offers' section for the latest promotions and discounts on tickets."
    },
  ];

  return (
    <div className="accordion">
      {questions.map((item, index) => (
        <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="accordion-question" onClick={() => handleToggle(index)}>
            {item.question}
            <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className="accordion-answer">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
