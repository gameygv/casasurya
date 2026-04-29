import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
}

export default function TestimonialCard({ name, image, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 relative">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-amber-100"
          />
          <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white p-2 rounded-full">
            <Quote size={16} />
          </div>
        </div>
        <p className="text-stone-600 leading-relaxed mb-6 italic">"{text}"</p>
        <h4 className="font-serif font-semibold text-lg text-stone-900">{name}</h4>
      </div>
    </div>
  );
}
