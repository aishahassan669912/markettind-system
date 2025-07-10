import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Smart Campaign Management',
      description:
        'Easily plan, schedule, launch, and track marketing campaigns across multiple channels in one unified dashboard. Stay organized and improve time-to-market with drag-and-drop workflows and pre-built templates.',
    },
    {
      title: 'Real-Time Insights',
      description:
        'Access live analytics and performance dashboards that track customer engagement, click-through rates, conversions, and ROI — empowering you to make data-driven decisions instantly.',
    },
    {
      title: 'Automation Tools',
      description:
        'Save valuable time by automating repetitive marketing tasks like email sequences, SMS follow-ups, and social media posts using intuitive, rule-based workflows.',
    },
    {
      title: 'Customer Segmentation',
      description:
        'Segment your audience using powerful filters like behavior, location, purchase history, and interests. Deliver personalized content and offers that resonate with each group.',
    },
    {
      title: 'Integrated CRM',
      description:
        'Track customer interactions, manage leads, and nurture relationships all within one system. Sync with your campaigns to automate lead scoring, follow-ups, and sales handoffs.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Marketing Features
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-64 h-64 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between items-center text-center flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-indigo-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
