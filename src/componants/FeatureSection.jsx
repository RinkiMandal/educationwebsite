import React from 'react';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Engage with our interactive courses that make learning enjoyable and effective.',
    icon: '🎓',
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from industry experts with years of experience in their respective fields.',
    icon: '👨‍🏫',
  },
  {
    title: 'Flexible Schedule',
    description: 'Study at your own pace and on your own schedule to fit your busy lifestyle.',
    icon: '⏰',
  },
  {
    title: 'Diverse Course Catalog',
    description: 'Choose from a wide range of courses covering various subjects and skill levels.',
    icon: '🌐',
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
