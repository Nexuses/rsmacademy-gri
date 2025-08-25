import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useI18n } from '../utils/i18n';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        {isOpen ? (
          <Minus className="h-5 w-5 text-green-600 flex-shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-green-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { t } = useI18n();
  const faqItems = [
    {
      question: "What is the GRI Certification and why is it valuable?",
      answer: "The GRI Certification is a globally recognized credential that validates your expertise in sustainability reporting using the GRI Standards. It demonstrates your ability to implement effective sustainability reporting practices, enhancing your professional credibility and career opportunities in the growing field of ESG and sustainability management."
    },
    {
      question: "Do I need prior knowledge of sustainability reporting to attend?",
      answer: "While prior knowledge is beneficial, it's not required. The training is designed to accommodate professionals with varying levels of experience. Beginners will gain a solid foundation, while those with experience will deepen their knowledge and refine their reporting practices."
    },
    {
      question: "What does the training fee include?",
      answer: "The fee includes all official GRI training materials, eligibility to take the GRI Certification exam, daily lunch and refreshments, a certificate of attendance, and post-training support. For in-person attendees, it also includes networking opportunities with sustainability professionals."
    },
    {
      question: "Is virtual attendance an option?",
      answer: "Yes, we offer a virtual attendance option with the same high-quality training experience. Virtual participants receive digital materials and can interact with the trainer and other participants in real-time."
    },
    {
      question: "How long is the certification valid?",
      answer: "The GRI Certification is valid for two years from the date of successful completion of the exam. After this period, you can renew your certification by completing continuing education requirements."
    },
    {
      question: "Can my organization arrange a private training session?",
      answer: "Yes, we offer customized in-house training for organizations with multiple participants. Please contact us to discuss your specific needs and schedule a private session tailored to your organization's context."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('faq_title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('faq_intro')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">{t('faq_contact_cta')}</p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition shadow-md">
            {t('contact_us')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;