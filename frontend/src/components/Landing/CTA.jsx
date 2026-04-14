import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning Journey?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">Join thousands of learners already transforming their skills</p>
          <Link to="/register">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform">
              Get Started Free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;