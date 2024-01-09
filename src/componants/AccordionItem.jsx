import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full bg-white p-4 text-left rounded-md shadow-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}>▼</span>
      </button>
      <div className={`mt-2 p-4 bg-gray-100 rounded-md overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="container w-4/5 mx-auto mt-8">
      <h2 className="text-3xl text-center font-bold mb-4">Frequently Asked Questions</h2>
      <AccordionItem
        title="How do I enroll in a course?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionItem
        title="What payment methods do you accept?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionItem
        title="Can I access the courses on multiple devices?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionItem
        title="Is there a refund policy?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionItem
        title="How can I contact support?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionItem
        title="Are there any prerequisites for the courses?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default Accordion;
