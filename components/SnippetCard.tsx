
import React from 'react';
import { Link } from 'react-router-dom';
import { Snippet } from '../types';

interface SnippetCardProps {
  snippet: Snippet;
}

const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:border-[#4F46E5]/30 hover:shadow-sm transition-all flex flex-col h-full group">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] bg-[#4F46E5]/5 px-2 py-1 rounded">
          {snippet.category}
        </span>
        <span className="text-sm font-semibold text-gray-900">
          {snippet.price.toLocaleString()} FCFA
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4F46E5] transition-colors">
        {snippet.name}
      </h3>
      <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
        {snippet.shortDescription}
      </p>
      <Link 
        to={`/snippet/${snippet.id}`}
        className="w-full text-center py-2.5 bg-gray-50 hover:bg-[#4F46E5] hover:text-white text-gray-700 font-medium text-sm rounded-lg transition-colors border border-gray-100"
      >
        Voir le snippet
      </Link>
    </div>
  );
};

export default SnippetCard;
