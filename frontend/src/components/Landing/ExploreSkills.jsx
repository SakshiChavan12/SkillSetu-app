const ExploreSkills = () => {
  const skills = [
    { name: 'React.js', icon: '⚛️', level: 'Advanced' },
    { name: 'UI/UX Design', icon: '🎨', level: 'Intermediate' },
    { name: 'Python', icon: '🐍', level: 'Advanced' },
    { name: 'Digital Marketing', icon: '📊', level: 'Beginner' },
    { name: 'Data Science', icon: '📈', level: 'Advanced' },
    { name: 'Photography', icon: '📷', level: 'Intermediate' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Popular{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-center group">
              <div className="text-6xl mb-3 group-hover:scale-110 transition">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400' :
                skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSkills;