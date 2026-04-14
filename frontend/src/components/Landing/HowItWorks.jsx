const HowItWorks = () => {
  const steps = [
    { number: '01', title: 'Create Profile', description: 'Sign up and build your professional profile', icon: '👤' },
    { number: '02', title: 'Add Skills', description: 'List skills you can teach and want to learn', icon: '⭐' },
    { number: '03', title: 'Find Matches', description: 'Our algorithm finds perfect partners for you', icon: '🔍' },
    { number: '04', title: 'Start Learning', description: 'Connect and begin your skill exchange journey', icon: '🚀' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-gray-300 text-lg">Get started in four simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition">
                {step.number}
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-5xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;