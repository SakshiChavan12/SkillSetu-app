import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'UI/UX Designer', content: 'SkillSetu transformed how I learn. Found an amazing mentor!', rating: 5 },
    { name: 'Michael Chen', role: 'Data Scientist', content: 'The skill matching algorithm is incredible!', rating: 5 },
    { name: 'Emily Rodriguez', role: 'Marketing Manager', content: 'Teaching others has helped me reinforce my knowledge.', rating: 5 },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Community Says</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
            <div className="text-yellow-400 text-2xl mb-4">{'★'.repeat(testimonials[current].rating)}</div>
            <p className="text-gray-300 text-lg mb-6 italic">"{testimonials[current].content}"</p>
            <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
            <p className="text-purple-400">{testimonials[current].role}</p>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition ${i === current ? 'w-8 bg-purple-500' : 'bg-gray-500'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;