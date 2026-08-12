import { Link } from 'react-router-dom';

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-wider mb-4 uppercase">{title}</h1>
      <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
        This section is currently being updated with new premium content for Asbella. Please check back soon.
      </p>
      <Link to="/" className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-gray-50 transition-all uppercase inline-block">
        Return to Home
      </Link>
    </div>
  );
}
