import React from 'react';
import { BookOpen, Award, Check } from 'lucide-react';
import { useI18n } from '../utils/i18n';

const CourseOverview = () => {
  const { t } = useI18n();
  const learnItems = [
    t('overview_learn_item_1'),
    t('overview_learn_item_2'),
    t('overview_learn_item_3'),
    t('overview_learn_item_4'),
    t('overview_learn_item_5'),
    t('overview_learn_item_6'),
  ];
  const advItems = [
    t('overview_adv_item_1'),
    t('overview_adv_item_2'),
    t('overview_adv_item_3'),
    t('overview_adv_item_4'),
    t('overview_adv_item_5'),
    t('overview_adv_item_6'),
  ];
  return (
    <div className="pt-16 bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('overview_title')}
          </h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            {t('overview_intro_1')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-primary">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-navy">{t('overview_learn_title')}</h3>
              </div>
              <p className="text-darkGray mb-6">
                {t('overview_learn_desc')}
              </p>
              <ul className="space-y-3">
                {learnItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-darkGray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-primary">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-navy">{t('overview_adv_title')}</h3>
              </div>
              <p className="text-darkGray mb-6">
                {t('overview_adv_desc')}
              </p>
              <ul className="space-y-3">
                {advItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-darkGray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;