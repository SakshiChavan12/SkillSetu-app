import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse top-20 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-20 animate-pulse bottom-20 right-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-600 rounded-full blur-[100px] opacity-10 animate-pulse top-1/2 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce">
            <span className="text-sm text-purple-300">🌟 Join 10,000+ Learners</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Exchange{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            <br />
            <span className="text-white">Grow Together</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with talented individuals, share your expertise, and master new skills through peer-to-peer learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Get Started Free →
              </button>
            </Link>
            <Link to="/browse">
              <button className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-white font-semibold hover:bg-white/20 transition">
                Explore Skills
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-gray-400 text-sm">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-gray-400 text-sm">Skills Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">4.9</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;