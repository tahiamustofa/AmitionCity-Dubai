import { useState } from "react";
import vector from "../../assets/img/Vector (2).png";

const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or modify your plan anytime based on availability and terms." },
    { question: "What is your cancellation policy?", answer: "Cancellation policies vary by booking; check terms or contact us for details on refunds and fees." },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
  ];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto lg:my-20 sm:my-10 my-5 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col justify-center w-full max-w-4xl my-4">
        <img 
          src={vector} 
          alt="" 
          className="mx-auto mb-4 w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]" 
        />
        <h2 className="font-bold mb-2 text-center text-gray-900 text-lg xs:text-xl sm:text-2xl md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="flex flex-col justify-center mx-auto text-center px-2">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Everything you need to know about the services and billing.
          </p>
        </div>
      </div>

      <div className="divide-y divide-[#EAECF0] max-w-4xl mx-auto my-6 px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="group">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between py-3 sm:py-4 text-base sm:text-lg md:text-xl font-medium text-gray-900 focus:outline-none"
            >
              <span className="text-left pr-4">{faq.question}</span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                )}
              </div>
            </button>
            {openIndex === index && faq.answer && (
              <div className="pb-4 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}







