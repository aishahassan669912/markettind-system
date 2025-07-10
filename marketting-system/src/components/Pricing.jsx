import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: '$19/month',
      features: [
        'Email Campaign Management',
        'Basic Automation Tools',
        'Up to 1,000 Contacts',
        'Community Support',
      ],
    },
    {
      title: 'Professional',
      price: '$49/month',
      features: [
        'Multi-Channel Campaigns',
        'Advanced Analytics',
        'Up to 10,000 Contacts',
        'Priority Email Support',
      ],
      recommended: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Unlimited Contacts',
        'Dedicated Account Manager',
        'Custom Integrations',
        '24/7 Premium Support',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Affordable Pricing for Every Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md border ${
                plan.recommended ? 'bg-indigo-50 border-indigo-600' : 'bg-white border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</p>
              <ul className="text-gray-600 text-sm mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <button
                className={`px-4 py-2 rounded font-medium ${
                  plan.recommended
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {plan.recommended ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
