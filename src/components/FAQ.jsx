import React from 'react';
import Accordion from './ui/Accordion';
import faqData from '../data/faq.json';

const FAQ = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Hireable
          </p>
        </div>

        <Accordion items={faqData} />
      </div>
    </section>
  );
};

export default FAQ;