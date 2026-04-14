const Features = () => {
  const features = [
    { icon: '🎯', title: 'Smart Skill Matching', description: 'AI-powered algorithm connects you with perfect skill exchange partners' },
    { icon: '📚', title: 'Learn & Teach', description: 'Share your expertise and learn new skills from passionate individuals' },
    { icon: '💬', title: 'Real-time Chat', description: 'Communicate seamlessly with built-in messaging and video calls' },
    { icon: '📅', title: 'Session Booking', description: 'Schedule one-on-one sessions and track your progress' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SkillSetu</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to accelerate your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;